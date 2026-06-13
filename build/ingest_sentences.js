/* Phase 2 ingest — example sentences for N5 vocabulary.
 *
 * Source : Tanaka Corpus (examples.utf, WWWJDIC format) — same CC BY data as Tatoeba.
 * Output : ../data/sentences.js  (const VOCAB_SENTENCES = { kana: {jp, r, en} })
 *
 * Design choices:
 *  - Existing hand-crafted entries are AUTHORITATIVE and never overwritten.
 *  - We only fill words that have no sentence yet (raise coverage, keep quality).
 *  - The kana reading line `r` is emitted ONLY when it can be reconstructed with
 *    full confidence (every kanji resolved). Otherwise r="" — never guess a reading.
 *  - Sentences are scored for N5-suitability: shorter + higher N5-kanji coverage win,
 *    and a clean reconstructable reading is strongly preferred.
 */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "data");

/* ---------- load app data (vocab list, kanji set, existing sentences) ---------- */
function loadGlobals(file, names){
  let src = fs.readFileSync(path.join(DATA, file), "utf8");
  // top-level const/let don't become context properties; copy them onto globalThis
  src += "\n" + names.map(n => `globalThis[${JSON.stringify(n)}] = (typeof ${n}!=="undefined")?${n}:undefined;`).join("\n");
  const ctx = {}; vm.createContext(ctx); vm.runInContext(src, ctx);
  const out = {}; names.forEach(n => out[n] = ctx[n]);
  return out;
}
function parseCSV(txt){
  const lines = txt.trim().split(/\r?\n/);
  const head = lines[0].split(",");
  return lines.slice(1).map(l => { const c=l.split(","); const o={}; head.forEach((h,i)=>o[h.trim()]=(c[i]||"").trim()); return o; });
}
const { VOCAB_CSV } = loadGlobals("vocabulary.js", ["VOCAB_CSV"]);
const { KANJI_JSON } = loadGlobals("kanji.js", ["KANJI_JSON"]);
/* Seed from the ORIGINAL hand-crafted file (build/sentences.original.js) so the
   script is idempotent — re-runs must not treat prior generated output as authoritative. */
function loadExisting(){
  const src = fs.readFileSync(path.join(__dirname, "sentences.original.js"), "utf8")
    + '\nglobalThis.VOCAB_SENTENCES = VOCAB_SENTENCES;';
  const ctx = {}; vm.createContext(ctx); vm.runInContext(src, ctx);
  return ctx.VOCAB_SENTENCES;
}
const EXISTING = loadExisting();

const VOCAB = parseCSV(VOCAB_CSV).filter(v => v.kana && v.meaning);
const N5KANJI = new Set();
JSON.parse(KANJI_JSON).forEach(g => (g.kanji||[]).forEach(k => N5KANJI.add(k.kanji)));

const hasKanji = s => /[\u4e00-\u9faf]/.test(s);
const isKana = ch => /[\u30a0-\u30ff]/.test(ch);   // katakana incl. ー long mark

/* ---------- parse the Tanaka corpus ---------- */
/* A token looks like:  彼(かれ)[01]{彼ら}  →  head=彼 reading=かれ sense=01 surface=彼ら
   The (reading) is for the dictionary head; {surface} is how it appears in the sentence. */
function parseToken(tok){
  const m = tok.match(/^([^\(\[\{~]+)(?:\(([^\)]*)\))?(?:\[[0-9]+\])?(?:\{([^\}]*)\})?/);
  if(!m) return null;
  let reading = m[2] || "";
  if(reading.startsWith("#")) reading = "";          // JMdict ref, not a reading
  return { head: m[1], reading, surface: m[3] || "" };
}
function parseCorpus(file){
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  const out = [];
  for(let i=0;i<lines.length;i++){
    if(lines[i][0] !== "A") continue;
    const a = lines[i].slice(3);
    const tab = a.indexOf("\t");
    if(tab < 0) continue;
    const jp = a.slice(0, tab).trim();
    let en = a.slice(tab+1).trim();
    const hash = en.indexOf("#"); if(hash >= 0) en = en.slice(0, hash).trim();
    const bline = (lines[i+1] && lines[i+1][0] === "B") ? lines[i+1].slice(3).trim() : "";
    const tokens = bline.split(/\s+/).map(parseToken).filter(Boolean);
    out.push({ jp, en, tokens });
  }
  return out;
}

/* reconstruct a full-kana reading aligned to the Japanese sentence, or null */
function reconstructReading(jp, tokens){
  let pos = 0, out = "";
  for(const tk of tokens){
    const surface = tk.surface || tk.head;
    if(!surface) continue;
    const idx = jp.indexOf(surface, pos);
    if(idx < 0) return null;                 // cannot align token to sentence
    out += jp.slice(pos, idx);               // keep punctuation/gaps verbatim
    let rd;
    if(!hasKanji(surface)) rd = surface;     // already kana → use as-is
    else if(tk.reading && !tk.surface){       // dict-form kanji, reading known
      // compound-suffix risk: a kanji fused to katakana (e.g. ハンバーガー店=てん, not みせ)
      const before = jp[idx-1] || "", after = jp[idx+surface.length] || "";
      if(isKana(before) || isKana(after)) return null;
      rd = tk.reading;
    }
    else return null;                        // inflected kanji surface → unknown reading
    out += rd;
    pos = idx + surface.length;
  }
  out += jp.slice(pos);
  if(hasKanji(out)) return null;             // safety: any kanji left → not clean
  return out;
}

/* ---------- index sentences by dictionary head ---------- */
const corpus = parseCorpus(path.join(__dirname, "examples.utf"));
const byHead = new Map();
corpus.forEach((s, si) => {
  const seen = new Set();
  s.tokens.forEach(t => {
    if(seen.has(t.head)) return; seen.add(t.head);
    if(!byHead.has(t.head)) byHead.set(t.head, []);
    byHead.get(t.head).push(si);
  });
});

function n5Coverage(jp){
  const k = jp.match(/[\u4e00-\u9faf]/g) || [];
  if(!k.length) return 1;
  return k.filter(c => N5KANJI.has(c)).length / k.length;
}

/* pick the best sentence index for a vocab word, or null */
function pickFor(v){
  const keys = [];
  if(v.kanji && v.kanji !== "—" && v.kanji !== "-") keys.push(v.kanji);
  keys.push(v.kana);
  const cand = new Set();
  keys.forEach(k => (byHead.get(k) || []).forEach(si => cand.add(si)));
  if(!cand.size) return null;

  let best = null;
  for(const si of cand){
    const s = corpus[si];
    if(s.jp.length < 6 || s.jp.length > 38) continue;   // keep it N5-sized
    if(s.tokens.length > 16) continue;
    const reading = reconstructReading(s.jp, s.tokens);
    const cov = n5Coverage(s.jp);
    // score: clean reading (+big), higher N5 coverage, shorter sentence
    const score = (reading ? 1000 : 0) + cov * 100 - s.jp.length;
    if(!best || score > best.score) best = { si, reading, score };
  }
  if(!best) return null;
  return { jp: corpus[best.si].jp, r: best.reading || "", en: corpus[best.si].en };
}

/* ---------- build merged output ---------- */
const merged = Object.assign({}, EXISTING);
let added = 0, withReading = 0, noMatch = 0;
const examples = [];
VOCAB.forEach(v => {
  if(merged[v.kana]) return;                 // keep hand-crafted / already filled
  const pick = pickFor(v);
  if(!pick){ noMatch++; return; }
  merged[v.kana] = pick;
  added++; if(pick.r) withReading++;
  if(examples.length < 6) examples.push({ word:v.kanji||v.kana, ...pick });
});

/* ---------- emit data/sentences.js ---------- */
const keys = Object.keys(merged);
const body = keys.map(k => {
  const s = merged[k];
  const esc = x => String(x||"").replace(/\\/g,"\\\\").replace(/"/g,'\\"');
  return ` ${JSON.stringify(k)}:{jp:"${esc(s.jp)}", r:"${esc(s.r)}", en:"${esc(s.en)}"}`;
}).join(",\n");

const header =
`/* Example sentences, keyed by vocabulary kana. {jp, r:kana reading, en}
   Hand-crafted entries + ingested from the Tanaka Corpus (examples.utf),
   distributed under CC BY (same data as the Tatoeba Project).
   The reading line "r" is only filled when it could be reconstructed with
   full confidence; otherwise it is left empty rather than risk a wrong reading.
   Regenerate with: node build/ingest_sentences.js  */
`;
fs.writeFileSync(path.join(DATA, "sentences.js"),
  header + "const VOCAB_SENTENCES = {\n" + body + "\n};\n");

console.log(JSON.stringify({
  corpusSentences: corpus.length,
  vocabWords: VOCAB.length,
  existing: Object.keys(EXISTING).length,
  added,
  totalNow: keys.length,
  withReading,
  noMatch,
  coveragePct: Math.round(keys.length / VOCAB.length * 100),
  samples: examples
}, null, 2));

# JLPT N5 Study App — Build Task List

Goal: lift the single-HTML constraint by splitting data into external files served
locally (and later from a **private** GitHub Pages repo), then expand content
(sample sentences, grammar, reading) and add exam-aligned features.

Licensing decisions (personal, non-commercial use; private repo):
- Example sentences: **Tatoeba** (CC BY 2.0 FR) — attribution required
- Grammar explanations: **Tae Kim** (CC BY-NC-SA 3.0) reworded + **Wikibooks** (CC BY-SA) — attribution
- Listening: **embed existing YouTube videos** (no own audio content) — link out, no redistribution
- All sources credited in an in-app "Credits & licenses" note

Architecture decision:
- **Restructure, not full rewrite.** Keep the working quiz engine; lift all data into
  external `data/*.js` modules loaded via `<script src>` (works from `file://` AND Pages,
  no fetch/CORS issues). New features added as modules plugging into `allEntries(set)`.
- Rebuild individual screens from scratch only where that's genuinely simpler than adapting.

Legend: [ ] todo · [~] in progress · [x] done

---

## Phase 1 — Architecture (prerequisite, low risk)
- [x] 1.1 Extract embedded data from the app into `data/*.js` modules
      (kana, grammar, sentences, mnemonics, reading, vocabulary, kanji)
- [x] 1.2 Load data via `<script src>` (not fetch) so it works from `file://` AND Pages.
      Verified: 749 vocab, 113 kanji, 26 grammar, 186 sentences, 8 reading passages load.
- [x] 1.3 `index.html` is the working file (faithful refactor of `JLPTN5_quiz.html`;
      73/73 functions and all screens preserved). Original kept as backup.
- [x] 1.4 PWA added: `manifest.json` + `sw.js` (cache-first offline shell) + `icon.svg`
      + registration + apple-touch/theme-color meta.
- [x] 1.5 Local test server: `python3 -m http.server 8765` (run from project dir).
- [~] 1.6 Verify locally in a browser: all quizzes, bookmarks, progress, dark mode,
      install/offline. (Data + JS syntax + asset serving verified; needs your browser check.)
- [x] 1.7 "Credits & licenses" section added to Settings (Tatoeba / Tae Kim / Wikibooks / YouTube).

## Phase 2 — Content expansion
- [x] 2.1 Repeatable Tatoeba/Tanaka ingest: `build/ingest_sentences.js` parses the
      Tanaka Corpus (examples.utf, CC BY), matches sentences to N5 vocab, reconstructs
      the kana reading line only when fully confident (drops compound/inflection risk),
      and emits `data/sentences.js`. Idempotent (seeds from `build/sentences.original.js`).
- [x] 2.2 Sentence coverage raised 186 → 626 of 749 words (84%); 190 ingested with a
      verified kana reading. Hand-crafted entries kept authoritative. Audit: 0 kanji
      leaked into reading lines.
- [x] 2.3 Grammar expanded 26 → 86 N5 points in `data/grammar.js` (original
      fill-in-the-blank items; explanations in our own words per Tae Kim/Wikibooks
      attribution). Validated: 4 options each, valid answer index, no dup labels.
- [x] 2.4 Searchable sentence/word bank: free-text search across word, reading,
      meaning and sentence text, on top of the existing type chips + furigana/EN
      toggles. Live filtering with match count and empty state.
- [x] 2.5 Reading passages expanded 8 → 16 in `data/reading.js` (school, weekend
      plans, travel, email, illness, birthday, directions, seasons), each with
      furigana, glosses and 3 comprehension MCQ. Validated: 48 questions, no issues.
- [x] 2.6 Memory recall: compressed Leitner SRS (boxes 1–5 → 1/2/4/7/12 days),
      box moves once per day per item. "Due today" review card on home (interleaved
      across sets, leech-first). Leech surfacing ("Trouble words" card, ≥4 misses).

## Phase 3 — Exam-aligned features
- [x] 3.0 Timed mode: per-word countdown (10/15/20s, default 15), pauses on answer;
      timeout auto-reveals as a miss and re-queues. Layered on the practice loop.
- [x] 3.1 Listening section: curated directory by the four N5 sub-types (課題理解 /
      ポイント理解 / 発話表現 / 即時応答) + mock tests + channels, in `data/listening.js`.
      Cards open a YouTube search (always-valid, current results); model supports an
      optional pinned `yt` video id that plays inline via a youtube-nocookie embed.
      New Home "Listening" card + screen with type filter chips.
- [x] 3.7 Timed mock exam: 45 MCQ (20 vocab / 15 grammar / 10 reading) in real
      exam order, single countdown (~55s/q), no feedback until the end. Scores per
      section + an estimated /120 against the 38 pass line, with a clear note that
      Listening (60 pts) is separate. Per-question review; missed vocab/grammar feed
      the SRS/leech tracker. New Home "Mock exam" card + screens.
- [ ] 3.2 Orthography quiz (表記): hiragana → choose correct kanji
- [ ] 3.3 Contextual vocabulary quiz (文脈規定): fill sentence blank with right word
- [ ] 3.4 Paraphrase/synonym quiz (言い換え類義)
- [ ] 3.5 Sentence reordering (文の組み立て / ★ questions)
- [ ] 3.6 Information-retrieval reading (情報検索): flyers/timetables/notices
- [ ] 3.7 Full timed mock exam: 25/50/30 timing, 180-pt scoring, sectional pass marks,
      readiness indicator
- [ ] 3.8 Counters & numbers drill (dates, time, money, 〜枚/〜本/〜人 …)

## Phase 4 — Ship to GitHub Pages (user does manually)
- [ ] 4.1 Final local verification
- [ ] 4.2 Provide private-repo + Pages enablement steps (user executes)

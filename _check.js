const fs=require('fs'), vm=require('vm');
const h=fs.readFileSync(__dirname+'/JLPTN5_quiz.html','utf8');
const code=h.match(/<script id="logic">([\s\S]*?)<\/script>/)[1];
const store={};
function makeEl(){const b={classList:{add(){},remove(){},toggle(){},contains:()=>false},style:{},dataset:{},disabled:false,value:"",addEventListener(){},focus(){},setAttribute(){},getAttribute:()=>"",appendChild(){},remove(){},click(){},querySelector:()=>makeEl(),querySelectorAll:()=>[]};return new Proxy(b,{get:(t,p)=>p in t?t[p]:()=>{},set:()=>true});}
const sb={console,localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=String(v)},removeItem:k=>{delete store[k]}},
 document:{readyState:"complete",querySelector:()=>makeEl(),querySelectorAll:()=>[],getElementById:()=>makeEl(),createElement:()=>makeEl(),addEventListener(){},body:{classList:{add(){},remove(){},toggle(){},contains:()=>false},appendChild(){}}},
 window:{matchMedia:()=>({matches:false}),scrollTo(){}},setTimeout:()=>0,confirm:()=>true,Blob:function(){},URL:{createObjectURL:()=>"x",revokeObjectURL(){}},FileReader:function(){this.readAsText=()=>{}}};
sb.window.document=sb.document; vm.createContext(sb);
const t=`
var out=[];
out.push("total_sentences="+Object.keys(VOCAB_SENTENCES).length);
var verbs=VOCAB.filter(v=>v.type==='verb'), adjs=VOCAB.filter(v=>v.type==='adjective');
function cov(list){var u=[...new Set(list.map(v=>v.kana))]; var has=u.filter(k=>VOCAB_SENTENCES[k]); return has.length+"/"+u.length;}
out.push("verb_coverage="+cov(verbs));
out.push("adj_coverage="+cov(adjs));
var verbMiss=[...new Set(verbs.map(v=>v.kana))].filter(k=>!VOCAB_SENTENCES[k]);
out.push("verbs_without="+JSON.stringify(verbMiss));
var adjMiss=[...new Set(adjs.map(v=>v.kana))].filter(k=>!VOCAB_SENTENCES[k]);
out.push("adjs_without="+JSON.stringify(adjMiss));
var bad=Object.keys(VOCAB_SENTENCES).filter(k=>!VOCAB.some(v=>v.kana===k));
out.push("keys_not_in_vocab="+JSON.stringify(bad));
init();
out.push("INIT_OK");
out.join("\\n");`;
try{ const r=vm.runInContext(code+"\n"+t,sb,{filename:'l.js'}); fs.writeFileSync(__dirname+'/_out.txt', r+"\n=== OK ===\n"); }
catch(e){ fs.writeFileSync(__dirname+'/_out.txt', "ERR: "+(e.stack||e)+"\n"); }

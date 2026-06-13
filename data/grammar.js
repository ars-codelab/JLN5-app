/* Auto-extracted from JLPTN5_quiz.html. Edit freely — loaded as a
   classic <script>; top-level const becomes a shared global. */

/* Grammar: pre-written fill-in-the-blank MCQ. a = correct index */
const GRAMMAR = [
 {pat:"は (topic)", q:"わたし＿＿がくせいです。", o:["は","が","を","に"], a:0, e:"は marks the topic: \"As for me, (I) am a student.\""},
 {pat:"が (subject)", q:"だれ＿＿きましたか。", o:["は","が","を","で"], a:1, e:"が marks the subject with question words like だれ (who)."},
 {pat:"を (object)", q:"ごはん＿＿たべます。", o:["が","を","に","へ"], a:1, e:"を marks the direct object of a verb (eat rice)."},
 {pat:"に (time)", q:"７じ＿＿おきます。", o:["で","を","に","と"], a:2, e:"に marks a specific point in time (wake up at 7)."},
 {pat:"に (destination)", q:"がっこう＿＿いきます。", o:["を","に","が","も"], a:1, e:"に (or へ) marks the destination of movement."},
 {pat:"で (place of action)", q:"としょかん＿＿べんきょうします。", o:["に","で","を","へ"], a:1, e:"で marks where an action takes place (study at the library)."},
 {pat:"で (means)", q:"でんしゃ＿＿いきます。", o:["で","に","を","と"], a:0, e:"で marks the means/method (go by train)."},
 {pat:"へ (direction)", q:"にほん＿＿いきます。", o:["を","へ","が","の"], a:1, e:"へ marks direction of movement (toward Japan)."},
 {pat:"と (and / with)", q:"ともだち＿＿はなします。", o:["と","に","を","で"], a:0, e:"と means \"with\" a person (talk with a friend)."},
 {pat:"も (also)", q:"わたし＿＿がくせいです。", o:["は","も","を","が"], a:1, e:"も means \"also / too\" (I am a student too)."},
 {pat:"の (possessive)", q:"これはわたし＿＿ほんです。", o:["は","を","の","に"], a:2, e:"の links nouns to show possession (my book)."},
 {pat:"か (question)", q:"これはなんです＿＿。", o:["ね","よ","か","の"], a:2, e:"か at the end makes a question."},
 {pat:"から〜まで", q:"９じ＿＿５じまではたらきます。", o:["に","から","で","と"], a:1, e:"から = from, まで = to/until (work from 9 to 5)."},
 {pat:"です／ました", q:"きのうえいが＿＿みました。", o:["を","は","に","が"], a:0, e:"past action: を marks the object (watched a movie)."},
 {pat:"ない (negative)", q:"わたしはにくをたべ＿＿。", o:["ます","ません","ました","まして"], a:1, e:"ません is the polite negative (do not eat)."},
 {pat:"たい (want to)", q:"みず＿＿のみたいです。", o:["が","を","に","で"], a:0, e:"With 〜たい, the object often takes が (want to drink water)."},
 {pat:"ている (ongoing)", q:"いまほんをよん＿＿います。", o:["て","で","た","に"], a:1, e:"よむ → よんで; 〜ている = ongoing action (reading now)."},
 {pat:"あります (inanimate)", q:"つくえのうえにほんが＿＿。", o:["います","あります","です","します"], a:1, e:"あります is for inanimate things' existence."},
 {pat:"います (animate)", q:"きょうしつにせんせいが＿＿。", o:["あります","います","です","なります"], a:1, e:"います is for living things' existence."},
 {pat:"ください", q:"みずをください＿＿。", o:["ね","ます","—","です"], a:2, e:"〜をください = please give me ~ (already complete)."},
 {pat:"ましょう (let's)", q:"いっしょにいき＿＿。", o:["ません","ましょう","ました","たい"], a:1, e:"〜ましょう = let's do ~ (let's go together)."},
 {pat:"ね (agreement)", q:"いいてんきです＿＿。", o:["か","ね","を","の"], a:1, e:"ね seeks agreement (Nice weather, isn't it?)."},
 {pat:"よ (emphasis)", q:"あのみせはやすいです＿＿。", o:["よ","か","を","に"], a:0, e:"よ adds emphasis / new info for the listener."},
 {pat:"どの／どれ", q:"＿＿ほんがあなたのですか。", o:["どれ","どの","なに","だれ"], a:1, e:"どの comes before a noun (which book?); どれ stands alone."},
 {pat:"な-adjective + な", q:"きれい＿＿はなですね。", o:["の","な","と","で"], a:1, e:"な-adjectives take な before a noun (pretty flower)."},
 {pat:"counter (まい)", q:"きって３＿＿ください。", o:["こ","ほん","まい","さつ"], a:2, e:"まい counts thin flat objects like stamps."},

 /* ---- demonstratives & question words ---- */
 {pat:"これ／それ／あれ", q:"＿＿はわたしのかさです。", o:["これ","ここ","この","こちら"], a:0, e:"これ = this one (near the speaker), used on its own as a noun."},
 {pat:"この＋noun", q:"＿＿ほんはおもしろいです。", o:["これ","この","ここ","こう"], a:1, e:"この + noun = this ~ ; it must attach to a noun."},
 {pat:"ここ／そこ／あそこ", q:"ここ＿＿まってください。", o:["で","に","を","へ"], a:0, e:"で marks where an action happens (wait here)."},
 {pat:"だれ (who)", q:"あのひとは＿＿ですか。", o:["なに","だれ","どこ","いつ"], a:1, e:"だれ = who."},
 {pat:"なん (what)", q:"これは＿＿ですか。", o:["だれ","どこ","なん","いつ"], a:2, e:"なに／なん = what; なん is used before です."},
 {pat:"どこ (where)", q:"えきは＿＿ですか。", o:["だれ","どこ","いつ","なに"], a:1, e:"どこ = where."},
 {pat:"いつ (when)", q:"たんじょうびは＿＿ですか。", o:["どこ","だれ","いつ","なに"], a:2, e:"いつ = when."},
 {pat:"いくら (how much)", q:"このペンは＿＿ですか。", o:["いくつ","いくら","どこ","なに"], a:1, e:"いくら = how much (price)."},
 {pat:"どうして (why)", q:"＿＿こなかったんですか。", o:["どうして","どこ","どう","いつ"], a:0, e:"どうして = why."},
 {pat:"どう (how)", q:"にほんごのべんきょうは＿＿ですか。", o:["どう","どこ","だれ","なに"], a:0, e:"どう = how / how about."},

 /* ---- adjectives ---- */
 {pat:"い-adj negative", q:"このえいがはおもしろ＿＿です。", o:["くない","じゃない","ない","ではない"], a:0, e:"い-adjective negative: drop い, add くない (おもしろい→おもしろくない)."},
 {pat:"い-adj past", q:"きのうはさむ＿＿です。", o:["かった","くない","でした","だった"], a:0, e:"い-adjective past: drop い, add かった (さむい→さむかった)."},
 {pat:"い-adj past neg", q:"テストはむずかし＿＿です。", o:["くなかった","かった","くない","ません"], a:0, e:"い-adjective past negative: 〜くなかった."},
 {pat:"な-adj negative", q:"ここはしずか＿＿です。", o:["じゃない","くない","ない","かった"], a:0, e:"な-adjective negative: 〜じゃない／ではない."},
 {pat:"な-adj past", q:"むかしここはにぎやか＿＿。", o:["でした","かった","くだ","です"], a:0, e:"な-adjective past: 〜でした (にぎやかでした)."},
 {pat:"い-adj て-form", q:"このへやはひろ＿＿あかるいです。", o:["くて","で","と","て"], a:0, e:"い-adjective linking form: 〜くて (ひろい→ひろくて)."},
 {pat:"な-adj／noun で", q:"かれはしんせつ＿＿ハンサムです。", o:["で","くて","と","て"], a:0, e:"な-adjective / noun linking form: 〜で (and ...)."},

 /* ---- verb forms ---- */
 {pat:"ました (past)", q:"きのうえいがをみ＿＿。", o:["ます","ました","ません","ましょう"], a:1, e:"〜ました = polite past affirmative."},
 {pat:"ませんでした", q:"あさごはんをたべ＿＿。", o:["ません","ませんでした","ましたか","ましょう"], a:1, e:"〜ませんでした = polite past negative (did not ~)."},
 {pat:"てください", q:"ちょっとまって＿＿。", o:["ください","ましょう","です","ます"], a:0, e:"〜てください = please do ~."},
 {pat:"てもいいです", q:"ここでしゃしんをとっても＿＿です。", o:["いい","だめ","ない","ほしい"], a:0, e:"〜てもいいです = it's OK to ~ (permission)."},
 {pat:"てはいけません", q:"ここでたばこをすって＿＿。", o:["はいけません","もいいです","ください","ましょう"], a:0, e:"〜てはいけません = must not ~ (prohibition)."},
 {pat:"てから", q:"ごはんをたべて＿＿はをみがきます。", o:["から","まで","ので","のに"], a:0, e:"〜てから = after doing ~ , (then) ..."},
 {pat:"ないでください", q:"ここにはいら＿＿でください。", o:["ない","ません","なくて","ず"], a:0, e:"〜ないでください = please don't ~ (はいる→はいらない)."},
 {pat:"ことができる", q:"わたしはかんじをよむ＿＿ができます。", o:["こと","の","もの","ところ"], a:0, e:"〜ことができる = can do ~ (dict verb + ことができる)."},
 {pat:"の (nominalizer)", q:"えをかく＿＿がすきです。", o:["の","ため","まま","ほう"], a:0, e:"verb(dict) + の = turns the verb into a noun (drawing)."},

 /* ---- time & connectors ---- */
 {pat:"まえに (before)", q:"ねる＿＿はをみがきます。", o:["まえに","あとで","とき","ながら"], a:0, e:"〜まえに = before doing ~ (dict verb + まえに)."},
 {pat:"あとで (after)", q:"しごとの＿＿のみにいきます。", o:["まえに","あとで","ながら","とき"], a:1, e:"〜あとで = after ~ (noun + の + あとで)."},
 {pat:"とき (when)", q:"こどもの＿＿、よくあそびました。", o:["とき","まえ","あと","ごろ"], a:0, e:"〜とき = when ~ / at the time of ~."},
 {pat:"から (because)", q:"あついです＿＿、まどをあけます。", o:["から","まで","のに","でも"], a:0, e:"〜から = because (gives a reason)."},
 {pat:"が (but)", q:"たべたいです＿＿、おかねがありません。", o:["が","から","ので","と"], a:0, e:"〜が = but (contrast), joins two clauses."},
 {pat:"でも (however)", q:"つかれました。＿＿、べんきょうします。", o:["でも","だから","それで","そして"], a:0, e:"でも = but / however, at the start of a sentence."},
 {pat:"たり〜たり", q:"にちようびはほんをよん＿＿、テレビをみたりします。", o:["だり","たり","でも","ながら"], a:0, e:"〜たり〜たりする = do things like ~ and ~ (よむ→よんだり)."},
 {pat:"ながら (while)", q:"おんがくをきき＿＿べんきょうします。", o:["ながら","てから","まえに","あとで"], a:0, e:"〜ながら = while doing ~ (ます-stem + ながら)."},

 /* ---- desire, suggestion, invitation ---- */
 {pat:"がほしい", q:"あたらしいくるま＿＿ほしいです。", o:["が","を","に","で"], a:0, e:"〜がほしい = want (a thing); the thing takes が."},
 {pat:"ませんか", q:"いっしょにえいがをみ＿＿。", o:["ますか","ませんか","ました","たいです"], a:1, e:"〜ませんか = won't you ~? (polite invitation)."},
 {pat:"ましょうか", q:"おもいですね。もち＿＿。", o:["ましょうか","ませんか","ますか","たいか"], a:0, e:"〜ましょうか = shall I/we ~? (offer to help)."},

 /* ---- comparison ---- */
 {pat:"より (than)", q:"でんしゃはバス＿＿はやいです。", o:["より","ほど","から","まで"], a:0, e:"AはBより〜 = A is more ~ than B."},
 {pat:"のほうが", q:"バスよりでんしゃ＿＿はやいです。", o:["のほうが","より","ほど","だけ"], a:0, e:"〜のほうが = ~ is the more ... one."},
 {pat:"いちばん", q:"このなかでこれ＿＿いちばんいいです。", o:["が","を","に","は"], a:0, e:"〜のなかで〜がいちばん = the most ~ among (top item takes が)."},

 /* ---- counters ---- */
 {pat:"counter (つ)", q:"りんごを３＿＿ください。", o:["まい","つ","ほん","にん"], a:1, e:"〜つ = native counter for general objects (みっつ = 3)."},
 {pat:"counter (にん)", q:"がくせいが５＿＿います。", o:["つ","にん","ほん","だい"], a:1, e:"〜にん = counter for people (ごにん = 5 people)."},
 {pat:"counter (ほん)", q:"ビールを２＿＿のみました。", o:["ほん","まい","こ","にん"], a:0, e:"〜本(ほん) counts long thin things; 2 reads にほん."},
 {pat:"counter (さい)", q:"わたしは２０＿＿です。", o:["さい","にん","こ","ばん"], a:0, e:"〜さい = counter for age."},
 {pat:"counter (かい)", q:"ともだちに３＿＿あいました。", o:["かい","にん","まい","さつ"], a:0, e:"〜かい(回) = number of times."},

 /* ---- amount, limit, frequency ---- */
 {pat:"だけ (only)", q:"ひとつ＿＿ください。", o:["だけ","しか","でも","ずつ"], a:0, e:"〜だけ = only / just."},
 {pat:"しか〜ない", q:"１００えん＿＿ありません。", o:["しか","だけ","でも","まで"], a:0, e:"〜しか + negative = only / nothing but."},
 {pat:"ぐらい (about)", q:"１じかん＿＿まちました。", o:["ぐらい","ごろ","しか","だけ"], a:0, e:"〜ぐらい／くらい = about (approximate amount or duration)."},
 {pat:"ごろ (about time)", q:"７じ＿＿おきます。", o:["ごろ","ぐらい","まで","から"], a:0, e:"〜ごろ = about (a point in time)."},
 {pat:"に (frequency)", q:"１しゅうかん＿＿２かいうんどうします。", o:["に","で","を","と"], a:0, e:"period + に + count = frequency (twice a week)."},
 {pat:"で (total)", q:"ぜんぶ＿＿いくらですか。", o:["で","に","を","は"], a:0, e:"で can mark a total/scope (ぜんぶで = in total)."},
 {pat:"ずつ (each)", q:"ひとり２こ＿＿とってください。", o:["ずつ","だけ","しか","ごろ"], a:0, e:"〜ずつ = ~ each / ~ apiece."},

 /* ---- adverbs & sentence enders ---- */
 {pat:"もう (already)", q:"＿＿ひるごはんをたべました。", o:["もう","まだ","まで","また"], a:0, e:"もう = already (used with a past action)."},
 {pat:"まだ〜ていません", q:"しゅくだいは＿＿していません。", o:["もう","まだ","また","もっと"], a:1, e:"まだ〜ていません = have not ~ yet."},
 {pat:"あまり〜ない", q:"おさけは＿＿のみません。", o:["あまり","とても","もっと","よく"], a:0, e:"あまり + negative = not very / not much."},
 {pat:"とても (very)", q:"このケーキは＿＿おいしいです。", o:["とても","あまり","もう","まだ"], a:0, e:"とても = very (with an affirmative)."},
 {pat:"や (listing)", q:"つくえのうえにほん＿＿ノートがあります。", o:["や","と","も","に"], a:0, e:"〜や〜 = and (a partial list, often with など)."},
 {pat:"でしょう", q:"あしたはあめ＿＿。", o:["でしょう","でした","だった","ました"], a:0, e:"〜でしょう = probably / I think (conjecture)."},

 /* ---- become ---- */
 {pat:"になる (noun)", q:"らいねんだいがくせい＿＿なります。", o:["に","が","を","で"], a:0, e:"noun + になる = become ~."},
 {pat:"くなる (い-adj)", q:"さむ＿＿なりました。", o:["く","に","で","と"], a:0, e:"い-adjective + なる: drop い → く + なる (さむい→さむくなる)."}
];

/* Auto-extracted from JLPTN5_quiz.html. Edit freely — loaded as a
   classic <script>; top-level const becomes a shared global. */

/* Original N5 reading passages. sentences:{jp, r:kana, en}; q:{q,o,a,e} */
const READING = [
 { id:"r1", title:"じこしょうかい", titleEn:"Self-introduction", topic:"Daily life",
   sentences:[
    {jp:"はじめまして。リンと もうします。", r:"はじめまして。リンと もうします。", en:"Nice to meet you. My name is Lin."},
    {jp:"わたしは 中国人です。", r:"わたしは ちゅうごくじんです。", en:"I am Chinese."},
    {jp:"今、東京の 大学で 日本語を べんきょうして います。", r:"いま、とうきょうの だいがくで にほんごを べんきょうして います。", en:"Now I am studying Japanese at a university in Tokyo."},
    {jp:"しゅみは 本を 読むことです。", r:"しゅみは ほんを よむことです。", en:"My hobby is reading books."},
    {jp:"どうぞ よろしく おねがいします。", r:"どうぞ よろしく おねがいします。", en:"Pleased to meet you."}
   ],
   gloss:[{w:"中国人",r:"ちゅうごくじん",m:"Chinese person"},{w:"大学",r:"だいがく",m:"university"},
    {w:"しゅみ",r:"しゅみ",m:"hobby"},{w:"もうします",r:"もうします",m:"my name is (humble)"}],
   q:[{q:"リンさんは どこの 国の 人ですか。", o:["日本","中国","アメリカ","かんこく"], a:1, e:"It says わたしは中国人です — Lin is Chinese."},
      {q:"リンさんは 今 何を して いますか。", o:["はたらいて いる","日本語を べんきょうして いる","りょこうして いる","やすんで いる"], a:1, e:"She is studying Japanese at university."},
      {q:"リンさんの しゅみは 何ですか。", o:["本を 読むこと","えいがを 見ること","うたを うたうこと","りょうりを すること"], a:0, e:"しゅみは本を読むこと — reading books."}]
 },
 { id:"r2", title:"わたしの 一日", titleEn:"My day", topic:"Daily life",
   sentences:[
    {jp:"毎朝 六時に おきます。", r:"まいあさ ろくじに おきます。", en:"I wake up at six every morning."},
    {jp:"朝ごはんを 食べてから、学校へ 行きます。", r:"あさごはんを たべてから、がっこうへ いきます。", en:"After eating breakfast, I go to school."},
    {jp:"学校は 八時半に はじまります。", r:"がっこうは はちじはんに はじまります。", en:"School starts at half past eight."},
    {jp:"ひるごはんは ともだちと 食べます。", r:"ひるごはんは ともだちと たべます。", en:"I eat lunch with my friends."},
    {jp:"よる、すこし テレビを 見て、十一時に ねます。", r:"よる、すこし テレビを みて、じゅういちじに ねます。", en:"At night I watch a little TV and go to bed at eleven."}
   ],
   gloss:[{w:"毎朝",r:"まいあさ",m:"every morning"},{w:"はじまります",r:"はじまります",m:"starts (begins)"},
    {w:"〜てから",r:"てから",m:"after doing ~"},{w:"ねます",r:"ねます",m:"go to sleep"}],
   q:[{q:"この 人は 何時に おきますか。", o:["六時","八時半","十一時","七時"], a:0, e:"毎朝六時におきます — six o'clock."},
      {q:"学校は 何時に はじまりますか。", o:["六時","八時","八時半","九時"], a:2, e:"八時半 = half past eight."},
      {q:"ひるごはんは だれと 食べますか。", o:["かぞく","一人で","ともだち","先生"], a:2, e:"ともだちと食べます — with friends."}]
 },
 { id:"r3", title:"わたしの かぞく", titleEn:"My family", topic:"People",
   sentences:[
    {jp:"わたしの かぞくは 四人です。", r:"わたしの かぞくは よにんです。", en:"My family has four people."},
    {jp:"父と 母と 妹が います。", r:"ちちと ははと いもうとが います。", en:"I have a father, a mother, and a younger sister."},
    {jp:"父は 会社で はたらいて います。", r:"ちちは かいしゃで はたらいて います。", en:"My father works at a company."},
    {jp:"母は 料理が とても じょうずです。", r:"ははは りょうりが とても じょうずです。", en:"My mother is very good at cooking."},
    {jp:"妹は まだ 小学生です。", r:"いもうとは まだ しょうがくせいです。", en:"My younger sister is still an elementary school student."}
   ],
   gloss:[{w:"かぞく",r:"かぞく",m:"family"},{w:"妹",r:"いもうと",m:"younger sister"},
    {w:"じょうず",r:"じょうず",m:"good at, skillful"},{w:"小学生",r:"しょうがくせい",m:"elementary student"}],
   q:[{q:"かぞくは 何人ですか。", o:["三人","四人","五人","二人"], a:1, e:"四人です — four people."},
      {q:"お母さんは 何が じょうずですか。", o:["うた","りょうり","スポーツ","え"], a:1, e:"料理がじょうず — good at cooking."},
      {q:"妹は どんな 人ですか。", o:["大学生","会社員","小学生","先生"], a:2, e:"まだ小学生 — still an elementary student."}]
 },
 { id:"r4", title:"スーパーで かいもの", titleEn:"Shopping at the supermarket", topic:"Shopping",
   sentences:[
    {jp:"きのう、母と スーパーへ 行きました。", r:"きのう、ははと スーパーへ いきました。", en:"Yesterday I went to the supermarket with my mother."},
    {jp:"やさいと くだものを 買いました。", r:"やさいと くだものを かいました。", en:"We bought vegetables and fruit."},
    {jp:"りんごは 一つ 百円でした。", r:"りんごは ひとつ ひゃくえんでした。", en:"Apples were one hundred yen each."},
    {jp:"魚は すこし 高かったです。", r:"さかなは すこし たかかったです。", en:"The fish was a little expensive."},
    {jp:"ぜんぶで 二千円 はらいました。", r:"ぜんぶで にせんえん はらいました。", en:"In total we paid two thousand yen."}
   ],
   gloss:[{w:"やさい",r:"やさい",m:"vegetables"},{w:"くだもの",r:"くだもの",m:"fruit"},
    {w:"魚",r:"さかな",m:"fish"},{w:"はらいました",r:"はらいました",m:"paid"}],
   q:[{q:"いつ スーパーへ 行きましたか。", o:["きょう","きのう","あした","せんしゅう"], a:1, e:"きのう = yesterday."},
      {q:"りんごは 一つ いくらでしたか。", o:["百円","二百円","千円","二千円"], a:0, e:"一つ百円 — 100 yen each."},
      {q:"ぜんぶで いくら はらいましたか。", o:["百円","千円","二千円","五千円"], a:2, e:"ぜんぶで二千円 — 2000 yen total."}]
 },
 { id:"r5", title:"しゅうまつ", titleEn:"The weekend", topic:"Leisure",
   sentences:[
    {jp:"先週の 日曜日、こうえんへ 行きました。", r:"せんしゅうの にちようび、こうえんへ いきました。", en:"Last Sunday I went to the park."},
    {jp:"天気が とても よかったです。", r:"てんきが とても よかったです。", en:"The weather was very good."},
    {jp:"こうえんで しゃしんを たくさん とりました。", r:"こうえんで しゃしんを たくさん とりました。", en:"I took a lot of photos in the park."},
    {jp:"おひるは こうえんの 近くの みせで 食べました。", r:"おひるは こうえんの ちかくの みせで たべました。", en:"For lunch I ate at a shop near the park."},
    {jp:"とても たのしい 一日でした。", r:"とても たのしい いちにちでした。", en:"It was a very fun day."}
   ],
   gloss:[{w:"先週",r:"せんしゅう",m:"last week"},{w:"天気",r:"てんき",m:"weather"},
    {w:"しゃしん",r:"しゃしん",m:"photo"},{w:"とりました",r:"とりました",m:"took (a photo)"}],
   q:[{q:"いつ こうえんへ 行きましたか。", o:["土曜日","日曜日","月曜日","金曜日"], a:1, e:"日曜日 = Sunday."},
      {q:"天気は どうでしたか。", o:["あめでした","よかったです","さむかったです","わるかったです"], a:1, e:"天気がよかった — the weather was good."},
      {q:"こうえんで 何を しましたか。", o:["ねました","しゃしんを とりました","べんきょうしました","かいものしました"], a:1, e:"しゃしんをとりました — took photos."}]
 },
 { id:"r6", title:"きょうの 天気", titleEn:"Today's weather", topic:"Weather",
   sentences:[
    {jp:"今日は 朝から あめが ふって います。", r:"きょうは あさから あめが ふって います。", en:"It has been raining since this morning."},
    {jp:"とても さむいです。", r:"とても さむいです。", en:"It is very cold."},
    {jp:"だから、あつい コーヒーを 飲みました。", r:"だから、あつい コーヒーを のみました。", en:"So I drank hot coffee."},
    {jp:"あしたは はれるでしょう。", r:"あしたは はれるでしょう。", en:"Tomorrow it will probably be sunny."},
    {jp:"あしたは こうえんを さんぽしたいです。", r:"あしたは こうえんを さんぽしたいです。", en:"Tomorrow I want to take a walk in the park."}
   ],
   gloss:[{w:"あめ",r:"あめ",m:"rain"},{w:"ふって います",r:"ふって います",m:"is falling (raining)"},
    {w:"だから",r:"だから",m:"so, therefore"},{w:"はれる",r:"はれる",m:"to clear up (sunny)"}],
   q:[{q:"今日の 天気は どうですか。", o:["はれ","あめ","ゆき","くもり"], a:1, e:"あめがふっています — it is raining."},
      {q:"なぜ コーヒーを 飲みましたか。", o:["あついから","さむいから","ねむいから","おいしいから"], a:1, e:"It's very cold (さむい), so hot coffee."},
      {q:"あした 何を したいですか。", o:["かいもの","さんぽ","べんきょう","しごと"], a:1, e:"さんぽしたい — wants to take a walk."}]
 },
 { id:"r7", title:"レストランで", titleEn:"At the restaurant", topic:"Food",
   sentences:[
    {jp:"ともだちと レストランへ 行きました。", r:"ともだちと レストランへ いきました。", en:"I went to a restaurant with my friend."},
    {jp:"わたしは ラーメンを ちゅうもんしました。", r:"わたしは ラーメンを ちゅうもんしました。", en:"I ordered ramen."},
    {jp:"ともだちは カレーを 食べました。", r:"ともだちは カレーを たべました。", en:"My friend ate curry."},
    {jp:"りょうりは ぜんぶ おいしかったです。", r:"りょうりは ぜんぶ おいしかったです。", en:"All the food was delicious."},
    {jp:"また この みせに 来たいです。", r:"また この みせに きたいです。", en:"I want to come to this shop again."}
   ],
   gloss:[{w:"ちゅうもん",r:"ちゅうもん",m:"order (food)"},{w:"カレー",r:"カレー",m:"curry"},
    {w:"ぜんぶ",r:"ぜんぶ",m:"all, everything"},{w:"また",r:"また",m:"again"}],
   q:[{q:"この 人は 何を ちゅうもんしましたか。", o:["カレー","ラーメン","すし","ピザ"], a:1, e:"ラーメンをちゅうもんしました."},
      {q:"ともだちは 何を 食べましたか。", o:["ラーメン","カレー","パン","さかな"], a:1, e:"ともだちはカレーを食べました."},
      {q:"りょうりは どうでしたか。", o:["まずかった","おいしかった","たかかった","さむかった"], a:1, e:"ぜんぶおいしかった — all delicious."}]
 },
 { id:"r8", title:"わたしの まち", titleEn:"My town", topic:"Places",
   sentences:[
    {jp:"わたしの まちは 小さいですが、しずかです。", r:"わたしの まちは ちいさいですが、しずかです。", en:"My town is small, but it is quiet."},
    {jp:"駅の 前に 大きい こうえんが あります。", r:"えきの まえに おおきい こうえんが あります。", en:"There is a big park in front of the station."},
    {jp:"こうえんの となりに としょかんが あります。", r:"こうえんの となりに としょかんが あります。", en:"Next to the park there is a library."},
    {jp:"わたしは よく としょかんで 本を 読みます。", r:"わたしは よく としょかんで ほんを よみます。", en:"I often read books at the library."},
    {jp:"この まちが 大すきです。", r:"この まちが だいすきです。", en:"I love this town."}
   ],
   gloss:[{w:"まち",r:"まち",m:"town"},{w:"しずか",r:"しずか",m:"quiet"},
    {w:"となり",r:"となり",m:"next to"},{w:"としょかん",r:"としょかん",m:"library"}],
   q:[{q:"この まちは どんな まちですか。", o:["大きくて うるさい","小さくて しずか","大きくて しずか","小さくて うるさい"], a:1, e:"小さいですが、しずか — small but quiet."},
      {q:"としょかんは どこに ありますか。", o:["駅の 前","こうえんの となり","学校の 中","みせの 上"], a:1, e:"こうえんのとなり — next to the park."},
      {q:"この 人は としょかんで 何を しますか。", o:["ねます","本を 読みます","ごはんを 食べます","はたらきます"], a:1, e:"本を読みます — reads books."}]
 },
 { id:"r9", title:"学校で", titleEn:"At school", topic:"School",
   sentences:[
    {jp:"わたしの 学校は 駅から 近いです。", r:"わたしの がっこうは えきから ちかいです。", en:"My school is near the station."},
    {jp:"まいにち バスで 学校へ 行きます。", r:"まいにち バスで がっこうへ いきます。", en:"I go to school by bus every day."},
    {jp:"日本語の クラスは 九時に はじまります。", r:"にほんごの クラスは くじに はじまります。", en:"The Japanese class starts at nine."},
    {jp:"せんせいは とても しんせつです。", r:"せんせいは とても しんせつです。", en:"The teacher is very kind."},
    {jp:"ともだちと べんきょうするのは たのしいです。", r:"ともだちと べんきょうするのは たのしいです。", en:"Studying with friends is fun."}
   ],
   gloss:[{w:"近い",r:"ちかい",m:"near"},{w:"クラス",r:"クラス",m:"class"},
    {w:"はじまります",r:"はじまります",m:"begins"},{w:"しんせつ",r:"しんせつ",m:"kind"}],
   q:[{q:"学校へ 何で 行きますか。", o:["あるいて","バス","でんしゃ","じてんしゃ"], a:1, e:"バスで行きます — by bus."},
      {q:"クラスは 何時に はじまりますか。", o:["八時","九時","十時","七時"], a:1, e:"九時にはじまります — nine o'clock."},
      {q:"せんせいは どんな 人ですか。", o:["こわい","しんせつ","ひま","いそがしい"], a:1, e:"とてもしんせつです — very kind."}]
 },
 { id:"r10", title:"しゅうまつの よてい", titleEn:"Weekend plans", topic:"Plans",
   sentences:[
    {jp:"今週の 土曜日、ともだちと 海へ 行きます。", r:"こんしゅうの どようび、ともだちと うみへ いきます。", en:"This Saturday I'll go to the sea with a friend."},
    {jp:"電車で 二時間ぐらい かかります。", r:"でんしゃで にじかんぐらい かかります。", en:"It takes about two hours by train."},
    {jp:"海で およいだり、しゃしんを とったり したいです。", r:"うみで およいだり、しゃしんを とったり したいです。", en:"I want to swim and take photos at the sea."},
    {jp:"ひるごはんは レストランで 食べる つもりです。", r:"ひるごはんは レストランで たべる つもりです。", en:"I plan to eat lunch at a restaurant."},
    {jp:"はやく 土曜日に なって ほしいです。", r:"はやく どようびに なって ほしいです。", en:"I hope Saturday comes soon."}
   ],
   gloss:[{w:"海",r:"うみ",m:"sea"},{w:"かかります",r:"かかります",m:"takes (time)"},
    {w:"〜たり〜たり",r:"たり",m:"do things like ~"},{w:"つもり",r:"つもり",m:"intend to"}],
   q:[{q:"いつ 海へ 行きますか。", o:["金曜日","土曜日","日曜日","月曜日"], a:1, e:"今週の土曜日 — Saturday."},
      {q:"海まで どのくらい かかりますか。", o:["一時間","二時間","三時間","四時間"], a:1, e:"二時間ぐらい — about two hours."},
      {q:"ひるごはんは どこで 食べますか。", o:["海","いえ","レストラン","こうえん"], a:2, e:"レストランで食べるつもり."}]
 },
 { id:"r11", title:"りょこう", titleEn:"A trip", topic:"Travel",
   sentences:[
    {jp:"なつやすみに 京都へ りょこうに 行きました。", r:"なつやすみに きょうとへ りょこうに いきました。", en:"In the summer vacation I traveled to Kyoto."},
    {jp:"京都には ふるい おてらが たくさん あります。", r:"きょうとには ふるい おてらが たくさん あります。", en:"Kyoto has many old temples."},
    {jp:"三日間 ホテルに とまりました。", r:"みっかかん ホテルに とまりました。", en:"I stayed at a hotel for three days."},
    {jp:"おみやげに おかしを 買いました。", r:"おみやげに おかしを かいました。", en:"I bought sweets as a souvenir."},
    {jp:"また 京都へ 行きたいです。", r:"また きょうとへ いきたいです。", en:"I want to go to Kyoto again."}
   ],
   gloss:[{w:"りょこう",r:"りょこう",m:"trip, travel"},{w:"おてら",r:"おてら",m:"temple"},
    {w:"とまりました",r:"とまりました",m:"stayed (overnight)"},{w:"おみやげ",r:"おみやげ",m:"souvenir"}],
   q:[{q:"どこへ りょこうに 行きましたか。", o:["東京","京都","大阪","ほっかいどう"], a:1, e:"京都へ行きました."},
      {q:"何日間 とまりましたか。", o:["一日","二日","三日","四日"], a:2, e:"三日間とまりました — three days."},
      {q:"おみやげに 何を 買いましたか。", o:["本","おかし","ふく","さかな"], a:1, e:"おかしを買いました — sweets."}]
 },
 { id:"r12", title:"ともだちへの メール", titleEn:"Email to a friend", topic:"Communication",
   sentences:[
    {jp:"たなかさん、おげんきですか。", r:"たなかさん、おげんきですか。", en:"Tanaka, how are you?"},
    {jp:"らいしゅうの 金曜日、いっしょに えいがを 見ませんか。", r:"らいしゅうの きんようび、いっしょに えいがを みませんか。", en:"Won't you watch a movie with me next Friday?"},
    {jp:"えきの 前で 六時に あいましょう。", r:"えきの まえで ろくじに あいましょう。", en:"Let's meet in front of the station at six."},
    {jp:"その あとで ばんごはんを 食べましょう。", r:"その あとで ばんごはんを たべましょう。", en:"After that, let's eat dinner."},
    {jp:"へんじを まって います。", r:"へんじを まって います。", en:"I'm waiting for your reply."}
   ],
   gloss:[{w:"おげんきですか",r:"おげんきですか",m:"how are you?"},{w:"〜ませんか",r:"ませんか",m:"won't you ~?"},
    {w:"あいましょう",r:"あいましょう",m:"let's meet"},{w:"へんじ",r:"へんじ",m:"reply"}],
   q:[{q:"いつ えいがを 見ますか。", o:["木曜日","金曜日","土曜日","日曜日"], a:1, e:"らいしゅうの金曜日 — Friday."},
      {q:"どこで あいますか。", o:["えきの 前","えいがかん","レストラン","こうえん"], a:0, e:"えきの前であいましょう."},
      {q:"この メールは 何を さそって いますか。", o:["いっしょに 出かける こと","おかねを かす こと","しゅくだい","りょこう"], a:0, e:"It invites them out to a movie and dinner."}]
 },
 { id:"r13", title:"びょうき", titleEn:"Feeling sick", topic:"Health",
   sentences:[
    {jp:"きのうから あたまが いたいです。", r:"きのうから あたまが いたいです。", en:"My head has hurt since yesterday."},
    {jp:"ねつも 少し あります。", r:"ねつも すこし あります。", en:"I also have a slight fever."},
    {jp:"けさ びょういんへ 行きました。", r:"けさ びょういんへ いきました。", en:"This morning I went to the hospital."},
    {jp:"おいしゃさんは 「ゆっくり やすんで ください」と 言いました。", r:"おいしゃさんは 「ゆっくり やすんで ください」と いいました。", en:"The doctor said, \"Please rest well.\""},
    {jp:"きょうは 一日 いえで ねます。", r:"きょうは いちにち いえで ねます。", en:"Today I'll sleep at home all day."}
   ],
   gloss:[{w:"あたま",r:"あたま",m:"head"},{w:"いたい",r:"いたい",m:"painful"},
    {w:"ねつ",r:"ねつ",m:"fever"},{w:"びょういん",r:"びょういん",m:"hospital"}],
   q:[{q:"どこが いたいですか。", o:["あし","おなか","あたま","は"], a:2, e:"あたまがいたい — head hurts."},
      {q:"けさ どこへ 行きましたか。", o:["学校","びょういん","かいしゃ","スーパー"], a:1, e:"びょういんへ行きました."},
      {q:"おいしゃさんは 何と 言いましたか。", o:["はたらいて ください","やすんで ください","べんきょうして ください","あるいて ください"], a:1, e:"ゆっくりやすんでください — please rest."}]
 },
 { id:"r14", title:"たんじょうび", titleEn:"My birthday", topic:"Events",
   sentences:[
    {jp:"きのうは わたしの たんじょうびでした。", r:"きのうは わたしの たんじょうびでした。", en:"Yesterday was my birthday."},
    {jp:"ともだちが いえに 来ました。", r:"ともだちが いえに きました。", en:"My friends came to my house."},
    {jp:"みんなで ケーキを 食べました。", r:"みんなで ケーキを たべました。", en:"We all ate cake together."},
    {jp:"ともだちから きれいな はなを もらいました。", r:"ともだちから きれいな はなを もらいました。", en:"I received pretty flowers from my friends."},
    {jp:"とても うれしかったです。", r:"とても うれしかったです。", en:"I was very happy."}
   ],
   gloss:[{w:"たんじょうび",r:"たんじょうび",m:"birthday"},{w:"みんなで",r:"みんなで",m:"all together"},
    {w:"もらいました",r:"もらいました",m:"received"},{w:"うれしい",r:"うれしい",m:"happy, glad"}],
   q:[{q:"きのうは 何の 日でしたか。", o:["たんじょうび","やすみ","しけん","しごと"], a:0, e:"わたしのたんじょうびでした."},
      {q:"みんなで 何を 食べましたか。", o:["ケーキ","すし","ラーメン","カレー"], a:0, e:"ケーキを食べました."},
      {q:"ともだちから 何を もらいましたか。", o:["本","はな","おかし","ふく"], a:1, e:"きれいなはなをもらいました — flowers."}]
 },
 { id:"r15", title:"みちあんない", titleEn:"Asking directions", topic:"Places",
   sentences:[
    {jp:"すみません、ゆうびんきょくは どこですか。", r:"すみません、ゆうびんきょくは どこですか。", en:"Excuse me, where is the post office?"},
    {jp:"この みちを まっすぐ 行って ください。", r:"この みちを まっすぐ いって ください。", en:"Please go straight along this road."},
    {jp:"つぎの かどを 右に まがって ください。", r:"つぎの かどを みぎに まがって ください。", en:"Please turn right at the next corner."},
    {jp:"ゆうびんきょくは ぎんこうの となりに あります。", r:"ゆうびんきょくは ぎんこうの となりに あります。", en:"The post office is next to the bank."},
    {jp:"ここから 五分ぐらいです。", r:"ここから ごふんぐらいです。", en:"It's about five minutes from here."}
   ],
   gloss:[{w:"ゆうびんきょく",r:"ゆうびんきょく",m:"post office"},{w:"まっすぐ",r:"まっすぐ",m:"straight"},
    {w:"かど",r:"かど",m:"corner"},{w:"まがって",r:"まがって",m:"turn"}],
   q:[{q:"何を さがして いますか。", o:["ぎんこう","ゆうびんきょく","えき","学校"], a:1, e:"ゆうびんきょくはどこですか — looking for the post office."},
      {q:"つぎの かどを どちらに まがりますか。", o:["左","右","まっすぐ","うしろ"], a:1, e:"右にまがってください — turn right."},
      {q:"ゆうびんきょくは 何の となりに ありますか。", o:["ぎんこう","スーパー","こうえん","えき"], a:0, e:"ぎんこうのとなり — next to the bank."}]
 },
 { id:"r16", title:"すきな きせつ", titleEn:"My favorite season", topic:"Nature",
   sentences:[
    {jp:"わたしの すきな きせつは はるです。", r:"わたしの すきな きせつは はるです。", en:"My favorite season is spring."},
    {jp:"はるは あたたかくて、はなが きれいです。", r:"はるは あたたかくて、はなが きれいです。", en:"Spring is warm and the flowers are pretty."},
    {jp:"なつは あついですが、海で およげます。", r:"なつは あついですが、うみで およげます。", en:"Summer is hot, but you can swim in the sea."},
    {jp:"あきは すずしくて、たべものが おいしいです。", r:"あきは すずしくて、たべものが おいしいです。", en:"Autumn is cool and the food is delicious."},
    {jp:"ふゆは さむいので、あまり すきじゃ ありません。", r:"ふゆは さむいので、あまり すきじゃ ありません。", en:"Winter is cold, so I don't like it much."}
   ],
   gloss:[{w:"きせつ",r:"きせつ",m:"season"},{w:"あたたかい",r:"あたたかい",m:"warm"},
    {w:"すずしい",r:"すずしい",m:"cool"},{w:"およげます",r:"およげます",m:"can swim"}],
   q:[{q:"この 人の すきな きせつは いつですか。", o:["はる","なつ","あき","ふゆ"], a:0, e:"すきなきせつははる — spring."},
      {q:"なつは どんな きせつですか。", o:["さむい","すずしい","あつい","つめたい"], a:2, e:"なつはあつい — summer is hot."},
      {q:"なぜ ふゆが すきじゃ ありませんか。", o:["あついから","さむいから","あめだから","いそがしいから"], a:1, e:"ふゆはさむいので — because winter is cold."}]
 }
];

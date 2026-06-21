/* N5 Counter Data — from textbook 助数詞 tables.
   Each counter has: suffix, en (what it counts), items[]{n, reading}.
   n = number (1–10, "?" for なん〜). reading = the full counter reading. */
const COUNTERS = [
 {suffix:"〜はい", en:"cups / glasses (drinks)", items:[
   {n:1,reading:"いっぱい"},{n:2,reading:"にはい"},{n:3,reading:"さんばい"},
   {n:4,reading:"よんはい"},{n:5,reading:"ごはい"},{n:6,reading:"ろっぱい"},
   {n:7,reading:"ななはい"},{n:8,reading:"はっぱい"},{n:9,reading:"きゅうはい"},
   {n:10,reading:"じゅっぱい"},{n:"?",reading:"なんばい"}]},
 {suffix:"〜ひき", en:"animals (small)", items:[
   {n:1,reading:"いっぴき"},{n:2,reading:"にひき"},{n:3,reading:"さんびき"},
   {n:4,reading:"よんひき"},{n:5,reading:"ごひき"},{n:6,reading:"ろっぴき"},
   {n:7,reading:"ななひき"},{n:8,reading:"はっぴき"},{n:9,reading:"きゅうひき"},
   {n:10,reading:"じゅっぴき"},{n:"?",reading:"なんびき"}]},
 {suffix:"〜本", en:"long thin objects (pens, bottles, trees)", items:[
   {n:1,reading:"いっぽん"},{n:2,reading:"にほん"},{n:3,reading:"さんぼん"},
   {n:4,reading:"よんほん"},{n:5,reading:"ごほん"},{n:6,reading:"ろっぽん"},
   {n:7,reading:"ななほん"},{n:8,reading:"はっぽん"},{n:9,reading:"きゅうほん"},
   {n:10,reading:"じゅっぽん"},{n:"?",reading:"なんぼん"}]},
 {suffix:"〜ページ", en:"pages", items:[
   {n:1,reading:"いちページ"},{n:2,reading:"にページ"},{n:3,reading:"さんページ"},
   {n:4,reading:"よんページ"},{n:5,reading:"ごページ"},{n:6,reading:"ろくページ"},
   {n:7,reading:"ななページ"},{n:8,reading:"はちページ"},{n:9,reading:"きゅうページ"},
   {n:10,reading:"じゅうページ"},{n:"?",reading:"なんページ"}]},
 {suffix:"〜回", en:"number of times", items:[
   {n:1,reading:"いっかい"},{n:2,reading:"にかい"},{n:3,reading:"さんかい"},
   {n:4,reading:"よんかい"},{n:5,reading:"ごかい"},{n:6,reading:"ろっかい"},
   {n:7,reading:"ななかい"},{n:8,reading:"はっかい"},{n:9,reading:"きゅうかい"},
   {n:10,reading:"じゅっかい"},{n:"?",reading:"なんかい"}]},
 {suffix:"〜かい(階)", en:"floors / stories", items:[
   {n:1,reading:"いっかい"},{n:2,reading:"にかい"},{n:3,reading:"さんがい"},
   {n:4,reading:"よんかい"},{n:5,reading:"ごかい"},{n:6,reading:"ろっかい"},
   {n:7,reading:"ななかい"},{n:8,reading:"はっかい"},{n:9,reading:"きゅうかい"},
   {n:10,reading:"じゅっかい"},{n:"?",reading:"なんがい"}]},
 {suffix:"〜つ", en:"general objects (small)", items:[
   {n:1,reading:"ひとつ"},{n:2,reading:"ふたつ"},{n:3,reading:"みっつ"},
   {n:4,reading:"よっつ"},{n:5,reading:"いつつ"},{n:6,reading:"むっつ"},
   {n:7,reading:"ななつ"},{n:8,reading:"やっつ"},{n:9,reading:"ここのつ"},
   {n:10,reading:"とお"},{n:"?",reading:"いくつ"}]},
 {suffix:"〜さい", en:"age (years old)", items:[
   {n:1,reading:"いっさい"},{n:2,reading:"にさい"},{n:3,reading:"さんさい"},
   {n:4,reading:"よんさい"},{n:5,reading:"ごさい"},{n:6,reading:"ろくさい"},
   {n:7,reading:"ななさい"},{n:8,reading:"はっさい"},{n:9,reading:"きゅうさい"},
   {n:10,reading:"じゅっさい"},{n:"?",reading:"なんさい"}]},
 {suffix:"〜さつ", en:"books / bound volumes", items:[
   {n:1,reading:"いっさつ"},{n:2,reading:"にさつ"},{n:3,reading:"さんさつ"},
   {n:4,reading:"よんさつ"},{n:5,reading:"ごさつ"},{n:6,reading:"ろくさつ"},
   {n:7,reading:"ななさつ"},{n:8,reading:"はっさつ"},{n:9,reading:"きゅうさつ"},
   {n:10,reading:"じゅっさつ"},{n:"?",reading:"なんさつ"}]},
 {suffix:"〜だい", en:"vehicles & machines", items:[
   {n:1,reading:"いちだい"},{n:2,reading:"にだい"},{n:3,reading:"さんだい"},
   {n:4,reading:"よんだい"},{n:5,reading:"ごだい"},{n:6,reading:"ろくだい"},
   {n:7,reading:"ななだい"},{n:8,reading:"はちだい"},{n:9,reading:"きゅうだい"},
   {n:10,reading:"じゅうだい"},{n:"?",reading:"なんだい"}]},
 {suffix:"〜ばん", en:"ranking / number", items:[
   {n:1,reading:"いちばん"},{n:2,reading:"にばん"},{n:3,reading:"さんばん"},
   {n:4,reading:"よんばん"},{n:5,reading:"ごばん"},{n:6,reading:"ろくばん"},
   {n:7,reading:"ななばん"},{n:8,reading:"はちばん"},{n:9,reading:"きゅうばん"},
   {n:10,reading:"じゅうばん"},{n:"?",reading:"なんばん"}]},
 {suffix:"〜まい", en:"flat thin objects (paper, stamps, shirts)", items:[
   {n:1,reading:"いちまい"},{n:2,reading:"にまい"},{n:3,reading:"さんまい"},
   {n:4,reading:"よんまい"},{n:5,reading:"ごまい"},{n:6,reading:"ろくまい"},
   {n:7,reading:"ななまい"},{n:8,reading:"はちまい"},{n:9,reading:"きゅうまい"},
   {n:10,reading:"じゅうまい"},{n:"?",reading:"なんまい"}]},
 {suffix:"〜メートル", en:"meters (length)", items:[
   {n:1,reading:"いちメートル"},{n:2,reading:"にメートル"},{n:3,reading:"さんメートル"},
   {n:4,reading:"よんメートル"},{n:5,reading:"ごメートル"},{n:6,reading:"ろくメートル"},
   {n:7,reading:"ななメートル"},{n:8,reading:"はちメートル"},{n:9,reading:"きゅうメートル"},
   {n:10,reading:"じゅうメートル"},{n:"?",reading:"なんメートル"}]},
 {suffix:"〜分", en:"minutes", items:[
   {n:1,reading:"いっぷん"},{n:2,reading:"にふん"},{n:3,reading:"さんぷん"},
   {n:4,reading:"よんぷん"},{n:5,reading:"ごふん"},{n:6,reading:"ろっぷん"},
   {n:7,reading:"ななふん"},{n:8,reading:"はっぷん"},{n:9,reading:"きゅうふん"},
   {n:10,reading:"じゅっぷん"},{n:"?",reading:"なんぷん"}]},
 {suffix:"〜日", en:"day of the month / days", items:[
   {n:1,reading:"ついたち"},{n:2,reading:"ふつか"},{n:3,reading:"みっか"},
   {n:4,reading:"よっか"},{n:5,reading:"いつか"},{n:6,reading:"むいか"},
   {n:7,reading:"なのか"},{n:8,reading:"ようか"},{n:9,reading:"ここのか"},
   {n:10,reading:"とおか"},{n:"?",reading:"なんにち"}]},
 {suffix:"〜週間", en:"weeks", items:[
   {n:1,reading:"いっしゅうかん"},{n:2,reading:"にしゅうかん"},{n:3,reading:"さんしゅうかん"},
   {n:4,reading:"よんしゅうかん"},{n:5,reading:"ごしゅうかん"},{n:6,reading:"ろくしゅうかん"},
   {n:7,reading:"ななしゅうかん"},{n:8,reading:"はっしゅうかん"},{n:9,reading:"きゅうしゅうかん"},
   {n:10,reading:"じゅっしゅうかん"},{n:"?",reading:"なんしゅうかん"}]},
 {suffix:"〜か月", en:"months (duration)", items:[
   {n:1,reading:"いっかげつ"},{n:2,reading:"にかげつ"},{n:3,reading:"さんかげつ"},
   {n:4,reading:"よんかげつ"},{n:5,reading:"ごかげつ"},{n:6,reading:"ろっかげつ"},
   {n:7,reading:"ななかげつ"},{n:8,reading:"はっかげつ"},{n:9,reading:"きゅうかげつ"},
   {n:10,reading:"じゅっかげつ"},{n:"?",reading:"なんかげつ"}]},
 {suffix:"〜年", en:"years", items:[
   {n:1,reading:"いちねん"},{n:2,reading:"にねん"},{n:3,reading:"さんねん"},
   {n:4,reading:"よねん"},{n:5,reading:"ごねん"},{n:6,reading:"ろくねん"},
   {n:7,reading:"ななねん"},{n:8,reading:"はちねん"},{n:9,reading:"きゅうねん"},
   {n:10,reading:"じゅうねん"},{n:"?",reading:"なんねん"}]}
];

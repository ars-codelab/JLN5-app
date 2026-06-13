/* Listening practice — curated links to EXISTING YouTube content (no own audio),
   organized by the four JLPT N5 聴解 question sub-types plus mock tests & channels.

   Why searches, not pinned video IDs:
   Specific video IDs go private/removed over time and break embeds. A YouTube
   search link is always valid and surfaces current practice videos. To pin a
   particular video as an IN-APP embedded player, add  yt:"VIDEO_ID"  to an item
   (the ID from a youtube.com/watch?v=VIDEO_ID URL); the card will then play inline.

   Item fields: { type, title, titleEn, desc, q (search query) , yt? (optional video id) } */
const LISTENING = [
 { type:"課題理解", title:"課題理解の練習", titleEn:"Task-based comprehension",
   desc:"Listen to a conversation and choose what the person should do next.",
   q:"JLPT N5 聴解 課題理解 練習" },
 { type:"ポイント理解", title:"ポイント理解の練習", titleEn:"Point comprehension",
   desc:"Listen for the one key detail that answers the question.",
   q:"JLPT N5 聴解 ポイント理解 練習" },
 { type:"発話表現", title:"発話表現の練習", titleEn:"Verbal expression",
   desc:"See a situation, choose the right thing to say.",
   q:"JLPT N5 聴解 発話表現 練習" },
 { type:"即時応答", title:"即時応答の練習", titleEn:"Quick response",
   desc:"Hear a short line and pick the natural reply.",
   q:"JLPT N5 聴解 即時応答 練習" },

 { type:"模試", title:"N5 聴解 フルテスト", titleEn:"Full mock listening test",
   desc:"Sit a complete N5 listening section start to finish.",
   q:"JLPT N5 listening full practice test 聴解 模試" },
 { type:"模試", title:"公式サンプル問題", titleEn:"Official-style sample questions",
   desc:"Sample N5 listening questions in the real exam format.",
   q:"JLPT N5 listening sample questions 聴解 サンプル" },

 { type:"チャンネル", title:"日本語の森", titleEn:"Nihongo no Mori",
   desc:"Popular JLPT prep channel with N5 listening content.",
   q:"日本語の森 JLPT N5 聴解" },
 { type:"チャンネル", title:"Japanese Ammo with Misa", titleEn:"Beginner-friendly lessons",
   desc:"Clear, slow Japanese and listening for beginners.",
   q:"Japanese Ammo with Misa JLPT N5 listening" },
 { type:"チャンネル", title:"Comprehensible Japanese", titleEn:"All-Japanese immersion",
   desc:"Easy, all-Japanese input to train your ear.",
   q:"Comprehensible Japanese beginner" },
 { type:"チャンネル", title:"JapanesePod101", titleEn:"Listening & vocabulary",
   desc:"Beginner listening practice and daily lessons.",
   q:"JapanesePod101 JLPT N5 listening" }
];

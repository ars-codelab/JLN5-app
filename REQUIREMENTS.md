# JLPT N5 Study App — Requirements

## Overview
A mobile-optimised, offline-first web app (HTML + vanilla JS) for JLPT N5 exam preparation. No backend, no LLM. All state persisted in `localStorage`.

---

## Tech Stack
- HTML5 + CSS3 (mobile-first, responsive)
- Vanilla JavaScript (ES6+)
- `localStorage` for all user progress, bookmarks, scores
- Data files: `kanji.json`, `vocabulary.csv` (loaded at runtime)
- Hiragana / Katakana data: hardcoded in JS

---

## Screens

1. **Home** — quiz selection menu, daily streak indicator
2. **Quiz Screen** — shared layout for all 4 quiz types
3. **Results Screen** — shown when user ends or completes a quiz
4. **Bookmarks Screen** — review bookmarked items per quiz type
5. **Settings** — quiz preferences (MCQ vs typed, answer language)

---

## Quiz Types

### 1. Hiragana Quiz
- Source: all 46 base hiragana characters (+ dakuten variants optionally)
- Question modes:
  - Show hiragana → user provides romaji/pronunciation
  - Show romaji → user identifies hiragana
- Answer modes: typed or MCQ (4 options)

### 2. Katakana Quiz
- Source: all 46 base katakana characters (+ dakuten variants optionally)
- Same question/answer modes as Hiragana Quiz

### 3. Vocabulary Quiz
- Source: `vocabulary.csv`
- Filter options: by `type` (noun, verb, adjective, etc.) and/or `subcategory`
- Question modes:
  - Show kana → user provides English meaning
  - Show English → user provides kana/reading
  - Show kanji → user provides kana or English
- Answer modes: typed or MCQ (4 options)

### 4. Kanji Quiz
- Source: `kanji.json`
- Filter options: by `category` and/or `subcategory`
- Question modes:
  - Show kanji → user provides English meaning
  - Show kanji → user provides onyomi or kunyomi
  - Show English meaning → user identifies kanji (MCQ only)
- Answer modes: typed or MCQ (4 options)

---

## Universal Quiz Behaviour

### Session Flow
1. User selects quiz type, filter (optional), answer mode, and question mode
2. Quiz loads a shuffled queue of items from the selected set
3. Each item is presented one at a time
4. **Missed items are re-added to the end of the queue** — user must answer correctly before the item is retired
5. Session ends when:
   - All items answered correctly at least once, OR
   - User taps **End Quiz** at any time
6. Results screen is shown on exit

### Answer Validation (Typed Mode)
- Case-insensitive
- Strip leading/trailing whitespace
- For kana answers: accept romaji equivalent (e.g. "tsu" = "つ")
- Partial credit not given — must be exact (after normalisation)
- Show correct answer immediately after a wrong attempt

### MCQ Mode
- 4 options displayed as buttons
- Wrong answers sourced from the same quiz type (same category where possible)
- Options shuffled randomly each time
- Correct option highlighted green on selection; wrong option highlighted red with correct shown

### Bookmark Feature
- Every quiz item has a bookmark toggle (star icon)
- Bookmarks stored per quiz type in `localStorage`
- Bookmarks screen shows all saved items grouped by quiz type
- User can start a quiz using only their bookmarks as the source
- Bookmark can be removed from bookmark screen or during quiz

### Progress Tracking (localStorage)
- Per item: times seen, times correct, times incorrect, last seen date, is bookmarked
- Per quiz type: total sessions, best streak, total correct/incorrect
- No account or sync — all local only

---

## Results Screen
Shown after every session (whether ended early or completed):

- Total questions attempted
- Correct on first try vs needed repeats
- Items that were missed most (highlight for bookmarking)
- Option to: restart same session, go back to menu, bookmark all missed

---

## Grammar Section (No LLM approach)

### Concept
Grammar points are taught through **static pattern cards + fill-in-the-blank MCQ**, not free-form generation.

### Data Structure
Each grammar point has:
- Pattern (e.g. `～は～です`)
- English rule explanation (1–2 sentences)
- 3–5 example sentences with furigana + English translation
- A set of pre-written MCQ questions (4 options each)

### Grammar Quiz Modes

#### 1. Pattern Recognition (MCQ)
- Show a sentence with one word/particle blanked out
- User picks the correct word/particle from 4 options
- Example: `わたし___がくせいです。` → options: は / が / を / で

#### 2. Sentence Matching
- Show an English sentence → user picks the correct Japanese translation from 4 options

#### 3. Error Spotting
- Show a slightly incorrect sentence → user identifies which part is wrong (MCQ)

### Grammar Content
N5 grammar points to cover (~30 total), including:
`は`, `が`, `を`, `に`, `で`, `へ`, `と`, `も`, `の`, `か` (particles),
`です/ます` forms, `ない` negation, `て-form`, `たい` (want to),
`ている` (ongoing), `〜から/〜まで`, `〜ね/〜よ`, counting expressions,
`どんな/どの/どれ`, `あります/います`, `〜ください`, `〜ましょう`

Grammar point data will be stored as a static `grammar.js` file (hardcoded).

---

## Data Flow Summary

```
kanji.json          → Kanji Quiz
vocabulary.csv      → Vocabulary Quiz
hiragana.js (static) → Hiragana Quiz
katakana.js (static) → Katakana Quiz
grammar.js  (static) → Grammar Section

localStorage        ← all bookmarks, progress, session history
```

---

## Mobile UX Guidelines
- Minimum tap target: 44×44px
- Font size for kanji/kana: minimum 32px in quiz cards
- Single-column layout, max-width 480px centred on larger screens
- Bottom navigation bar for main sections
- Swipe gesture: swipe left = skip / next (with confirmation if unanswered)
- No horizontal scrolling
- Dark mode support via CSS media query

---

## Out of Scope (v1)
- Audio / pronunciation playback
- Stroke order diagrams
- Spaced repetition algorithm (SRS) — simple repeat-until-correct only
- Cloud sync
- Any LLM or AI features

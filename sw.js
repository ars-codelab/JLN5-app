/* JLPT N5 study app — service worker.
   Cache-first app shell so the app installs and runs fully offline.
   Bump CACHE when any shell/data file changes to refresh clients. */
const CACHE = "jlptn5-v8";

/* Relative URLs so it works both at a domain root and under a /repo/ subpath. */
const SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./data/kana.js",
  "./data/grammar.js",
  "./data/sentences.js",
  "./data/mnemonics.js",
  "./data/reading.js",
  "./data/listening.js",
  "./data/verbs.js",
  "./data/counters.js",
  "./data/vocabulary.js",
  "./data/kanji.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Navigations: serve cached index.html when offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Everything else: cache-first, then network (and cache the result).
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
    })
  );
});

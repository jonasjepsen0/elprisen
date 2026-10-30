const CACHE = "static-v1";

const FILES = [
  "./",
  "./index.html",
  "./fallback.html",
  "./manifest.json",
  "./icons/192.png",
  "./icons/512.png",
];


self.addEventListener("install", (event) => {

  console.log("Service worker: install");

  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
});


self.addEventListener("activate", () => {

  console.log("Service worker: activate");
});

self.addEventListener("fetch", (event) => {

  event.respondWith(fetch(event.request).then((networkResponse) => {

      const copy = networkResponse.clone();

      caches.open(CACHE).then((cache) => cache.put(event.request, copy));

      return networkResponse;

    }).catch(() => caches.match(event.request).then((cacheResponse) => {

      if (cacheResponse) {
        return cacheResponse;
      }

      if (event.request.mode === "navigate") {
        return caches.match("./fallback.html");
      }
    }))
  );
});
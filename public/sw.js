const CACHE = "static-v1";

const FILES = [
  "./",
  "./index.html",
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

  if (event.request.url.startsWith(self.location.origin)) {

    event.respondWith(
      caches.match(event.request).then((response) => {

        if (response) {

          return response;
        } 
        
        else {
          return fetch(event.request).then((networkResponse) => {

            const copy = networkResponse.clone();

            caches.open(CACHE).then((cache) => cache.put(event.request, copy));

            return networkResponse;
          });
        }
      })
    );

  } else {

    event.respondWith(fetch(event.request).then((networkResponse) => {

        const copy = networkResponse.clone();

        caches.open(CACHE).then((cache) => cache.put(event.request, copy));

        return networkResponse;

      }).catch(() => caches.match(event.request))
    );

  }
});
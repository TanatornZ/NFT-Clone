self.addEventListener("install", async (event) => {
  // const cache = await caches.open("pwa-assets");
  // // it stores all resources on first SW install
  // console.log("pass");
  // return cache.add("offline.html");
  event.waitUntil(
    caches.open('pwa').then((cache) => {
      console.log("Opened cache");

      return cache.add("offline.html");
    })
  );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

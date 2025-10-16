self.addEventListener('install', event => {
  self.skipWaiting(); // ✅ يجبر التحديث
  event.waitUntil(
    caches.open('v2').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});
  
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });


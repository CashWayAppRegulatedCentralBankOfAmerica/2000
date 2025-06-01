const CACHE_NAME = 'gobank-cache-v1';

const urlsToCache = [
  'index.html',
  'dashboard.html',
  'deposit.html',
  'depositsuccessful.html',
  'flight.html',
  'otp.html',
  'pin.html',
  'register.html',
  'sendmoney.html',
  'service-worker.js',
  'success.html',
  'withdraw.html',
  'withdrawalsuccessful.html',
  'withdrawown.html',
  'withdrawsuccess.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'WhatsApp_Image_2024-09-11_at_19.18.59-removebg.png'
];

// Install Event: Cache all necessary files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    }).then(() => {
      self.skipWaiting(); // Activate worker immediately
    })
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Fetch Event: Serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      // Optional: fallback offline page/image can be returned here
    })
  );
});

const CACHE_NAME = 'exam-cache-v1';
const urlsToCache = [
'WhatsApp_Image_2024-09-11_at_19.18.59-removebg.png',
'dashboard.html',
'deposit.html',
'depositsuccessful.html',
'flight.html',
'index.html',
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
  'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
})

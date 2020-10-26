const VERSION = 0;
const CACHE_NAMES = [`assets=${VERSION}`, `dynamic=${VERSION}`];
const [STATIC_CACHE, DYNAMIC_CACHE] = CACHE_NAMES;

// What we want to cache immediately, and what we never want to cache.
const STATIC_ASSETS = ['/', '/style.css?v=3.0.0', '/app.js?v=3.0.0'];
const IGNORED_URLS = ['/browser-sync/'];

// On install, open or create a static cache and add anything defined in the above array.
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      cache.addAll(STATIC_ASSETS);
    })
  );
});

// Once activated, check for old caches and delete them.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => !CACHE_NAMES.includes(key)).map(key => caches.delete(key))
      );
    })
  );
});

// On fetch, serve from cache if possible and cache anything else.
self.addEventListener('fetch', e => {
  // Prevent attempted caching of anything not over http (browser extensions, etc).
  if (!(e.request.url.indexOf('http') === 0)) return;

  if (IGNORED_URLS.some(page => e.request.url.indexOf(page) > -1)) return;

  e.respondWith(
    caches.match(e.request).then(cacheResponse => {
      if (cacheResponse) {
        return cacheResponse;
      }

      return caches.open(DYNAMIC_CACHE).then(cache => {
        return fetch(e.request).then(response => {
          return cache.put(e.request, response.clone()).then(() => response);
        });
      });
    })
  );
});

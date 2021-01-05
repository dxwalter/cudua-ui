
    // self.addEventListener('fetch', function(event) {})

    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

    const CACHE = "cudua-pwa-page";
    const QUEUE_NAME = "bgSyncQueue";

    const HTML_CACHE = "html";
    const JS_CACHE = "javascript";
    const STYLE_CACHE = "stylesheets";
    const IMAGE_CACHE = "images";
    const FONT_CACHE = "fonts";

    // TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
    const offlineFallbackPage = "offline.html";

    self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "SKIP_WAITING") {
            self.skipWaiting();
        }
    });
    
    self.addEventListener('install', async (event) => {
        event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.add(offlineFallbackPage))
        );
    });
    
    if (workbox.navigationPreload.isSupported()) {
        workbox.navigationPreload.enable();
    }  

    workbox.routing.registerRoute(
        new RegExp('/*'),
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: CACHE
        })
    );

    self.addEventListener('fetch', (event) => {
        if (event.request.mode === 'navigate') {
            event.respondWith((async () => {
                try {
                    const preloadResp = await event.preloadResponse;
            
                    if (preloadResp) {
                        return preloadResp;
                    }
            
                    const networkResp = await fetch(event.request);
                    return networkResp;
                    } catch (error) {
            
                    const cache = await caches.open(CACHE);
                    const cachedResp = await cache.match(offlineFallbackPage);
                    return cachedResp;
                }
            })());
        }
      });
      

      workbox.routing.registerRoute(
        ({event}) => event.request.destination === 'document',
        new workbox.strategies.NetworkFirst({
          cacheName: HTML_CACHE,
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxEntries: 10,
            }),
          ],
        })
      );
      
      workbox.routing.registerRoute(
        ({event}) => event.request.destination === 'script',
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: JS_CACHE,
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxEntries: 15,
            }),
          ],
        })
      );
      
      workbox.routing.registerRoute(
        ({event}) => event.request.destination === 'style',
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: STYLE_CACHE,
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxEntries: 15,
            }),
          ],
        })
      );
      
      workbox.routing.registerRoute(
        ({event}) => event.request.destination === 'image',
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: IMAGE_CACHE,
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxEntries: 100,
            }),
          ],
        })
      );
      
      workbox.routing.registerRoute(
        ({event}) => event.request.destination === 'font',
        new workbox.strategies.StaleWhileRevalidate({
          cacheName: FONT_CACHE,
          plugins: [
            new workbox.expiration.ExpirationPlugin({
              maxEntries: 15,
            }),
          ],
        })
      );
      
      
      
    workbox.loadModule('workbox-cacheable-response');
    workbox.loadModule('workbox-range-requests');

    workbox.routing.registerRoute(
    /.*\.mp4/,
    new workbox.strategies.CacheFirst({
        cacheName: CACHE,
        plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({statuses: [200]}),
        new workbox.rangeRequests.RangeRequestsPlugin(),
        ],
    }),
    );
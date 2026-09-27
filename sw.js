// GetSponzo: service worker mínimo (permite instalar la app). No guarda nada sin conexión.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});

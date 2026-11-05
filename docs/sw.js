/* ==========================================================================
   SERVICE WORKER — GÉNIES EN HERBE PWA (HORS-LIGNE & MISES À JOUR)
   ========================================================================== */

const CACHE_VERSION = "geh-pwa-v2.3.1";
const RUNTIME_CACHE = "geh-runtime-v2.3.1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./genies-en-herbe-vocal.html",
  "./questions.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(APP_SHELL);
    }).then(() => {
      // Sur une toute première installation, activer tout de suite
      if (!self.registration.active) {
        return self.skipWaiting();
      }
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((k) => k !== CACHE_VERSION && k !== RUNTIME_CACHE)
          .map((k) => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (!event.data) return;

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data.type === "GET_VERSION") {
    event.ports[0]?.postMessage({ version: CACHE_VERSION });
  }

  if (event.data.type === "REFRESH_CACHE") {
    event.waitUntil(
      caches.open(CACHE_VERSION).then(async (cache) => {
        try {
          await Promise.all(
            APP_SHELL.map(async (url) => {
              const res = await fetch(url, { cache: "no-store" });
              if (res && res.ok) {
                await cache.put(url, res);
              }
            })
          );
          event.ports[0]?.postMessage({ ok: true, version: CACHE_VERSION });
        } catch (err) {
          event.ports[0]?.postMessage({ ok: false, error: String(err) });
        }
      })
    );
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Police d'écriture Google Fonts : Cache-First avec mise en cache dynamique pour le hors-ligne
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        try {
          const net = await fetch(req);
          if (net && (net.ok || net.type === "opaque")) {
            cache.put(req, net.clone());
          }
          return net;
        } catch (e) {
          return new Response("", { status: 408 });
        }
      })
    );
    return;
  }

  // Ressources de l'application : Stale-While-Revalidate (ultra rapide hors-ligne + mis à jour en tâche de fond)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then((cached) => {
        const fetchPromise = fetch(req)
          .then((netRes) => {
            if (netRes && netRes.ok) {
              caches.open(CACHE_VERSION).then((cache) => {
                cache.put(req, netRes.clone());
              });
            }
            return netRes;
          })
          .catch(() => null);

        return cached || fetchPromise.then((res) => res || caches.match("./index.html"));
      })
    );
  }
});


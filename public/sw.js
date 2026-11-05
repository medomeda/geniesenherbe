/* ==========================================================================
   SERVICE WORKER — GÉNIES EN HERBE NEXT.JS PWA (HORS-LIGNE & MISES À JOUR)
   ========================================================================== */

const CACHE_VERSION = "geh-nextjs-pwa-v2.5.0";
const RUNTIME_CACHE = "geh-nextjs-runtime-v2.5.0";

const APP_SHELL = [
  "/",
  "/manifest.webmanifest",
  "/icons/icon.svg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => {
        // Ne s'active automatiquement que lors de la toute première installation (pas de SW actif préalable).
        // En cas de mise à jour, reste en attente ("waiting") afin de permettre à l'application
        // d'avertir l'utilisateur via une notification avant d'installer la nouvelle version !
        if (!self.registration.active) {
          return self.skipWaiting();
        }
      })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE_VERSION && k !== RUNTIME_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
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

  // Ignorer le HMR de développement Next.js
  if (url.pathname.startsWith("/_next/webpack-hmr")) return;

  // Polices Google Fonts : Cache-First
  if (
    url.hostname.includes("fonts.googleapis.com") ||
    url.hostname.includes("fonts.gstatic.com")
  ) {
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

  // Ressources de l'application & bundles Next.js : Network-First avec sauvegarde automatique pour le hors-ligne
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((net) => {
          if (net && net.status === 200) {
            const clone = net.clone();
            const targetCache = url.pathname.startsWith("/_next/")
              ? RUNTIME_CACHE
              : CACHE_VERSION;
            caches.open(targetCache).then((cache) => cache.put(req, clone));
          }
          return net;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          if (req.mode === "navigate") {
            return caches.match("/");
          }
          return new Response("", { status: 408 });
        })
    );
  }
});

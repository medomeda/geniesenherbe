const isExport = process.env.OUTPUT_MODE === "export";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 'export' pour générer le dossier statique out/, 'standalone' pour conteneur Docker Node.js
  output: isExport ? "export" : "standalone",
  ...(isExport
    ? {}
    : {
        headers: async () => [
          {
            source: "/sw.js",
            headers: [
              {
                key: "Cache-Control",
                value: "no-cache, no-store, must-revalidate"
              },
              {
                key: "Service-Worker-Allowed",
                value: "/"
              }
            ]
          },
          {
            source: "/manifest.webmanifest",
            headers: [
              {
                key: "Content-Type",
                value: "application/manifest+json"
              }
            ]
          },
          {
            source: "/(.*)",
            headers: [
              {
                key: "Permissions-Policy",
                value: "microphone=(self)"
              }
            ]
          }
        ]
      })
};

export default nextConfig;

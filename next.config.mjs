/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build autonome (.next/standalone) pour une image Docker légère
  output: "standalone",
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
};

export default nextConfig;


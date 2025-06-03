/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended to keep this enabled
};

import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // ← This is key
  register: true,
  skipWaiting: true,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  // disable: process.env.NODE_ENV === 'development', // Uncomment to disable PWA in development
  // runtimeCaching: [], // You can add runtime caching strategies here if needed
});

export default pwaConfig(nextConfig);

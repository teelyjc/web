/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    BACKEND_URL: "http://localhost:4000",
    WS_URL: "ws://localhost:4000/ws"
  }
};

export default nextConfig;

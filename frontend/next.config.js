/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  reactStrictMode: false,
  webpack: (config) => {
     config.resolve.fallback = { fs: false, net: false, tls: false };
     config.externals.push("pino-pretty", "lokijs", "encoding");
     return config;
  },
};

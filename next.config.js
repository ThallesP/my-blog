/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "lastfm.freetls.fastly.net"],
  },
};

module.exports = nextConfig;

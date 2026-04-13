/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.ibb.co", // ✅ ImgBB images domain
    ],
  },
};

module.exports = nextConfig;
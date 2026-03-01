/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",   // Cloudinary images
      "skytextiles.in",      // your domain
      "www.skytextiles.in",
      "localhost",
    ],
  },
};

export default nextConfig;
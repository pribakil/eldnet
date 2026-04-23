/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enabling static export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

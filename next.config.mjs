/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enabling static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

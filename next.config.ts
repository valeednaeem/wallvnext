import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      'deifkwefumgah.cloudfront.net',
      'via.placeholder.com',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com'
    ],
  }
};

export default nextConfig;

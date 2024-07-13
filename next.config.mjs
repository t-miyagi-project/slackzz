/** @type {import('next').NextConfig} */
const nextConfig = {
  //TODO 画像表示でエラーが出る場合。
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./.next", // Changes the build output directory to `./dist/`.
  async redirects() {
    return [
      {
        source: "/:path((?!event/id).)*",
        destination: "/event/id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

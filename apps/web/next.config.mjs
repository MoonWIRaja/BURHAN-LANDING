/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["investdex.fra1.cdn.digitaloceanspaces.com"],
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

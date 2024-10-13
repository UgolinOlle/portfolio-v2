import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  experimental: {
    esmExternals: true,
  },

  // -- Images --
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
      },
      {
        hostname: 'localhost',
        protocol: 'http',
      },
      {
        hostname: 'github.com',
        protocol: 'https',
      },
    ],
  },

  // -- Webpack config --
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        dns: false,
        tls: false,
        fs: false,
        request: false,
      };
    }
    return config;
  },
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['zwtxebgyiknysfmpeejy.supabase.co'],
  },
  experimental: {
    serverActions: {
      enabled: true
    }
  },
  pageExtensions: ['tsx', 'ts'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          ...(Array.isArray(config.watchOptions?.ignored) 
            ? config.watchOptions.ignored 
            : []),
          '**/supabase/functions/**'
        ]
      };
    }
    return config;
  }
}

module.exports = nextConfig;

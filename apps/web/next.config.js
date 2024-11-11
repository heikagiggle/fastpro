//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/** @type Array<import("next/dist/shared/lib/image-config").RemotePattern> */
const imagePatterns = [{ protocol: 'https', hostname: 'files.skillpaddy.com' }];

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.BASE_URL
          ? `${process.env.BASE_URL}/api/:path*`
          : 'http://127.0.0.1:4002/api/:path*',
      },
    ];
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    remotePatterns: imagePatterns,
    minimumCacheTTL: 31536000,
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**@swc/core**', '**@esbuild/**', '**@img/**'],
    },
    serverActions: {
      allowedOrigins: [],
    },
  },
  output: 'standalone',
  trailingSlash: true,
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

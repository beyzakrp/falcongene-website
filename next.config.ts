import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Experimental features for better compatibility
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3001'],
    }
  },

  // Webpack configuration for TLS/SSL compatibility with PaynKolay
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Configure Node.js TLS settings for PaynKolay compatibility
      const tls = require('tls');
      const https = require('https');
      
      // Set minimum TLS version to 1.2 (PaynKolay requirement)
      tls.DEFAULT_MIN_VERSION = 'TLSv1.2';
      
      // Configure HTTPS agent with PaynKolay compatible settings
      const agent = new https.Agent({
        secureProtocol: 'TLSv1_2_method',
        ciphers: [
          'ECDHE-RSA-AES128-GCM-SHA256',
          'ECDHE-RSA-AES256-GCM-SHA384',
          'ECDHE-RSA-AES128-SHA256',
          'ECDHE-RSA-AES256-SHA384',
          'ECDHE-RSA-AES128-SHA',
          'ECDHE-RSA-AES256-SHA',
          'AES128-GCM-SHA256',
          'AES256-GCM-SHA384',
          'AES128-SHA256',
          'AES256-SHA256',
          'AES128-SHA',
          'AES256-SHA'
        ].join(':'),
        rejectUnauthorized: true,
        keepAlive: true,
        keepAliveMsecs: 30000
      });

      // Set as global agent
      https.globalAgent = agent;
    }

    return config;
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

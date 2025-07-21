import { hostname } from "os"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"example.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  transpilePackages: ['framer-motion'],
  // If you're using ES modules, you might also need this
  modularizeImports: {
    'framer-motion': {
      transform: 'framer-motion/{{member}}',
    },
  },
}

module.exports = nextConfig
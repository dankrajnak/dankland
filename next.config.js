// next.config.js
// const withOffline = require("next-offline");

/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    BUGSNAG_API_KEY: process.env.BUGSNAG_SERVER_API_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    COMMIT_SHA: process.env.VERCEL_GITHUB_COMMIT_SHA,
    BUGSNAG_API_KEY: process.env.BUGSNAG_BROWSER_API_KEY, // Pass through env variables
    FAUNA_DB: process.env.FAUNA_DB,
  },
  experimental: {
    scrollRestoration: true,
  },

  webpack: (config) => ({
    ...config,
    experiments: {
      ...config.experiments,
      syncWebAssembly: true,
      // asyncWebAssembly: true,
    },
  }),
};

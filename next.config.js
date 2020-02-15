// next.config.js
const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");

const nextConfig = {};

module.exports = withOffline(withSass(nextConfig));

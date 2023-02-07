/** @type {import('next').NextConfig} */

// const withLess = require('@zeit/next-less');
// const withCss = require('@zeit/next-css');
// const nextConfig = {
//   // cssModules: true,
//   reactStrictMode: true,
// }

// module.exports = nextConfig;

const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
      }
    }
  }
});

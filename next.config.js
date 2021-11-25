const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
};

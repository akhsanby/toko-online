const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com", "fakestoreapi.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
};

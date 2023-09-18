const { environment } = require("@rails/webpacker");

environment.config.merge({
  entry: {
    application: ["application.js"],
  },
});

module.exports = environment;

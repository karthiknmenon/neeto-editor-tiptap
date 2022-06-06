module.exports = api => {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: ["@babel/plugin-proposal-class-properties", "ramda"],
    env: {
      production: {
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-transform-runtime",
        ],
      },
    },
  };
};

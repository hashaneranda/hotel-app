const singleSpaDefaults = require("webpack-config-single-spa-react");
const { mergeWithRules } = require("webpack-merge");

const mergeRulesWithMatchingTest = mergeWithRules({
  module: {
    rules: {
      test: "match",
      use: {
        loader: "match",
        options: "replace",
      },
    },
  },
});

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hotel",
    projectName: "auth",
    webpackConfigEnv,
  });

  const config = mergeRulesWithMatchingTest(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: require.resolve("style-loader"),
              options: {
                modules: {
                  namedExport: false,
                },
              },
            },
            {
              loader: require.resolve("css-loader"),
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
  });

  return config;
};

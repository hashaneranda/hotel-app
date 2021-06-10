const { mergeWithCustomize, unique } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const merge = mergeWithCustomize({
  customizeArray: unique(
    "plugins",
    ["HtmlWebpackPlugin"],
    (plugin) => plugin.constructor && plugin.constructor.name
  ),
});

module.exports = (webpackConfigEnv) => {
  const orgName = "hotel";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};

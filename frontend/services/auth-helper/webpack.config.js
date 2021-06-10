const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hotel",
    projectName: "auth-helper",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["rxjs"],
  });
};

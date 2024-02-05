const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "shell",

  filename: "remoteEntry.js",

  remotes: {
    moduloCadastro: "moduloCadastro@http://localhost:3001/remoteEntry.js"
  },

  exposes: {},

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

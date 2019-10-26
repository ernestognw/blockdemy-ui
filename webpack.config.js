const path = require("path");

module.exports = {
  entry: {
    index: "./src/index",
    alert: "./src/alert",
    avatar: "./src/avatar",
    box: "./src/box",
    button: "./src/button",
    card: "./src/card",
    input: "./src/input",
    list: "./src/list",
    loader: "./src/loader",
    modal: "./src/modal",
    navbar: "./src/navbar",
    pill: "./src/pill",
    "side-modal": "./src/side-modal",
    tabs: "./src/tabs",
    textarea: "./src/textarea",
    toast: "./src/toast",
    tooltip: "./src/tooltip",
    typography: "./src/typography"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|lib)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    "styled-components": "styled-components"
  }
};

const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
        app: "./index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      },
      plugins: [
        new WebpackPwaManifest({
          name: "Budget Tracker",
          short_name: "Budget",
          description: "An application that allows you to keep track of your money.",
          background_color: "#01579b",
          theme_color: "#ffffff",
          "theme-color": "#ffffff",
          start_url: "/",
          icons: [{
            src: path.resolve("assets/images/icons/icon-192x192.png"),
            sizes: [72, 96, 128, 144, 192, 256, 384, 512],
            destination: path.join("assets", "icons")
          }]
        })
      ]    
};

module.exports = config;
var path = require("path");
var webpack = require("webpack");
var entryConfig = require("./entry.conf.js");
var entry = entryConfig({
  dirPath: path.resolve(process.cwd(), "./src"),
  pages: null
});
var px2rem = {
  loader: "px2rem-loader",
  // options here
  options: {
    remUni: 75
  }
};
//entry.unshift("babel-polyfill");
module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].build.js"
  },
  devServer: {
    historyApiFallback: false,
    hot: true,
    compress: true
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  /*   vue: {
    loaders: {
      postcss: [require("postcss-px2rem")({ remUnit: 75 })]
    }
  }, */
  module: {
    rules: [{
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", px2rem]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader", px2rem]
      },
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader?indentedSyntax",
          px2rem
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: ["vue-style-loader", "css-loader", "sass-loader", px2rem],
            sass: [
              "vue-style-loader",
              "css-loader",
              "sass-loader?indentedSyntax",
              px2rem
            ],
            css: ["vue-style-loader", "css-loader", px2rem]
          }
        }
      }
    ]
  }
};
module.exports.devtool = "#source-map";
if (process.env.NODE_ENV === "production") {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]);
}
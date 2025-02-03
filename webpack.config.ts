import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
  port: 9000,
  open: true,
};

const config: Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(aff|dic)$/,
        use: "raw-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "swc-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
    fallback: {
      fs: false,
      ["node:fs"]: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  devServer,
  devtool: "eval",
  experiments: {
    topLevelAwait: true,
  },
};

export default config;

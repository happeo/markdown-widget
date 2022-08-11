const path = require("path");
const webpack = require("webpack");
const slugs = {
  prod: "markdown-widget-psmb9nr3yickdvbiohf2-ac",
  preprod: "pre-prod-slug",
  stage: "markdown-widget-rptpuefxh6gg188andbw-ac",
  development: "markdownpage-ivl0pnlu4mhpjlcydic",
};

const ourDirs = {
  preprod: "./dist/preprod",
  prod: "./dist/prod",
  stage: "./dist/stage",
  development: "./dist",
};

const getBuildType = (env) => {
  if (env.production) return "production";
  if (env.preprod) return "preprod";
  if (env.development) return "development";
  if (env.stage) return "stage";
};

module.exports = (env) => {
  const buildType = getBuildType(env);
  const isProd = buildType === "production";

  return {
    entry: path.join(__dirname, "src", "index.js"),
    mode: isProd ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        },
      ],
    },
    devServer: {
      contentBase: "./dist",
      hot: false,
      inline: false,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    externals: [
      (_context, request, callback) => {
        if (/^@happeouikit/.test(request)) {
          // Resolve @happeoukit as externals in window
          return callback(null, [
            "Happeouikit",
            request.replace("@happeouikit/", ""),
          ]);
        }
        callback();
      },
      {
        react: "React",
        "react-dom": "ReactDOM",
        "styled-components": "styled",
        jQuery: "jQuery",
      },
    ],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, ourDirs[buildType]),
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.slug": JSON.stringify(slugs[buildType]),
      }),
    ],
  };
};

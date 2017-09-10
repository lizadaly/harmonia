var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

var PROD = (process.env.NODE_ENV === 'production')

var prodPlugin = PROD ? new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true
    },
    comments: false
    }) : new webpack.DefinePlugin({
     "process.env": {
         NODE_ENV: JSON.stringify("production")
        }
    })

var config = require("./story.json");
const path = require('path')

module.exports = [{
  context: __dirname,
  entry: {
    starter: getEntrySources([
      './index.js'
    ]),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "story.js"
  },
  module: {
    loaders: [{ test: /.js/,
                exclude: /node_modules\/underscore/,
                loader: 'babel-loader?cacheDirectory'
              },
              { test: /\.json$/, loader: 'json-loader' },
              { test: /\.html$/, loader: 'html-loader'},
              { test: /\.hbs/, loader: 'handlebars-loader'},
              { test: /\.scss/, use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
              })
              },
              { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
              { test: /\.(png|jpg|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ]
  },
  plugins: [
    // Build our dist/index.html by reading from the config file and passing
    // those through to a template, written in Handlebars
    new HtmlWebpackPlugin({
      title: config.title,
      description: config.description,
      author: config.author,
      license: config.license,
      keywords: config.keywords,
      pagination: config.pagination,
      template: 'template.hbs'
    }),
    prodPlugin,
    // Copy all static assets during a built to the dist/ directory.
    // If you add other directory names, they'll go in here.
    new CopyWebpackPlugin([
      { from: 'css', to: 'css' },
      { from: 'images', to: 'images' },
      { from: 'story.json'}
    ]),
    extractSass


  ]
}];

function getEntrySources(sources) {
    if (PROD) {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}

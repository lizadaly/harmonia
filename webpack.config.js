var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = require("./story.json");

module.exports = [{
  context: __dirname,
  entry: {
    starter: getEntrySources([
      './index.js'
    ]),
  },
  output: {
    path: 'dist',
    filename: "story.js"
  },
  module: {
    loaders: [{ test: /.js/, loaders: ['babel?cacheDirectory']},
              { test: /\.json$/, loader: 'json' },
              { test: /\.html$/, loader: 'html-loader'},
              { test: /\.hbs/, loader: 'handlebars-loader'}
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
    // Copy all static assets during a built to the dist/ directory.
    // If you add other directory names, they'll go in here.
    new CopyWebpackPlugin([
      { from: 'css', to: 'css' },
      { from: 'images', to: 'images' },
      { from: 'story.json'}
    ])
  ]
}];

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}

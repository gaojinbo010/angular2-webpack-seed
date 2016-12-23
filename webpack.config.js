var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var DashboardPlugin = require('webpack-dashboard/plugin');
// const autoprefixer = require('autoprefixer');


var webpackConfig = {
  entry: {
    'main': './src/main.browser.ts',
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)src(\\|\/)linker/, path.resolve(__dirname, './src'), { /* ... */ }),
    new DashboardPlugin()
  ],
  // postcss:[
  //   autoprefixer({browsers: ['last 3 versions']})
  // ],
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader'] },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }
};

var defaultConfig = {
  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },

  devServer: {
    historyApiFallback: true,
    quiet: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};

module.exports = webpackMerge(defaultConfig, webpackConfig);

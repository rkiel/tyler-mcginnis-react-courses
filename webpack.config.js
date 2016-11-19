var path = require('path');

var PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
}

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(PATHS.app, 'index.html'),
  filename: 'index.html',
  inject: 'body'
});

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: [PATHS.app],
  output: {
    path: PATHS.dist,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader'
        //      loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        //      include: PATHS.app
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
  //plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};

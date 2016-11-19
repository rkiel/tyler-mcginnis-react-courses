var app_root = 'app';
var dist_root = 'dist';

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: [__dirname, app_root, 'index.html'].join('/'),
  filename: 'index.html',
  inject: 'body'
});

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");


module.exports = {
  entry: [
    [__dirname, app_root, 'index.js'].join('/')
  ],
  output: {
    path: [__dirname, dist_root].join('/'),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css/,
      loader: 'style-loader!css-loader'
        //      loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        //      include: [__dirname, app_root].join('/')
    }]
  },
  plugins: [HTMLWebpackPluginConfig]
    //plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};

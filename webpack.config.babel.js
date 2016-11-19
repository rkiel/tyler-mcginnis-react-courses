import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(PATHS.app, 'index.html'),
  filename: 'index.html',
  inject: 'body'
});

//const ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");

// in package.json, the 'key' specified in the 'scripts'
const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'production';

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const baseExport = {
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
}

const developmentExport = {
  devtool: 'cheap-module-inline-source-map',
  plugins: [HTMLWebpackPluginConfig]
  //plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};
const productionExport = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
  //plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};

export default Object.assign({}, baseExport, isProduction === true ? productionExport : developmentExport);

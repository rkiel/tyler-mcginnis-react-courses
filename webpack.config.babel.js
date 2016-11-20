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

const HotModuleReplacementConfig = new webpack.HotModuleReplacementPlugin();

//const ExtractTextPluginConfig = new ExtractTextPlugin("styles.css");

// in package.json, the 'key' specified in the 'scripts'
const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = isProduction ? 'production' : 'development';

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
        loader: 'style!css?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]'
        //      loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        //      include: PATHS.app
      }
    ]
  },
  resolve: {
    root: path.resolve(PATHS.app)
  }
}

const developmentExport = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.dist,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [HTMLWebpackPluginConfig, HotModuleReplacementConfig]
  //plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};
const productionExport = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
  //plugins: [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};

export default Object.assign({}, baseExport, isProduction === true ? productionExport : developmentExport);

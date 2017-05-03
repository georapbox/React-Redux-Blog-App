const path = require('path');
const devEnv = process.env.NODE_ENV === 'development';
const prdEnv = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const outputFile = `[name].[chunkhash]${prdEnv ? '.min' : ''}`;
const vendors = [
  'axios', 'lodash', 'prop-types', 'react', 'react-dom',
  'react-redux', 'react-router-dom', 'redux', 'redux-form', 'redux-thunk'
];

const extractSass = new ExtractTextPlugin({
  filename: `${outputFile}.css`,
  disable: devEnv
});

const htmlWebpack = new HtmlWebpackPlugin({
  favicon: 'favicon.ico',
  template: 'src/index.html'
});

const vendorChunks = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor', 'manifest']
});

const uglifyJS = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  sourceMap: true
});

const plugins = [
  extractSass,
  htmlWebpack,
  vendorChunks
];

if (!devEnv) {
  plugins.push(uglifyJS);
}

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/index.js',
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: devEnv ? '/' : './',
    filename: `${outputFile}.js`
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: true}
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

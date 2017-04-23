const devEnv = process.env.NODE_ENV === 'development';
const prdEnv = process.env.NODE_ENV === 'production';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const outputFile = `[name].bundle${prdEnv ? '.min' : ''}`;

const extractSass = new ExtractTextPlugin({
  filename: `${outputFile}.css`,
  disable: devEnv
});

const htmlWebpack = new HtmlWebpackPlugin({
  favicon: 'favicon.ico',
  template: 'src/index.html'
});

const plugins = [
  extractSass,
  htmlWebpack
];

if (!devEnv) {
  plugins.push(new UglifyJsPlugin({minimize: true, sourceMap: true}));
}

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: `${__dirname}/dist`,
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

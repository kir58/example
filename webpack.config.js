const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        }],
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ]),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    stats: 'errors-only',
    contentBase: './dist',
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 3000,
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        cache: true,
        uglifyOptions: {
          compress: {
            unused: false,
            unsafe: true,
            inline: true,
            passes: 2,
            keep_fargs: false,
            dead_code: false,
            join_vars: true,
            drop_console: true,
            comparisons: true,
            loops: true,
            drop_debugger: true,
          },
          warnings: false,
          output: {
            beautify: false,
            comments: false,
          },
          mangle: true,
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

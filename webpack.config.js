const path = require('path');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [{
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: ['autoprefixer']
          }
        }
      }, {
        loader: 'sass-loader'
      }],
      test: /\.(scss)$/,
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    client: {
      progress: true,
      reconnect: true,
    },
    static: [{
      directory: path.resolve(__dirname, 'dist'),
    }, {
      directory: path.resolve(__dirname, 'public'),
    }],
    compress: true,
    hot: true,
    open: true,
    port: 9000,
  },
  mode: 'development',
};

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

  entry: [
    './src/store/constants/ActionTypes.js',
    './src/store/actions/index.js',
    './src/routes.jsx',
    './src/store/reducers/index.js',
    './src/client.jsx',
    './src/styles/Style.less',
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, './', 'build'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json', '.less'],
    modulesDirectories: ['node_modules'],
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['flow', 'stage-0', 'react'],
          plugins: ['transform-async-to-generator'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
      },
    ],
  },
};

const path = require('path');

module.exports = {

  entry: [
    './src/store/constants/ActionTypes.js',
    './src/content.js',
  ],

  output: {
    filename: 'content.js',
    path: path.join(__dirname, './', 'build'),
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json'],
    modulesDirectories: ['node_modules'],
  },

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
    ],
  },
};

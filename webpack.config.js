const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  plugins: [new UglifyJsPlugin({
    parallel: true,
    test: /\.js($|\?)/i
  })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/,  /spec/],
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
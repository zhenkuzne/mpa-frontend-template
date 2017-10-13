const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist/');
const srcPath = path.resolve(__dirname, 'src/');

const config = {
  context: srcPath,
  entry: './',
  resolve: {
    alias: {
      Img: path.resolve(srcPath, 'img/'),
      Font: path.resolve(srcPath, 'font/')
    }
  },
  output: {
    path: distPath,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        include: srcPath,
        use: ExtractTextPlugin.extract({
          fallback: {loader: 'style-loader', options: {sourceMap: true}},
          use: [
            {loader: 'css-loader', options: {sourceMap: true}},
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')
                ]
              }
            },
            {loader: 'stylus-loader', options: {sourceMap: true}}
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff)$/,
        include: srcPath,
        exclude: path.resolve(srcPath, 'ico/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: path.resolve(srcPath, 'ico/'),
        use: ['svg-sprite-loader', 'svgo-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new ExtractTextPlugin('app.css')
  ]
};

module.exports = config;

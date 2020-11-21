const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const IfPlugin = require('if-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const src = path.resolve(__dirname, 'src/');
const dist = path.resolve(__dirname, 'dist/');

const ico = path.resolve(src, 'ico/');
const staticPath = path.resolve(src, 'static/');

const pug = path.resolve(src, 'pug/pages/');
const pages = fs.readdirSync(pug).filter(fileName => fileName.endsWith('.pug'))

module.exports = env => ({
  context: src,
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': src
    }
  },
  entry: {
    app: './js/main.js',
    styles: './style/main.scss',
    assets: './assets.js'
  },
  output: {
    filename: './js/[name].js',
    path: dist
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [autoprefixer]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|eot|ttf|woff2)$/,
        exclude: ico,
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 8192,
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        include: ico,
        use: ['svg-sprite-loader', 'svgo-loader']
      },
      {
        test: /\.pug$/,
        loaders: [{
          loader: "pug-loader"
        }],
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/app.css'
    }),
    new CopyWebpackPlugin([{
      from: staticPath,
      to: dist
    }]),
    new CleanWebpackPlugin(dist),
    new IfPlugin(
      env === 'server',
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        ghostMode: false,
        server: {
          baseDir: [dist]
        }
      }, {
        injectCss: true
      })
    ),
    ...pages.map(page => new HtmlWebpackPlugin({
      template: `${pug}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ]
});

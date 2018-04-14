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
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const src = {
  root: path.resolve(__dirname, 'src/')
};
Object.assign(src, {
  img: path.resolve(src.root, 'img/'),
  font: path.resolve(src.root, 'font/'),
  ico: path.resolve(src.root, 'ico/'),
  pug: path.resolve(src.root, 'pug/'),
  static: path.resolve(src.root, 'static/')
});

const dist = {
  root: path.resolve(__dirname, 'dist/')
};

module.exports = (env, argv) => ({
  context: src.root,
  devtool: 'inline-source-map',
  entry: {
    app: './',
    assets: './assets.js'
  },
  resolve: {
    alias: {
      Img: src.img,
      Font: src.font
    }
  },
  output: {
    filename: './js/[name].js',
    path: dist.root
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: src.root,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: src.root,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
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
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|eot|ttf|woff2)$/,
        exclude: src.ico,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        include: src.ico,
        use: ['svg-sprite-loader', 'svgo-loader']
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].html',
              context: src.pug
            }
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              exports: false,
              doctype: 'html',
              basedir: src.pug,
              data: {
                data: () => JSON.parse(fs.readFileSync(path.resolve(src.pug, 'data/global.json'), 'utf8'))
              },
              filters: {
                // filter for include json data as empty string
                'json-watch': () => ''
              }
            }
          }
        ]
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
    new MiniCssExtractPlugin({
      filename: './css/app.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin([{
      from: src.static,
      to: dist.root
    }]),
    new CleanWebpackPlugin(dist.root),
    new IfPlugin(
      env === 'server',
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: {
          baseDir: [dist.root]
        }
      }, {
        injectCss: true
      })
    ),
    new IfPlugin(
      argv.mode === 'production',
      new ImageminPlugin({
        test: /\.(gif|png|jpe?g)$/
      })
    )
  ]
});

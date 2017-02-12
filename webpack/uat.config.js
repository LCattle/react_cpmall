require('babel-polyfill');

// Webpack config for creating the production bundle.
var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, '/home/vagrant/coolpad/dist/prod/cpmall_react');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'vendor': ["react-router", "react", "react-dom", "redux", "react-router-redux", "redux-async-connect"],
    'common': ["react-bootstrap", "react-router-bootstrap"],
    'main': [
      // 'bootstrap-sass!./src/theme/bootstrap.config.prod.js',
      // 'bootstrap-loader!./src/theme/bootstrap.config.prod.js',
      'bootstrap-loader/lib/bootstrap.loader?extractStyles&configFilePath=/vagrant/cpmall_react/src/theme/.bootstraprc!bootstrap-loader/no-op.js',
      'font-awesome-webpack!./src/theme/font-awesome.config.prod.js',
      './src/client.js'
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      // Bootstrap 3
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
      // Bootstrap 4
      // { test: /bootstrap[\/\\]js[\/\\]dist[\/\\]/, loader: 'imports?jQuery=jquery' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [strip.loader('debug'), 'babel-loader']},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 2,
                sourceMap: true
              }
            }, {
              loader: 'autoprefixer-loader',
              query: {
                browsers: 'last 2 version'
              }
            }, {
              loader: 'less-loader',
              query: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ]
        })
      }, { test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 2,
                sourceMap: true
              }
            }, {
              loader: 'autoprefixer-loader',
              query: {
                browsers: 'last 2 version'
              }
            }, {
              loader: 'less-loader',
              query: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ]
        })
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              // query: {
              //   modules: true,
              //   importLoaders: 2,
              //   sourceMap: true
              // }
            }, {
              loader: 'autoprefixer-loader',
              query: {
                browsers: 'last 2 version'
              }
            }, {
              loader: 'sass-loader',
              query: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true
              }
            }
          ]
        })
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
    ]
  },
  // progress: true,
  performance: {
    hints: false
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: projectRootPath }),

    // css files from the extract-text-plugin loader
    new ExtractTextPlugin({filename: '[name]-[chunkhash].css', allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },

      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // optimizations
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // names: ['vendor', 'manifest'],
      names: ['common', 'vendor'],
      minChunks: Infinity,
      // async: true,
      // filename: '[name].[hash].js',
    }),

    webpackIsomorphicToolsPlugin
  ]
};

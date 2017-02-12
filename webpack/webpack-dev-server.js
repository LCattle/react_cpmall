var Express = require('express');
var webpack = require('webpack');

var config = require('../src/config');
var webpackConfig = require('./dev.config');
var compiler = webpack(webpackConfig);

var host = config.host || 'localhost';
var port = (Number(config.port) + 1) || 3001;
var serverOptions = {
  // contentBase: 'http://' + host + ':' + port,
  contentBase: '/',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // proxy: {
  //   "/static/css/*": "http://127.0.0.1:9696",
  //   "/static/js/*": "http://127.0.0.1:9696",
  //   "/static/images/*": "http://127.0.0.1:9696",
  //   "/mock/*": "http://127.0.0.1:9696"
  // },
  stats: {colors: true}
};

var app = new Express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});

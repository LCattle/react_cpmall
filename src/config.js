require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: '酷派商城',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: '酷派商城: %s',
      meta: [
        {name: 'description', content: 'All the modern best practices in one example.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: '酷派商城'},
        {property: 'og:image', content: 'http://www.coolpad.com/favicon.ico'},
        {property: 'og:locale', content: 'cn_ZH'},
        {property: 'og:title', content: '酷派商城'},
        {property: 'og:description', content: 'Coolpad，手机，音乐手机，S1，全网通'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@coolpad'},
        {property: 'og:creator', content: '@coolpad'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ],
      // script={[
      //   {src: "http://include.com/pathtojs.js", type: "text/javascript"},
      //   {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
      // ]}
    }
  },

}, environment);

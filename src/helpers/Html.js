import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
    cpmalljs: PropTypes.string
  };

  render() {
    const {assets, component, store, cpmalljs} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    // 远程调试：weinre --httpPort 8081 --boundHost -all-
    // { Object.keys(assets.styles).length === 0 ? <style dangerouslySetInnerHTML={{__html: require('../theme/bootstrap.config.js') + require('../containers/App/App.scss')._style}}/> : null }
          // <script src="http://192.168.31.98:8081/target/target-script-min.js#anonymous" />

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="HandheldFriendly" content="true" />
          <meta httpEquiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1" />
          <meta httpEquiv="imagetoolbar" content="no" />
          <meta httpEquiv="pragma" content="no-cache" />
          <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
          <script dangerouslySetInnerHTML={{__html: cpmalljs}} charSet="UTF-8"/>
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
          )}

          {/* (will be present only in development mode) */}
          {/* outputs a <style/> tag with all bootstrap styles + App.scss + it could be CurrentPage.scss. */}
          {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
          {/* ideally one could also include here the style for the current page (Home.scss, About.scss, etc) */}
          { Object.keys(assets.styles).length === 0 ?
            <style dangerouslySetInnerHTML={{__html: require('../theme/bootstrap.config.js') +
              require('../components/HeaderFooter/Header.scss')._style + require('../containers/Home/Home.scss')._style}}/> : null }
          <script src="//cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js" />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
          <script src={assets.javascript.main} charSet="UTF-8"/>
          <script dangerouslySetInnerHTML={{__html: `console.log('开始渲染了')`}} charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}

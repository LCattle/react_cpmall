import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router/lib/Link';
import Helmet from 'react-helmet';
import { isLoaded as isPageLoaded, loadIndex as loadIndex } from 'redux/modules/page';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
// import { push } from 'react-router-redux';
import { asyncConnect } from 'redux-async-connect';
import config from '../../config';

import HeaderBar from '../../components/HeaderFooter/Header';
import FooterBar from '../../components/HeaderFooter/Footer';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isPageLoaded(getState())) {
      promises.push(dispatch(loadIndex()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
// {logout, pushState: push})
@connect(
  state => ({page: state.page})
)
export default class App extends Component {

  componentWillMount() {
    // this.isMenuToggle = false;
    // if (!this.props.page.loaded) {
    //   this.props.dispatch(loadIndex());
    // }
    console.log(this.props);
  }

  componentDidMount() {
    // const addWenire = (scr) => {
    //   scr.setAttribute('src', 'http://192.168.31.98:8081/target/target-script-min.js#anonymous');
    //   document.getElementsByTagName('body')[0].appendChild(scr);
    // };
    // addWenire(document.createElement('script'));
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      // this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      // this.props.pushState('/');
    }
  }

  // static reduxAsyncConnect(params, store) {
  //   const {dispatch, getState} = store;
  //   if (!isPageLoaded(getState())) {
  //     return dispatch(loadIndex());
  //   }
  // }

  render() {
    const locHash = this.props.location.hash;
    return (
      <div class="app">
        <Helmet {...config.app.head}/>

        { locHash !== '#app' && <HeaderBar/> }
        { locHash !== '#app' ? (
          <div class="m_content">
            {this.props.children}
          </div>
        ) : (
          <div class="app_content">
            {this.props.children}
          </div>
        )}
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/payment">payment</Link></li>
        </ul>
        <FooterBar/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object,
  page: PropTypes.object,
  user: PropTypes.object,
  // dispatch: PropTypes.func.isRequired,
  // pushState: PropTypes.func.isRequired
};

App.contextTypes = {
  store: PropTypes.object.isRequired
};

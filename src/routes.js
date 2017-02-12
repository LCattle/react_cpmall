import { loadCart as loadCart } from 'redux/modules/page';
// import { loadCart as loadCart, loadProductDetail as loadProductDetail } from 'redux/modules/page';
import { loadPayData as loadPayData } from 'redux/modules/page';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
// import {Login} from 'containers';
export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };
  const requireCart = (nextState, replace, cb) => {
    function getCart() {
      cb();
    }
    // if (!isPageLoaded(store.getState())) {
    return store.dispatch(loadCart()).then(getCart);
    // }
    // cb();
  };
  // const requireProductDetail = (nextState, replace, cb) => {
  //   function getProductDetail() {
  //     cb();
  //   }
  //   // if (!isPageLoaded(store.getState())) {
  //   return store.dispatch(loadProductDetail()).then(getProductDetail);
  //   // }
  //   // cb();
  // };
  const requirePayData = (nextState, replace, cb) => {
    function getPayMentData() {
      cb();
    }
    // if (!isPageLoaded(store.getState())) {
    return store.dispatch(loadPayData()).then(getPayMentData);
    // }
    // cb();
  };
  /**
   * Please keep routes in alphabetical order
   */
  if (typeof require.ensure !== 'function') require.ensure = (deps, cb) => cb(require);

  return {
    path: '/',
    component: require('./containers/App/App'),
    indexRoute: {
      component: require('./containers/Home/Home')
    },
    childRoutes: [{
      path: 'login',
      getComponent(nextState, cb) {
        console.time('gettingComponent');
        store.dispatch({
          type: 'WEBPACK_LOAD'
        });
        require.ensure([], (require) => {
          cb(null, require('./containers/Login/Login'));
          store.dispatch({
            type: 'WEBPACK_LOAD_END'
          });
          console.timeEnd('gettingComponent');
        });
      }

    }, {
      onEnter: requireCart,
      path: 'cart',
      getComponent(nextState, cb) {
        console.time('gettingComponent');
        store.dispatch({
          type: 'WEBPACK_LOAD'
        });
        require.ensure([], (require) => {
          cb(null, require('./containers/Cart/Cart'));
          store.dispatch({
            type: 'WEBPACK_LOAD_END'
          });
          console.timeEnd('gettingComponent');
        });
      }

    // }, {
    //   onEnter: requireProductDetail,
    //   path: 'product/detail/:id',
    //   getComponent(nextState, cb) {
    //     console.time('gettingComponent');
    //     store.dispatch({
    //       type: 'WEBPACK_LOAD'
    //     });
    //     require.ensure([], (require) => {
    //       cb(null, require('./containers/ProductDetail/ProductDetail'));
    //       store.dispatch({
    //         type: 'WEBPACK_LOAD_END'
    //       });
    //       console.timeEnd('gettingComponent');
    //     });
    //   }

    }, {
      path: 'about',
      getComponent(nextState, cb) {
        console.time('gettingComponent');
        store.dispatch({
          type: 'WEBPACK_LOAD'
        });
        require.ensure([], (require) => {
          cb(null, require('./containers/About/About'));
          store.dispatch({
            type: 'WEBPACK_LOAD_END'
          });
          console.timeEnd('gettingComponent');
        });
      }

    // }, {
    //   path: 'survey',
    //   getComponent(nextState, cb) {
    //     require.ensure([], (require) =>
    //       cb(null, require('./containers/Survey/Survey')));
    //   }
    }, {
      path: 'orderconfirm',
      getComponent(nextState, cb) {
        require.ensure([], (require) =>
          cb(null, require('./containers/Orderconfirm/Orderconfirm')));
      }
    }, {
      onEnter: requirePayData,
      path: 'payment',
      getComponent(nextState, cb) {
        console.time('gettingComponent');
        store.dispatch({
          type: 'WEBPACK_LOAD'
        });
        require.ensure([], (require) => {
          cb(null, require('./containers/OrderPayMent/OrderPayMent'));
          store.dispatch({
            type: 'WEBPACK_LOAD_END'
          });
          console.timeEnd('gettingComponent');
        });
      }

    }, {
      path: 'widgets',
      getComponent(nextState, cb) {
        store.dispatch({
          type: 'WEBPACK_LOAD'
        });
        require.ensure([], (require) => {
          cb(null, require('./containers/Widgets/Widgets'));
          store.dispatch({
            type: 'WEBPACK_LOAD_END'
          });
        });
      }
    }, {
      onEnter: requireLogin,
      childRoutes: [
        {
          path: 'chat',
          getComponent(nextState, cb) {
            require.ensure([], (require) =>
              cb(null, require('./containers/Chat/Chat')));
          }
        },
        {
          path: 'loginSuccess',
          getComponent(nextState, cb) {
            require.ensure([], (require) =>
              cb(null, require('./containers/LoginSuccess/LoginSuccess')));
          }
        }
      ]
    }, {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], (require) =>
          cb(null, require('./containers/NotFound/NotFound')));
      }
    }]
  };
};

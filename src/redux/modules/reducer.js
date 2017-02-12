import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import page from './page';
import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import cart from './cart';
// import widgets from './widgets';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  page,
  cart,
  auth,
  form,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  // widgets
});

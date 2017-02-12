const LOAD = 'redux-cpmall/page/LOAD';
const LOAD_SUCCESS = 'redux-cpmall/page/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-cpmall/page/LOAD_FAIL';
import serverApi from '../api';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function loadedType() {
  return LOAD_SUCCESS;
}

export function isLoaded(globalState) {
  return globalState.page && globalState.page.loaded;
}

export function loadIndex() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(serverApi('index'))
  };
}

export function loadCart() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(serverApi('cartList'))
  };
}

export function loadProductDetail(productId) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    id: productId,
    promise: (client) => client.get(serverApi('productDetail') + productId)
  };
}

export function loadPayData() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(serverApi('getPayData'))
  };
}

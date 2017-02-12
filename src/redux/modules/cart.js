const POST_CART = 'redux-cpmall/cart/POST_CART';
const POST_CART_SUCCESS = 'redux-cpmall/cart/POST_CART_SUCCESS';
const POST_CART_FAIL = 'redux-cpmall/cart/POST_CART_FAIL';

const initialState = {
  loaded: false,
  cart: {},
  cartError: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case POST_CART:
      return state; // 'saving' flag handled by redux-form
    case POST_CART_SUCCESS:
      return {
        ...state,
        cart: action.result,
        cartError: {
          ...state.cartError,
          [action.id]: null
        }
      };
    case POST_CART_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        cartError: {
          ...state.cartError,
          [action.id]: action.error
        },
        error: action.error
      } : state;
    default:
      return state;
  }
}

export function postCart(cartData, api) {
  console.log('post for = ' + api);
  return {
    types: [POST_CART, POST_CART_SUCCESS, POST_CART_FAIL],
    id: cartData.id,
    promise: (client) => client.post(api, {
      data: cartData
    })
  };
}

export function apiFix(availableActions = {}) {
  // 修复api映射问题

console.log('availableActions.payMentData');
console.log(availableActions.payMentData);
  (availableActions.cart)['get-cart-json'] = availableActions.cart.getCart;
  (availableActions.cart)['product-update-qty'] = availableActions.cart.postCartQty;
  (availableActions.cart)['product-detail'] = availableActions.product.productDetail;
  (availableActions.payment)['pay-ment-data'] = availableActions.payment.getPayMentData;
  // delete availableActions.cart['getCart'];

	console.log('模拟接口 ------------->');
  console.log(availableActions);

  return availableActions;
}
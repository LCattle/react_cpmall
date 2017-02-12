module.exports = function(api) {
	var apiPrefix = ''
	var server = {
		// 用户
		'logout': apiPrefix + '/user/logout',
		// 商品详情页接口
		'cartProduct': apiPrefix + '/cart/add-product',			// POST 添加商品进购物车, sku=CP10002408&suit=1&suit=2&service=1&service=2  quantity=1
		// 购物车页面接口
		'cartList': apiPrefix + '/cart/get-cart-json/', // get, 购物车
		'cartQty': apiPrefix + '/cart/product-update-qty',		// POST 购物车商品更改数量, item_id=111  qty=1
		'cartCheckbox': apiPrefix + '/cart/check-item',		// POST 购物车商品选中与取消, item_id=4&item_id=3&item_id=1, checked=false
		'addCartService': apiPrefix + '/cart/add-service', 	// post, item_id=1 id=1
		'delCartService': apiPrefix + '/cart/del-service',		// post, item_id=1 id=1
		'addCartSuit': apiPrefix + '/cart/add-suit', // POST, 添加套餐 itsuitem_id=111  id=1
		'delCartSuit': apiPrefix + '/cart/del-suit', // POST, 删除套餐 itsuitem_id=111  id=1
		'addrlist': apiPrefix + '/user/address/filter',		// 通用地址库接口
		// 订单确认页
		'orderCheckout': apiPrefix + '/cart/checkout', // POST 提交订单 address_id=111  payment_method_id=1 shipping_method_id=1 shipping_time_id=2 invoice_title='xxxxxx'
	  'userAddrList': apiPrefix + '/user/addresses/',
	  'checkoutCoupons': apiPrefix + '/cart/get-available-coupon',
	  'checkoutCouponSettle': apiPrefix + '/cart/apply-coupon',
		//订单支付页接口
		'payMent': apiPrefix + '/payment/data',	//支付接口 trade_no=20161533254578 payment_method=alipay
		'longPolling': apiPrefix + '/payment/result', //长轮询接口?trade_no=20161533254578
		//获取地址
		'getAddressInfo': apiPrefix + '/user/address/filter/',  //获取省份地址接口  ?area_id=123 如带参数，则是请求市区
		'getHbFq': apiPrefix + '/payment/hb-fq/' //获取花呗分期
	}
	return server[api]
}
var kevin = require('./simulate_data/kevin.js')
var saunders = require('./simulate_data/saunders.js')
var cattle = require('./simulate_data/cattle.js')
var Tony = require('./simulate_data/Tony.js')
var chenbo = require('./simulate_data/chenbo.js')
var Curry=require('./simulate_data/Curry.js')

module.exports = function(pageKey) {

  function getCookie(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1
        c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) c_end = document.cookie.length
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return ""
  }
  window.cpmall.distinctId = getCookie('distinct_id')
  console.log('distinct_id = ' + window.cpmall.distinctId)

  var datas = {
    "main": kevin.main,
    "product_detail": kevin.product_detail,
    "cartlist": kevin.cartlist,
    "order_detail": Curry.order_detail,
    'orderconfirm': kevin.orderconfirm,
    "allGoods": saunders.allGoods,
    "searchList": saunders.searchList,
    'center': cattle.center,
    'payMent': cattle.payMent,
    'returnorder': Tony.returnList,
    'useraddr': chenbo.useraddr,
    'orderTitle': chenbo.orderTitle,
    'orderList': chenbo.orderList,
    'order_count': chenbo.order_count,
    'afterSale': cattle.afterSale,
    'receiveCoupon': Curry.receiveCoupon,
    'usercenter':Curry.usercenter
  }

  return datas[pageKey];
}

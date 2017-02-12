module.exports = function(hasFooter=true) {

var header = `
<header class="cpmall_header">
  <div id="cpmallInputContainer" class="cpmall_input_container hidden">
    <aside class="cpmall_input_custom"><span class="iconPureWhite cpmall_input_search">b</span><input id="cpmallInput" class="cpmall_input">
      <ul class="cpmall_header_hotsearch hidden">
          <li class="cpmall_header_hotsearch_item"><a class="hotsearch_item" href="/product/search-variant/?name=cool dual">cool1 dual</a></li>
          <li class="cpmall_header_hotsearch_item"><a class="hotsearch_item" href="/product/search-variant/?name=Cool 1C">Cool 1C</a></li>
          <li class="cpmall_header_hotsearch_item"><a class="hotsearch_item" href="/product/search-variant/?name=锋尚MAX">锋尚MAX</a></li>
          <li class="cpmall_header_hotsearch_item"><a class="hotsearch_item" href="/product/search-variant/?name=锋尚mini">锋尚mini</a></li>
          <li class="cpmall_header_hotsearch_item"><a class="hotsearch_item" href="/product/search-variant/?name=锋尚3">锋尚3</a></li>
      </ul>
    </aside>
    <span class="iconPureWhite cpmall_input_close">I</span>
  </div>
  <a class="cpmall_logo" href="/">
    <picture>
      <source srcset="/static/images/logo.svg" type="image/svg+xml" class="logo_size">
      <img class="logo_size" src="data:image/png;base64,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" alt="coolpad">
    </picture>
  </a>
  <ul class="cpmall_top_menu">
    <li class="cpmall_top_menu_item cpmall_top_menu_item_hover cpmall_top_menu_item_search"><a id="cpmallSearch" href="javascript:;" name="搜索"><i class="iconPureWhite icon-search">b</i></a></li>
    <li id="myShoppingCart" class="cpmall_top_menu_item cpmall_top_menu_item_hover">
    <a href="/cart" target="_blank" name="购物车"><i class="iconPureWhite icon-shopping_cart">d</i></a>
      <em class="cpmall_menu_cart_num J-menu-cart-num"></em>
      <ul id="cpmallCartLittle" class="cpmall_top_shopmenu cpmall_top_shopmenu_list"></ul>
    </li>
    <li id="myAccount" class="cpmall_top_menu_item cpmall_top_menu_item_hover top_menu_item--fix">
      <a class="btn" href="javascript:"><i class="iconPureWhite icon-myaccount myaccount_name" data-name="{{Kevin}}">S</i></a>
      <ul class="cpmall_top_usermenu hidden">
        <li><a class="cpmall_top_usermenu_item usermenu_my" href="/user/order_list.html">我的订单</a></li>
        <li><a class="cpmall_top_usermenu_item usermenu_service" href="/user/aftersale_list.html">售后服务</a></li>
        <li><a class="cpmall_top_usermenu_item usermenu_coupon" href="/user/user_info.html#coupon">我的优惠券</a></li>
        <li><a class="j-logout cpmall_top_usermenu_item usermenu_exit" href="/user/logout/">退出账号</a></li>
      </ul>
      <!-- <a class="btn" href="javascript:"><i class="iconPureWhite icon-myaccount">S</i></a>
      <ul class="cpmall_top_usermenu hidden">
        <li><a class="cpmall_top_usermenu_item_login J-login-url" href="javascript:">点击登录</a></li>
        <li><a class="cpmall_top_usermenu_item_login cpmall_top_usermenu_item_register J-register-url" href="javascript:">点击注册</a></li>
      </ul> -->
    </li>
  </ul>
  <nav class="cpmall_top_toolbar">
    <li class="cpmall_top_tb_item"><a href="#" class="top_item--active">酷派商城</a></li>
    <li class="cpmall_top_tb_item"><a href="http://bbs.coolpad.com/" target="_blank">酷友社区</a></li>
    <li class="cpmall_top_tb_item"><a href="#" target="_blank">酷码入口</a></li>
    <li class="cpmall_top_tb_item"><a href="http://www.coolyun.com/" target="_blank">酷云</a></li>
    <li class="cpmall_top_tb_item top_tb_item--fix"><a href="/all_products.html">全部商品</a></li>
    <li class="cpmall_top_tb_item_mobile"><input class="mobile_search J-search-input"><i class="iconRefresh icon-search J-search">b</i></li>
    <li class="cpmall_top_tb_fade J-hide-toolbar"></li>
  </nav>
  <p id="menuBtn" class="cpmall_icon_menu"><span class="iconPureWhite icon-menu">R</span></p>
  <div class="cpmall_fade"></div>
</header>
`

var footer = `
<hr class="cool_footer_split_line">
<div class="cool_footer">
  <ul class="cool_footer_guranty">
    <li class="cool_footer_guranty_item tip_seven">7天退货保障</li>
    <li class="cool_footer_guranty_line"></li>
    <li class="cool_footer_guranty_item tip_fifteen">15天换货保障</li>
    <li class="cool_footer_guranty_line"></li>
    <li class="cool_footer_guranty_item tip_100">满100元包邮</li>
    <li class="cool_footer_guranty_line"></li>
    <li class="cool_footer_guranty_item tip_services">835个售后网点</li>
  </ul>
  <div class="clear-float"></div>
  <hr class="cool_footer_split_line cool_footer_line_bottom">
  <ul class="cool_footer_menu">
    <li class="cool_footer_menu_item cool_footer_menu_item--down">
      <span data-key="0" class="footer_menu_item--active" href="#">购物指南</span>
      <p>
      <a class="" href="/help/#shoppingFlow">购物流程</a>
      <a class="" href="/help/#coupon">优惠券</a>
      <a class="" href="/help/#commonProblem">常见问题</a>
      </p>
    </li>
    <li class="cool_footer_menu_item cool_footer_menu_item--down">
      <span data-key="1" class="footer_menu_item--active" href="#">关于支付</span>
      <p>
      <a class="" href="/help/#paymentStyle">关于支付</a>
      <a class="" href="/help/#receiptNotice">关于发票</a>
      </p>
    </li>
    <li class="cool_footer_menu_item cool_footer_menu_item--down">
      <span data-key="2" class="footer_menu_item--active" href="#">配送说明</span>
      <p>
      <a class="" href="/help/#shippingStyle">配送方式</a>
      <a class="" href="/help/#receiptNotice">签收说明</a>
      </p>
    </li>
    <li class="cool_footer_menu_item cool_footer_menu_item--down">
      <span data-key="3" class="footer_menu_item--active" href="#">售后服务</span>
      <p>
      <a class="" href="/help/#costumerServiceTotal">售后政策</a>
      <a class="" href="http://bs.coolpad.com/afterSale/reservation/index.html">预约到店</a>
      <a class="" href="http://bs.coolpad.com/afterSale/door/door.html">预约上门</a>
      <a class="" href="http://bs.coolpad.com/afterSale/send/send1.html">寄修服务</a>
      </p>
    </li>
    <li class="cool_footer_menu_item cool_footer_menu_item--down cool_footer_menu_item--fix">
      <span data-key="4" class="footer_menu_item--active" href="#">关注我们</span>
      <p>
      <a class="" href="http://e.weibo.com/cpkf4008881388">客服微博</a>
      <a class="" href="/help/#connectUs">联系我们</a>
      </p>
    </li>
  </ul>
  <aside class="cool_footer_tip">
    <p class="phone">400-011-1388</p>
    <p class="workday">周一至周日 8:00-18:00</span>（仅收市话费）</p>
    <a class="cool_footer_btn" onclick="daovoice('openMessages')" target="_blank">在线咨询</a>
  </aside>
</div>
<p class="footer_copyright">Copyright © 2016, Coolpad Co., Ltd. All Right Reserved.
<span class="footer_copyright_zh">宇龙计算机通信科技（深圳）有限公司</span></p>
<div class="footer_copyright_container"><a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" class="footer_copyright_no">粤ICP备15075056号</a>
<a href="https://credit.szfw.org/CX20160908025315560585.html" target="_blank">
<img class="footer_copyright_sign" src="/static/images/honesty_sign.png">
</a>
</div>

<article class="popboxsimple hiddenImportant" id="hfpopbox">
  <div class="popboxsimple_fade"></div>
  <section class="popboxsimple_content">
    <h3 class="popboxsimple_title">提示</h3>
    <span class="j-popbox-event iconGray popboxsimple_close J-popboxsimple-cancel-btn">I</span>
    <div class="popboxsimple_detail">
        <p class="popboxsimple_price"></p>
        <p class="popboxsimple_desc">您确认删除该商品吗？</p>
    </div>
    <div class="popboxsimple_footer">
        <button class="popboxsimple_btn popboxsimple_btn_1 J-popboxsimple-cancel-btn" data-hookid="hfCancel">取消</button>
        <button class="popboxsimple_btn popboxsimple_btn_2 J-popboxsimple-ok-btn" data-hookid="hfConfirm">确认</button>
    </div>
  </section>
</article>
`

$('#cpHeader').html('').append($(header))
hasFooter && $('#cpFooter').html('').append($(footer))
}
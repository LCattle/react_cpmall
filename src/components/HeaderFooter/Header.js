import React, { Component } from 'react';
// import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// @connect(
//     state => ({info: state.info.data}),
//     dispatch => bindActionCreators({load}, dispatch))
export default class HeaderBar extends Component {
  // static propTypes = {
  //   info: PropTypes.object,
  //   load: PropTypes.func.isRequired
  // }

  isMenuToggle = false;

  handleMenuToggle = (event) => {
    event.preventDefault();
    this.isMenuToggle = !this.isMenuToggle;
    let rel = event.target.getAttribute('data-rel');
    rel = rel ? rel : event.target.parentNode.getAttribute('data-rel');
    const eleMore = document.querySelector('#' + rel);
    const calHeight = () => {
      let height = 0;
      Array.prototype.slice.call(eleMore.childNodes).forEach((child) => {
        if (child.nodeType === 1) {
          const oStyle = window.getComputedStyle(child);
          height = child.clientHeight + (parseInt(oStyle.borderTopWidth, 10) || 0) + (parseInt(oStyle.borderBottomWidth, 10) || 0);
        }
      });
      return height;
    };
    eleMore.style.height = eleMore && this.isMenuToggle ? calHeight() + 'px' : '0px';
  };

  // handleLogout = (event) => {
  //   event.preventDefault();
  //   this.props.logout();
  // };

  render() {
    require('./Header.scss');
    return (
      <header class="cpmall_header">
        <div id="cpmallInputContainer" class="cpmall_input_container hidden">
          <aside class="cpmall_input_custom"><span class="iconPureWhite cpmall_input_search">b</span><input id="cpmallInput" class="cpmall_input" />
          </aside>
          <span class="iconPureWhite cpmall_input_close">I</span>
        </div>
        <a class="cpmall_logo" href="/"></a>
        <ul class="cpmall_top_menu">
          <li class="cpmall_top_menu_item cpmall_top_menu_item_hover cpmall_top_menu_item_search"><a id="cpmallSearch" href="javascript:;" name="搜索">
          <i class="iconPureWhite icon-search">b</i></a></li>
          <li id="myShoppingCart" class="cpmall_top_menu_item cpmall_top_menu_item_hover">
            <a href="/cart" target="_blank" name="购物车"><i class="iconPureWhite icon-shopping_cart">d</i></a>
            <em class="cpmall_menu_cart_num J-menu-cart-num"></em>
            <ul id="cpmallCartLittle" class="cpmall_top_shopmenu cpmall_top_shopmenu_list"></ul>
          </li>
          <li id="myAccount" class="cpmall_top_menu_item cpmall_top_menu_item_hover top_menu_item--fix">
            <a class="j-login btn" href="/user/orders/"><i class="iconPureWhite icon-myaccount myaccount_name" data-name="user.username">S</i></a>
            <ul class="cpmall_top_usermenu hidden">
              <li><a class="cpmall_top_usermenu_item usermenu_my" href="/user/orders">我的订单</a></li>
              <li><a class="cpmall_top_usermenu_item usermenu_service" href="/user/aftersale_list.html">售后服务</a></li>
              <li><a class="cpmall_top_usermenu_item usermenu_coupon" href="/user/user_info.html#coupon">我的优惠券</a></li>
              <li><a class="j-logout cpmall_top_usermenu_item usermenu_exit" href="/user/logout/">退出账号</a></li>
            </ul>
          </li>
        </ul>
        <ul class="cpmall_top_toolbar" id="menuToggle">
          <li class="cpmall_top_tb_item"><a href="/" class="top_item--active">酷派商城</a></li>
          <li class="cpmall_top_tb_item"><a href="http://bbs.coolpad.com/">酷友社区</a></li>
          <li class="cpmall_top_tb_item"><a href="http://www.coolyun.com/">酷云</a></li>
          <li class="cpmall_top_tb_item top_tb_item--fix"><a href="/product/all/">全部商品</a></li>
          <li class="cpmall_top_tb_item_mobile"><input class="mobile_search J-search-input" /><i class="iconGray icon-search J-search">b</i></li>
          <li class="cpmall_top_tb_fade J-hide-toolbar"></li>
        </ul>
        <p id="menuBtn" class="cpmall_icon_menu" data-rel="menuToggle"><i class="iconPureWhite icon-menu" onClick={this.handleMenuToggle}>R</i></p>
      </header>
    );
  }
}

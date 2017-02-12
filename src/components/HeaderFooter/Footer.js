import React, { Component } from 'react';
// import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// @connect(
//     state => ({info: state.info.data}),
//     dispatch => bindActionCreators({load}, dispatch))
export default class FooterBar extends Component {
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
    require('./Footer.scss');
    return (
      <div>
        {/*
        <hr class="cool_footer_split_line" />
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
          <hr class="cool_footer_split_line cool_footer_line_bottom" />
            <ul class="cool_footer_menu">
              <li class="cool_footer_menu_item cool_footer_menu_item--down">
                <span data-key="0" class="footer_menu_item--active" href="#">购物指南</span>
                <p>
                  <a class="" href="/help/#shoppingFlow" target="_blank">购物流程</a>
                  <a class="" href="/help/#coupon" target="_blank">优惠券</a>
                  <a class="" href="/help/#commonProblem" target="_blank">常见问题</a>
                </p>
              </li>
              <li class="cool_footer_menu_item cool_footer_menu_item--down">
                <span data-key="1" class="footer_menu_item--active" href="#">关于支付</span>
                <p>
                  <a class="" href="/help/#paymentStyle" target="_blank">关于支付</a>
                  <a class="" href="/help/#aboutBill" target="_blank">关于发票</a>
                </p>
              </li>
              <li class="cool_footer_menu_item cool_footer_menu_item--down">
                <span data-key="2" class="footer_menu_item--active" href="#">配送说明</span>
                <p>
                  <a class="" href="/help/#shippingStyle" target="_blank">配送方式</a>
                  <a class="" href="/help/#receiptNotice" target="_blank">签收说明</a>
                </p>
              </li>
              <li class="cool_footer_menu_item cool_footer_menu_item--down">
                <span data-key="3" class="footer_menu_item--active" href="#">售后服务</span>
                <p>
                  <a class="" href="/help/#costumerServiceTotal" target="_blank">售后政策</a>
                  <a class="" href="http://bs.coolpad.com/afterSale/reservation/index.html" target="_blank">预约到店</a>
                  <a class="" href="http://bs.coolpad.com/afterSale/door/door.html" target="_blank">预约上门</a>
                  <a class="" href="http://bs.coolpad.com/afterSale/send/send1.html" target="_blank">寄修服务</a>
                </p>
              </li>
              <li class="cool_footer_menu_item cool_footer_menu_item--down cool_footer_menu_item--fix">
                <span data-key="4" class="footer_menu_item--active" href="#">关注我们</span>
                <p>
                  <a class="" href="http://e.weibo.com/cpkf4008881388" target="_blank">客服微博</a>
                  <a class="" href="/help/#connectUs" target="_blank">联系我们</a>
                </p>
              </li>
            </ul>
            <aside class="cool_footer_tip">
              <p class="phone">400-011-1388</p>
              <p class="workday"><span>周一至周日 8:00-18:00</span>（仅收市话费）</p>
            <a class="cool_footer_btn" onclick="daovoice('openMessages')" target="_blank">在线咨询</a>
          </aside>
        </div>
        */}
        <p class="footer_copyright">Copyright © 2016, Coolpad Co., Ltd. All Right Reserved.
          <span class="footer_copyright_zh">宇龙计算机通信科技（深圳）有限公司</span>
        </p>
        <div class="footer_copyright_container"><a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" class="footer_copyright_no">粤ICP备15075056号</a>
          <a href="https://credit.szfw.org/CX20160908025315560585.html" target="_blank">
            <img class="footer_copyright_sign" src="/static/images/honesty_sign.png" />
          </a>
        </div>
      </div>
    );
  }
}

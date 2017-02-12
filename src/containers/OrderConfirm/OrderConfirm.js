import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import OrderConfirmBox from '../../components/OrderConfirmBox/OrderConfirmBox';

@connect(
  () => ({}),
  {initialize})
export default class All extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  render() {
    require('./Orderconfirm.scss');
    return (
      <div className="container">
        <h2 class="orderconfirm_item_title">收货地址1</h2>
        <div class="user-addr-item" data-id="123213">
          <p class="user-name">
            Wency
          </p>
          <p class="user-phone" data-phone="123">18688886666</p>
          <p class="user-pro">
            <span data-province="234" data-id="234"></span>
            <span data-city="123213" data-id="123123"></span>
            <span data-id="123"></span></p>
          <p class="user-addr" data-addr="123">新疆维吾尔族自治区  乌鲁木齐市  乌鲁木齐县  峨山路505号东方纯一2楼深圳众思科技有限公司上海分公司峨山路505号东方纯...</p>
          <input type="hidden" class="user-addr-id" value="123" />
        </div>

        <section class="orderconfirm_pay">
          <h2 class="orderconfirm_item_title js-pay">支付方式
            <span class="orderconfirm_item_pay_desc"></span>
          </h2>
        </section>
        <section class="orderconfirm_delivery js-delivery">
          <h2 class="orderconfirm_item_title">配送方式
            <span class="orderconfirm_item_delivery_desc">顺丰</span>
          </h2>
        </section>

        <section class="orderconfirm_goods j-hide-for-addr">
          <h2 class="orderconfirm_goods_title">商品清单
            <span class="orderconfirm_item_cartlist_size">共1件商品</span>
          </h2>

          <OrderConfirmBox />
        </section>

        <section class="orderconfirm_settle">
          <div class="orderconfirm_settle_header">
            <span class="orderconfirm_settle_title">商品件数 :</span>
            <span class="orderconfirm_settle_title">商品总计 :</span>
            <span class="orderconfirm_settle_title">活动优惠 :</span>
            <span class="orderconfirm_settle_title">优惠券抵扣 :</span>
            <span class="orderconfirm_settle_title">运费 :</span>
          </div>
          <div class="orderconfirm_settle_content">
            <span class="orderconfirm_settle_detail">123</span>
            <span class="orderconfirm_settle_detail">123</span>
            <span class="orderconfirm_settle_detail">123</span>
            <span class="orderconfirm_settle_detail">213123213</span>
            <span class="orderconfirm_settle_detail">123123</span>
          </div>
          <p class="orderconfirm_settle_forpay">
            <span class="settle_forpay_title">应付总额 : </span>
            <span class="settle_forpay_detail">999</span>
            <button class="settle_forpay_btn">提交订单</button>
          </p>
        </section>

      </div>
    );
  }
}

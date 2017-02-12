import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';

@connect(
  () => ({}),
  {initialize})
export default class All extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }


  render() {
    require('./Check.scss');
    return (
      <section class="orderdetail_addr">
        <h3 class="orderdetail_title">收货信息</h3>
        <div>
          <p class="orderdetail_addr_detail">姓名<span class="orderdetail_addr_info">123213</span></p>
          <p class="orderdetail_addr_detail">联系电话<span class="orderdetail_addr_info">134123123</span></p>
          <p class="orderdetail_addr_detail">收货地址<span class="orderdetail_addr_info">123123</span></p>
          <p class="orderdetail_addr_detail">收货时间<span class="orderdetail_addr_info">123123</span></p>
          <p class="orderdetail_addr_detail">支付方式<span class="orderdetail_addr_info">123123</span></p>
        </div>
      </section>
    );
  }
}

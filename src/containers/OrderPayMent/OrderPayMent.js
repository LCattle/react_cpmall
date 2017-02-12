import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import payDataCleaner from './OrderPayDataCleaner';
import countDownTime from './countDown';
/** import PayMentPayType from '../../components/PayMentPayType/PayMentPayType';
console.log(PayMentPayType);*/
let isShow = '';
isShow = false;
const showLine = 'show-line';
const hideLine = 'hide-line';
const showBox = 'fq-box show-box';
const hidePayType = 'platform-item-hide';
@connect(
  state => ({ page: state.page.data }),
  {pushState: push}
)
export default class OrderPay extends Component {
  static propTypes = {
    page: PropTypes.object,
    children: PropTypes.any
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShow: false,
      isShowDetail: false,
      isWeChatChoose: false,
      isAliPayChoose: false,
      isHbfqChoose: false,
      timeOver: 0,
      isDown: true
    };
    this.fqCheckedObject = [];
    this.showDetail = () => {
      this.setState({
        isShowDetail: !isShow
      });
      isShow = !isShow;
    };
    const payData = this.props.page;
    const cleanerEndData = payDataCleaner(payData);
    this.state = {
      orderDetail: cleanerEndData.orderDetail,
      hbfq: cleanerEndData.hbfq,
      orders: cleanerEndData.orders,
      isHbfqEmptry: cleanerEndData.isEmptry.isHbfqEmptry,
      checkedFqObject: cleanerEndData.isEmptry.isHbfqEmptry ? '' : cleanerEndData.hbfq[0]
    };

    /**
     * 选择支付平台类型
     * @ type  支付平台类型
     */
    this.choosePayType = (type) => {
      if ( type === 'alipay') {
        this.setState({
          isAliPayChoose: true,
          isHbfqChoose: false,
          isWeChatChoose: false
        });
      } else if ( type === 'weChat' ) {
        this.setState({
          isAliPayChoose: false,
          isHbfqChoose: false,
          isWeChatChoose: true
        });
      } else if ( type === 'hbfq' ) {
        this.setState({
          isAliPayChoose: false,
          isHbfqChoose: true,
          isWeChatChoose: false
        });
      }
    };

    /**
     * 选择分期
     */
    this.chooseFQType = (type) => {
      const oldHbfqs = this.state.hbfq;
      const renderFq = [];
      for (const obj of oldHbfqs) {
        if (obj.id === type) {
          obj.isChecked = true;
        } else {
          obj.isChecked = false;
        }
        renderFq.push(obj);
      }
      this.setState({
        hbfq: renderFq,
        checkedFqObject: []
      });
      for (const fqObj of renderFq) {
        if (fqObj.isChecked === true ) {
          this.fqCheckedObject = fqObj;
          break;
        }
      }
      this.setState({
        checkedFqObject: this.fqCheckedObject
      });
    };
    /**
     * 订单支付倒计时
     */
    const createOrderTime = this.state.orders.created_at;
    let creatTime = '';
    if (!createOrderTime) {
      creatTime = new Date().toString();
    } else {
      creatTime = createOrderTime;
    }
    creatTime = creatTime.replace(/-/g, '/');
    if (creatTime.indexOf('.') !== -1) {
      const index = creatTime.indexOf('.');
      creatTime = creatTime.substr(0, index);
    }
    if (creatTime.indexOf('T') !== -1) {
      creatTime = creatTime.replace(/T/, ' ');
    } else {
      creatTime = creatTime;
    }
    const orderCountDown = setInterval(() => {
      const time = countDownTime._downTime(creatTime, orderCountDown);
      this.setState({
        timeOver: time.times,
        isDown: time.downFlag
      });
    }, 1000);
  }
  componentWillMount() {
    this.setState({
      isAliPayChoose: true,
      isDown: true
    });
  }
  componentDidMount() {

  }
  componentWillUnMount() {

  }
  render() {
    require('./OrderPayMent.scss');
    return (
    < article >
	< Helmet title = "订单支付页" / >
	<div class="ment-info">
		<div class="info-tips">
			<h3 class="tips">订单已提交成功!</h3>
      { this.state.isDown ? <p class="tips-ex">请在<span class="tips-ex-time">{ this.state.timeOver }</span>内完成支付，超时订单自动取消</p>
        : <p class="tips-ex">订单已超时，已自动取消!</p>
       }
		</div>
		<div class="ment-detail-box">
			<h3 class="ment-box-title">订单详情</h3>
			<p class="text-line">
				<span class="line-ex-text">收货人：</span>
				<span class="line-ex-val">{ this.state.orders.receiver }</span>
			</p>
			<p class="text-line">
				<span class="line-ex-text">地址：</span>
				<span class="line-ex-val">
					{ this.state.orders.province} &nbsp; {this.state.orders.city} &nbsp; {this.state.orders.district}
				 </span>
			</p>
			<p class={ this.state.isShowDetail === true ? showLine : hideLine} isShow={this.state.isShowDetail}>
				<span class="line-ex-text">电话：</span>
				<span class="line-ex-val">{ this.state.orders.mobile_phone }</span>
			</p>
			<p class={ this.state.isShowDetail === true ? showLine : hideLine} isShow={this.state.isShowDetail}>
				<span class="line-ex-text">送货时间：</span>
				<span class="line-ex-val"> { this.state.orderDetail.delivery_type_text } </span>
			</p>
			<p class={ this.state.isShowDetail === true ? showLine : hideLine} isShow={this.state.isShowDetail}>
				<span class="line-ex-text">发票类型：</span>
				<span class="line-ex-val"> 普通发票 </span>
			</p>
			<p class={ this.state.isShowDetail === true ? showLine : hideLine} isShow={this.state.isShowDetail}>
				<span class="line-ex-text">发票抬头：</span>
				<span class="line-ex-val"> { this.state.orderDetail.invoice_title } </span>
			</p>
		</div>
		<p class="show-detail" onClick = { this.showDetail } >
			显示更多
			<span class="newicon icon down-icon">
			{this.state.isShowDetail === true ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
			</span>
		</p>
	</div>
	<div class="pay-platform-box">
		<h3 class="ment-box-title">选择支付平台</h3>
		<div class="platform-box">
			<p class="platform-item" onClick={this.choosePayType.bind(this, 'alipay')}>
				<img src="data:image/png;base64,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" alt="支付宝支付"/>
        { this.state.isAliPayChoose ? <span class="newicon active-icon">&#xE837;</span> : <span class="newicon">&#xE836;</span> }
			</p>
			<p class="platform-item" onClick={this.choosePayType.bind(this, 'weChat')}>
				<img src="data:image/png;base64,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" alt="微信支付"/>
				{ this.state.isWeChatChoose ? <span class="newicon active-icon">&#xE837;</span> : <span class="newicon">&#xE836;</span> }
			</p>
			<p class={ this.state.isHbfqEmptry ? hidePayType : 'platform-item' } onClick={this.choosePayType.bind(this, 'hbfq')}>
				<img src="data:image/png;base64,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" alt="微信支付"/>
				{ this.state.isHbfqChoose ? <span class="newicon active-icon">&#xE837;</span> : <span class="newicon">&#xE836;</span> }
			</p>
			<div class={ this.state.isHbfqChoose ? showBox : hideLine }>
				<p class="fq-ex">已分期金额： <span>{ this.state.checkedFqObject.total_fee }</span> 元</p>
				{
          ((this.state.hbfq).map((hbfq, idx) => (
				  	<div class={ hbfq.isChecked ? 'fq-item active-fq-item' : 'fq-item' } key= { idx }
                onClick = { this.chooseFQType.bind(this, hbfq.id) }>
						<div class="item-num">
							{hbfq.fq_num}期
						</div>
						<div class="item-info">
							<p class="item-price">
								￥<span>{ hbfq.fq_price }</span> x <span>{ hbfq.fq_num }</span>
							</p>
							<p class="item-ex"> { hbfq.fq_text } </p>
						</div>
					 </div>
          )))
				}
			</div>
		</div>
	</div>
	<div class="buy-btn-box">
		<div class="box-main">
			<span class="main-ex-text">应付金额：</span>
			<span class="main-price">￥ { this.state.isHbfqChoose ? this.state.checkedFqObject.fq_price : this.state.orders.total_fee }</span>
			<a class="btn buy-btn" href="javascript:void(0)">立即支付</a>
		</div>
	</div>
	</ article>
	);
  }
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { asyncConnect } from 'redux-async-connect';
import Helmet from 'react-helmet';

import CartCommonBox from '../../components/CartCommonBox/CartCommonBox';
import cleanCartData from './CartDataCleaner';

import * as cartActions from 'redux/modules/cart';

import serverApi from 'redux/api';

@connect(
  state => ({cart: state.page.data }),
  {...cartActions}
)
export default class ProductDetail extends Component {

  constructor(props, context) {
    super(props, context);
    this.updateForCartNum = this.updateForCartNum.bind(this);
    this.updateForCartChecked = this.updateForCartChecked.bind(this);
    this.updateForService = this.updateForService.bind(this);
    this.mounted = true;
    this.shouldUpdated = false;
    this.state = {
      cleanedData: null
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.mounted = true;
  }

  shouldComponentUpdate() {
    return this.shouldUpdated;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateRender(result) {
    if (this.mounted) {
      this.shouldUpdated = true;
      const updateData = cleanCartData(result);
      this.setState({
        cleanedData: updateData
      });
    }
  }

  updateForCartNum(id, num) {
    console.log('update for cartnum = ' + id + ', ' + num);
    const that = this;
    this.props.postCart({
      item_id: id,
      qty: num
    }, serverApi('cartQty')).then(result => {
      if (result && typeof result.error === 'object') {
        return Promise.reject(result.error);
      }
      that.updateRender(result);
    });
  }

  updateForCartChecked(id, checked) {
    const cartData = {
      item_id: [],
      checked: true
    };
    cartData.item_id = id ? id : this.state.cleanedData.idsForChecked;
    cartData.checked = checked;
    console.log('update for checked = ' + cartData.item_id + ', ' + cartData.id);
    this.props.postCart(cartData, serverApi('cartCheckbox'));
  }

  updateForService(id, serviceId, isAddOrDel) {
    const cartData = {
      item_id: id,
      id: serviceId
    };
    console.log('update for service = ' + cartData.item_id + ', ' + cartData.id);
    if (isAddOrDel) {
      this.props.postCart(cartData, serverApi('addCartService'));
    } else {
      this.props.postCart(cartData, serverApi('delCartService'));
    }
  }

  render() {
    require('./Cart.scss');
    this.state.cleanedData = this.state.cleanedData || cleanCartData(this.props.cart);
    console.log(this.state.cleanedData);

    return (
      <article ref="cart">
        <Helmet title="产品详情"/>

        <div class="product-main clearfix">
          <div class="product-image">
              <div class="product-display-img">
                  <div class="swiper-container">
                      <div class="swiper-wrapper">
                      </div>
                      <div class="pagination">
                      </div>
                  </div>
              </div>
              <div class="product-thumb-area clearfix">
                  <div class="prenext pre"><i class="iconPureBlue">g</i></div>
                  <div class="swiper-container">
                      <div class="swiper-wrapper">
                      </div>
                  </div>
                  <div class="prenext next"><i class="iconPureBlue">h</i></div>
              </div>
              <div class="product-credit J-product-credit">
                  <ul class="clearfix">
                      <li class="product-credit-item"><img src="/static/images/zheng@2x.png" alt="">官方正品</li>
                      <li class="product-credit-item"><img src="/static/images/sf@2x.png" alt="">顺丰快递</li>
                      <li class="product-credit-item"><img src="/static/images/7tui@2x.png" alt="">7天包退</li>
                      <li class="product-credit-item"><img src="/static/images/15huan@2x.png" alt="">15天包换</li>
                  </ul>
              </div>
          </div>
    <div class="product-info">
        <div class="product-title"></div>
        <div class="product-price">
            <div class="product-price-box">
                <!--{{#if sales_num }}<span class="sale-num">销售量：<i class="J-sale-num">{{ sales_num }}</i></span>{{ /if }}-->
                <span class="sale-price"></span>
                <span class="original-price"></span>
            </div>
            <span class="promotion"></span>
        </div>

        <div class="product-hb J-mobile-hb">
            <img src="/static/images/huabeiicon@2x.png" alt="">花呗分期最低价 <span class="red">¥<em class="J-hb-amount"></em> x <em
                class="J-hb-term"></em>期</span> <span class="red J-mq">（限时免手续费）</span>
        </div>

        <div class="advertise-words">{{advertise_words}}</div>

        <div class="gift-display"></div>

        {{#if isMobile}}
        <div class="dropdown dropdwon-mobile" id="dropdwon-mobile">
            <div class="express-box express-mobile-box" by-drop="productExpress">
                <span class="com-address-mobile" id="com-address">
                    <span class="mobile-text text">送至</span>
                    <span class=" mobile-text com-address-item">
                        <span class="mobile-text com-address-item com-address-item-mobile">广东 深圳市 南山区</span>
                        <span class="newicon address-icon">location_on</span>
                    </span>
                </span>
                {{#if isSpringHoliday}}
                    <span class="ex ex-mobile mobile-text ex-text-box">受快递放假影响，1月25日后的订单将于2月3日统一发货。</span>
                    <span class="mobile-text ex-mobile other-text ex-hidden">受快递放假影响，1月25日后的订单将于2月3日统一发货。</span>
                {{/else}}
                    {{#if isSelf}}
                    <span class="ex ex-mobile mobile-text ex-text-box">
                        由顺丰24小时内发货，预计<span class="ex-day ex-day-mobile" id="ex-day">后天(12月30号)</span>送达
                    </span>
                    {{/else}}
                    <span class="ex ex-mobile mobile-text ex-text-box">
                        由圆通24小时内发货，预计<span class="ex-day ex-day-mobile" id="ex-day">后天(12月30号)</span>送达
                    </span>
                    {{/if}}
                    <span class="mobile-text ex-mobile other-text ex-hidden">我们将尽快为你安排送货，极速达。</span>
                {{/if}}
            </div>
            <div class="address-box" id="productExpress"></div>
        </div>

        <div class="proStep">
            {{#each choices}}
            <div id="step-{{id}}" class="pro-choose-step">
                <div class="step-title">选择{{name}}</div>
                <ul class="step-list clearfix" data-id="{{id}}">
                    {{#each values}}
                    <li class="stepItem" data-step="{{id}}" data-id="{{vid}}" data-title="{{name}}"
                        data-value="{{vname}}">
                        {{#if color}}
                        <span class="color" style="background-color:#{{color}}"></span>
                        {{/if}}
                        {{vname}}
                    </li>
                    {{/each}}
                </ul>
            </div>
            {{/each}}
        </div>

        <div class="suites">
            <div class="suites-title">配件套餐</div>
            <ul class="suites-list clearfix">
            </ul>

        </div>

        <div class="proServiec">
            <div class="pro-service-choice">
                <div class="service-title">保障服务</div>
                <ul class="service-list clearfix">
                </ul>
            </div>
        </div>

        <div class="product-hb J-product-hb">
            <img src="/static/images/huabeiicon@2x.png" alt="">花呗分期最低价 <span class="red">¥<em class="J-hb-amount"></em> x <em
                class="J-hb-term"></em>期</span> <span class="red J-mq">（限时免手续费）</span>
            <span class="J-more-huabei red more-huabei">更多<i class="newicon more-icon">&#xE5C5;</i></span>
            <div class="J-hb-more-box more-hb-box">
                <span class="J-hbBox-close newicon hbBox-close">&#xE5CD;</span>
                <div class="title">
                    <span class="hb-price">每期金额</span>
                    <span class="hb-num">期数</span>
                    <span class="hb-sprice">手续费</span>
                </div>
                <ul class="J-hbContent-ul  content"></ul>
                <p class="foot"><i class="newicon red">&#xE001;</i>此处仅查看，请在支付订单选择分期方案</p>
            </div>
        </div>
        <div id="fixpanel" class="fix-checkout-panel">
            <div class="checkout-panel">
                <div class="checkout-title">您选择了以下产品</div>
                <div class="checkout-product">
                    <div class="checkout-product-name"></div>
                    <div class="checkout-suites J-checkout-gift"></div>
                    <div class="checkout-suites J-checkout-suites"></div>
                    <div class="checkout-suites J-checkout-service"></div>
                </div>
                <div class="checkout-price-box">
                    <!-- <div class="gift">
                        <span class="gift-content">放水淀粉</span>
                    </div> -->
                    <div class="pay-price">应付金额（不含运费）：<span class="checkout-price"></span></div>
                </div>
                <a class="product-mobile-cart" href="/cart/"><em class="newicon">shopping_cart</em><i class="cpmall_mobile_menu_cart_num J-menu-cart-num">0</i></a>
                <button class="add-to-cart-button" id='addToCartButton' onclick="adhoc.increment('addClick', 1)">加入购物车</button>
                <button class="buy-now-button J-buyNowButton" id='buyNowButton' onclick="adhoc.increment('buyClick', 1)">立即购买</button>
                <button class="sold-out-button">已售罄</button>
            </div>
        </div>
        <div class="product-credit-mobile J-product-credit">
            <ul class="clearfix">
                <li class="product-credit-item"><img src="/static/images/zheng@2x.png" alt="">官方正品</li>
                <li class="product-credit-item"><img src="/static/images/sf@2x.png" alt="">顺丰快递</li>
                <li class="product-credit-item"><img src="/static/images/7tui@2x.png" alt="">7天包退</li>
                <li class="product-credit-item last-item"><img src="/static/images/15huan@2x.png" alt="">15天包换</li>
            </ul>
        </div>
    </div>
</div>
<div class="pro-detail-box">
    <div class="pro-detail-header-box-static">

    </div>
    <div class="pro-detail-header-box J-pro-detail-header-box">
        <div class="pro-detail-header">
            <div class="pro-detail-buy-button J-pro-detail-buy-button">
                <button class="buy-now-button J-buyNowButton" onclick="adhoc.increment('buyClick', 1)">立即购买</button>
            </div>
            <a href="javascript:void(0)"><span class="active" data-tab="pro-detail-desc">产品详情</span></a>
            <a href="javascript:void(0)"><span data-tab="pro-detail-parameter">参数规格</span></a>
            <a href="javascript:void(0)"><span data-tab="pro-detail-package">包装清单</span></a>
            <a href="javascript:void(0)"><span data-tab="pro-detail-commont" class="J-commont-span">评价<span class="commont-num" id="commontNumber"></span></span></a>
            <a href="javascript:void(0)" class="det-return"><span data-tab="pro-detail-return">售后保障</span></a>
        </div>
    </div>


    <div class="pro-detail-tab pro-detail-desc">
        {{#each description}}
        {{#if .}}
        <img class="lazy" data-original="{{.}}">
        {{/if}}
        {{/each}}
    </div>

    <div class="pro-detail-tab pro-detail-parameter" style="display:none;">
        {{#each parameter}}
        <table class="parameter-table">
            <thead>
            <tr>
                <th>{{bigSpecifications}}</th>
            </tr>
            </thead>
            <tbody>
            {{#each smallSpecifications}}
            <tr>
                <td class="parameter-name">{{key}}</td>
                <td class="parameter-space"></td>
                <td>{{value}}</td>
            </tr>
            {{/each}}
            </tbody>
        </table>
        {{/each}}
    </div>

    <div class="pro-detail-tab pro-detail-package" style="display:none;">
        {{package_list}}
    </div>

    <!--用户评论-->
    <div class="pro-detail-tab pro-detail-commont" style="display: none;">
        <nav>
            <div class="layout" id="commontNavType">
                <a href="javascript:;" id="allCommont" class="active" data-type="all">全部评价</a>
                <a href="javascript:;" id="haveImg" data-type="haveImg">晒图</a>
            </div>
        </nav>
        <div class="commont-content layout">
            <ul id="commontContent"></ul>
            <div class="J-pager pager">
            </div>
        </div>
    </div>

    ${serviceReturnTab}

</div>

</div>
<!--加入购物车提示-->
<div class="fix-add-cart-tip J-add-cart-tip">
    <div class="add-cart-tip-content clearfix">
        <div class="add-cart-tip-buttons">
            <a class="btn goto-cart" href="/cart">前往购物车进行结算</a>
            <a class="btn close-tip J-close-tip" href="javascript:">关闭</a>
        </div>
        <span class="newicon">&#xE854;</span>商品已加入至购物车
    </div>
</div>

      </article>
    );
  }
}

ProductDetail.propTypes = {
};

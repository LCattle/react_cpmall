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
export default class Cart extends Component {

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

  /**
   * 更新购物车商品数量及删除购物车商品
   * @param  {[type]} id  [description]
   * @param  {[type]} num [description]
   * @return {[type]}     [description]
   */
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

  /**
   * 更新购物车勾选
   * @param  {[type]} id      [description]
   * @param  {[type]} checked [description]
   * @return {[type]}         [description]
   */
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
        <Helmet title="购物车"/>

        { this.state.cleanedData.cartlists.map((item) => {
          return (
            <CartCommonBox key={`ct${(new Date()).getTime() + item.id}`} id={item.id} announce={item.announce} promotion={item.promotion} name={item.name} image={item.image}
              checked={item.checked} currentPrice={item.currentPrice} newestPrice={item.newestPrice}
              skuId={item.skuId} url={item.url} suits={item.suits} gifts={item.gifts} services={item.services} availableServices={item.availableServices}
              totalPrice={item.totalPrice} qty={item.qty} popdata={item.popdata}
              updateForCartNum={this.updateForCartNum} updateForCartChecked={this.updateForCartChecked} updateForService={this.updateForService} />
          );
        })}

        { this.state.cleanedData.nonSelfLists.length &&
          <div class="cartbox_nonself_box">
            <h2 class="cartbox_common_nonself_headling">非自营商品</h2>
            { this.state.cleanedData.nonSelfLists.map((item) => {
              return (
                <CartCommonBox key={`ct${(new Date()).getTime() + item.id}`} id={item.id} promotion={item.promotion} name={item.name} image={item.image}
                  checked={item.checked} currentPrice={item.currentPrice} newestPrice={item.newestPrice}
                  skuId={item.skuId} url={item.url} suits={item.suits} gifts={item.gifts} services={item.services} availableServices={item.availableServices}
                  totalPrice={item.totalPrice} qty={item.qty} popdata={item.popdata}
                  updateForCartNum={this.updateForCartNum} updateForCartChecked={this.updateForCartChecked} updateForService={this.updateForService} />
              );
            })}
          </div>
        }

      </article>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  postCart: PropTypes.func.isRequired
};

import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
const goodsItemFix = 'goods_item_fix';
const liInner = 'li_inner';

@connect(
  state => ({page: state.page})
)
export default class GobalGoodsItemCard extends Component {
  static propTypes = {
    page: PropTypes.object,
    children: PropTypes.any,
    goods: PropTypes.func,
    goods: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context);
  }
  render() {
    require('./HomeGoodsCard.scss');
    return (
    	<div class="goods_box">
    	{((this.props.goods.bigItems).map((good, idx) => (
            <div class="big_li_inner" data-tag-show={ good.showAttr } data-content={ good.tag } key={ idx }>
				<a href={ good.product_url } data-id={idx} data-position={idx} data-name="" data-priority={ good.priority }>
					<img alt="" class="hot-p-img hot-p-big-img" src={ good.image } />
				</a>
			</div>
          )))}
          {((this.props.goods.smallItems).map((good, idx) => (
            <div class="li_inner" data-tag-show={ good.showAttr } data-content={ good.tag } data-fix={liInner && (idx % 2 !== 0 ? goodsItemFix : '')} key={ idx }>
				<a href={ good.product_url } data-id={idx} data-position={idx} data-name="" data-priority={ good.priority }>
					<span class="hot-icon-empty"></span>
					<img alt="" class="hot-p-img" src={ good.image } />
					<span class="name text">{ good.name }</span>
					<span class="explain text">{ good.subtitle}</span>
					<span class="price price-mobile text">￥{ good.price }</span>
				</a>
			</div>
          )))}
        </div>
);
  }
}



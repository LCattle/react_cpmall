import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import Helmet from 'react-helmet';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import GobalGoodsItemCardComponent from '../../components/HomeGoodsCard/HomeGoodsCard';
@connect(
  state => ({
    page: state.page
  })
)
export default class Home extends Component {

  static propTypes = {
    page: PropTypes.object,
    children: PropTypes.any
  };
  constructor(props, context) {
    super(props, context);
    const smallBannners = [];
    const hotPhoneData = this.props.page.data.categories[0];
    const selectedPhoneData = this.props.page.data.categories[1];
    for (const sBanner of this.props.page.data.small_banners) {
      smallBannners.push({
        id: sBanner.id,
        url: sBanner.url,
        priority: sBanner.priority,
        background_color: sBanner.background_color,
        mobile_image: sBanner.mobile_image,
        size_big: sBanner.size_big
      });
    }
    this.desData = (gd, bigItemFlag) => {
      const goodsData = {
        name: gd.name,
        link_url: gd.link_url,
        rank: gd.rank,
        items: {
          bigItems: [],
          smallItems: []
        }
      };
      for (const item of gd.items) {
        const gItem = item;
        const tag = gItem.tag[0];
        let tagText = '';
        let isShowTag = false;
        let showAttr = 'not-show-tag';
        let bigFlag = false;
        if (tag && tag.length > 0) {
          const tagItem = tag.split('_') || tag;
          if (tagItem[0] === 'mj') {
            tagText = '满减';
            showAttr = 'two-show-tag';
            isShowTag = true;
          }else if (tagItem[0] === 'zj') {
            tagText = '直降';
            showAttr = 'two-show-tag';
            isShowTag = true;
          }else if (tagItem[0] === 'mz') {
            tagText = '买赠';
            showAttr = 'two-show-tag';
            isShowTag = true;
          }else if (tagItem[0] === 'fq') {
            tagText = '分期免息';
            showAttr = 'show-tag';
            isShowTag = true;
          }else {
            tagText = '';
            isShowTag = false;
          }
        }
        if (bigItemFlag && gItem.priority === 1) {
          bigFlag = true;
        }
        const itemData = {
          image: gItem.image,
          mobile_image: gItem.mobile_image,
          name: gItem.name,
          price: gItem.price,
          priority: gItem.priority,
          product_url: gItem.product_url,
          promotion_type: gItem.promotion_type,
          sku_id: gItem.sku_id,
          subtitle: gItem.subtitle,
          tag: tagText,
          isShow: isShowTag,
          showAttr: showAttr,
          showBigItem: bigFlag
        };
        if (bigFlag) {
          goodsData.items.bigItems.push(itemData);
        } else {
          goodsData.items.smallItems.push(itemData);
        }
      }
      return goodsData || [];
    };
    const hotPhonesGoodsData = this.desData(hotPhoneData);
    const selectedPhonesGoodsData = this.desData(selectedPhoneData, true);
    this.state = {
      smallBannnersData: smallBannners,
      hotPhones: hotPhonesGoodsData,
      selectedPhones: selectedPhonesGoodsData
    };
  }

  componentWillMount() {}

  componentDidMount() {
    console.log('人不帅，还挺高，妈蛋，就是差点钱！');
  }

  componentWillUnmount() {}

  render() {
    require('./Home.scss');
    return (
      < article >
        < Helmet title = "首页" / >
        < HomeBanner / >
        < div class = "small_banner_box" > {
          ((this.state.smallBannnersData).map((sb, idx) => (
            < a class = "small_banner_item" href = {sb.url}
            key = { idx }
            data-id = {idx}
            data-position = {idx}
            data-name = ""
            data-priority = {sb.priority}
            data-image = {sb.mobile_image} >
            < img u = "image" class = "small_banner_image" src = { sb.mobile_image} />
            < /a>
          )))
        } < /div>
        < div class = "hot_phone_box" >
          < div class = "goods_box_title" >
            < span class = "title_text" >
              < span class = "newicon icon" > phone_android < /span> < span class = "title_text_item" > {this.state.hotPhones.name} < /span>
            < /span>
            < a class = "more" href = { this.state.hotPhones.link_url } >
              < span class = "title_text_item" > 全部商品 < /span>
              < span class = "newicon icon" > chevron_right < /span>
            < /a>
          < /div>
          < GobalGoodsItemCardComponent goods = { this.state.hotPhones.items } />
        < /div>
        < div class = "hot_phone_box" >
          < div class = "goods_box_title" >
            < span class = "title_text" >
              < span class = "newicon icon" > whatshot < /span> < span class = "title_text_item" > {this.state.selectedPhones.name} < /span>
            < /span>
            < a class = "more" href = { this.state.selectedPhones.link_url } >
              < span class = "title_text_item" > 全部商品 < /span>
              < span class = "newicon icon" > chevron_right < /span>
            < /a>
          < /div>
          < GobalGoodsItemCardComponent goods = { this.state.selectedPhones.items } />
        < /div>
      < /article>
    );
  }
}

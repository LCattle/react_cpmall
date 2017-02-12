import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';

@connect(
  () => ({}),
  {initialize})
export default class OrderConfirmBox extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }
  render() {
    require('./OrderConfirmBox.scss');
    return (
    <div>
      <section class="cartbox_brief ">
        <div class="cartbox_brief_main">
          <div class="cartbox_brief_content_item cartbox_brief_desc">
            <img class="cartbox_brief_img" src="http://cpmall-cdn.coolpad.com/images/e6200f05-72f9-4718-9427-7949b944ec7a.jpg" />
          </div>
          <aside class="carbox_common_for_mobile">
            <div class="cartbox_brief_title cartbox_brief_tablewrap">
              <p class="cartbox_brief_name">酷派改变者S1 音乐尊享版 标配价值999元AKG耳机</p>
            </div>
            <p class="cartbox_brief_content_item cartbox_brief_price">
              <span class="cartbox_brief_newprice">￥2499.00</span>
            </p>
            <div class="cartbox_brief_content_item cartbox_brief_addsub">
              <span class="cartbox_brief_num">5</span>
            </div>
            <p class="cartbox_brief_content_item cartbox_brief_totalprice">￥12495.00</p>
          </aside>
        </div>
        <div class="cartbox_brief_main">
          <div class="cartbox_brief_content_item cartbox_brief_desc">
            <img class="cartbox_brief_img" src="http://cpmall-cdn.coolpad.com/images/57ff77fd-e561-4210-9c91-280fe14e8c77.jpg" />
          </div>
          <aside class="carbox_common_for_mobile">
            <div class="cartbox_brief_title cartbox_brief_tablewrap">
              <p class="cartbox_brief_name">78元延保酷派改变者S1（4+64）</p>
            </div>
            <p class="cartbox_brief_content_item cartbox_brief_price">
              <span class="cartbox_brief_newprice">78.00</span>
            </p>
            <div class="cartbox_brief_content_item cartbox_brief_addsub">
              <span class="cartbox_brief_num">5</span>
            </div>
            <p class="cartbox_brief_content_item cartbox_brief_totalprice">¥ 390.00</p>
          </aside>
        </div>
        <div class="cartbox_brief_main">
          <div class="cartbox_brief_content_item cartbox_brief_desc">
            <img class="cartbox_brief_img" src="http://cpmall-cdn.coolpad.com/images/3f1c69f8-ac52-4b93-8573-23b114fd6049.jpg" />
          </div>
          <aside class="carbox_common_for_mobile">
            <div class="cartbox_brief_title cartbox_brief_tablewrap">
              <p class="cartbox_brief_name">88元屏碎保酷派改变者S1专用（4+64）</p>
            </div>
            <p class="cartbox_brief_content_item cartbox_brief_price">
              <span class="cartbox_brief_newprice">88.00</span>
            </p>
            <div class="cartbox_brief_content_item cartbox_brief_addsub">
              <span class="cartbox_brief_num">5</span>
            </div>
            <p class="cartbox_brief_content_item cartbox_brief_totalprice">¥ 440.00</p>
          </aside>
        </div>
        <hr class="cool_footer_split_line"/>
      </section>
    </div>
    );
  }
}

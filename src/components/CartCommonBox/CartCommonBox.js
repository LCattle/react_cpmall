import React from 'react';
// import LinkedStateMixin from 'react-addons-linked-state-mixin';
import Delayer from 'helpers/Delayer';

require('./CartCommonBox.scss');

const CartCommonBox = (props) => {
  const { id, promotion, name, image, checked, newestPrice, totalPrice,
    skuId, url, currentPrice, suits, gifts, services, availableServices, qty, updateForCartNum } = props;

  // mixins: [LinkedStateMixin],
  // this.mixins = LinkedStateMixin.bind(this);
  // const stateChecked = checked;

  console.log('skuId = ' + skuId);

  let keyStep = 0;
  // let cartNum = 0;

  const getKey = () => {
    ++keyStep;
    return 'ct' + (new Date()) + keyStep;
  };

  const handleCartAddNum = () => {
    Delayer.setTrueHandler(() => {
      updateForCartNum(id, 1);
    }).handing();
  };

  const handleCartSubNum = () => {
    updateForCartNum(id, -1);
  };

  const handleCartDelNum = () => {
    updateForCartNum(id, 0);
  };

  const handleCartChecked = () => {
  };

  // const handleCartAddService = () => {
  // }

  // const handleCartDelService = () => {
  // }

  const renderCheckbox = () => {
    return (
      <div class="cartbox_common_content_item cartbox_common_chkbox on_check">
        { checked ? (
            <input class="refresh_checkbox" type="checkbox" name="cartshopping" value="" checked="checked" onClick={handleCartChecked} />
          ) : (
            <input class="refresh_checkbox" type="checkbox" name="cartshopping" value="" onClick={handleCartChecked} />
          )
        }
        <label class="cartbox_common_icon_right"></label>
      </div>
    );
  };

  const renderQty = () => {
    return (
      <div class="cartbox_common_addsub_box">
        <span class="cartbox_common_btn box_item icon_reduce" onClick={handleCartSubNum}>-</span>
        <span class="cartbox_common_num box_item">{ qty }</span>
        <span class="cartbox_common_btn box_item icon_add" onClick={handleCartAddNum}>+</span>
      </div>
    );
  };

  // const renderDeleteTpl = () => {
  //   return (
  //     <p class="cartbox_common_content_item cartbox_common_close" onClick={handleCartDelNum}>
  //       <span class="j-cart-event iconGray cartbox_common_content_item cartbox_common_btn icon_close delete_cart_item_icon">I</span>
  //     </p>
  //   );
  // };

  const renderGiftSuitsTpl = (suit) => {
    return (
      <div class={suit.cs} key={getKey()}>
        <div class="cartbox_common_content_item cartbox_common_chkbox on_check no_show">
          <input class="chkbox" type="checkbox" name="cartshopping" value="" />
        </div>
        <div class="cartbox_common_content_item cartbox_common_desc">
          <img class="cartbox_common_img" src={ suit.image } />
        </div>
        <aside class="cartbox_common_for_mobile">
          <div class="cartbox_common_title cartbox_common_tablewrap">
            { suit.isService ? (
                <p class="cartbox_common_name cartbox_common_name_for_mobile"><span class="cartbox_common_aside_desc">{ suit.name }</span>
                  <a class="cartbox_common_aside_desc cartbox_common_linkcolor">了解详情</a>
                  <pop-box popdata={suit.popdata}></pop-box>
                </p>
              ) : (
                <p class="cartbox_common_name cartbox_common_name_for_mobile">{ suit.name }</p>
              )
            }
            { suit.promotion.map((prop) => {
              return (<span class="cartbox_common_label" key={getKey()}>{prop}</span>);
            })}
          </div>
          <div class="cartbox_common_content_item cartbox_common_price">
            <p class="cartbox_common_tablewrap">
              <span class="cartbox_common_newprice">{ suit.newestPrice }</span>
              { suit.currentPrice && (
                <span class="cartbox_common_oldprice cartbox_common_price_del">{ suit.currentPrice }</span>
              )}
            </p>
          </div>
          <div class="cartbox_common_content_item cartbox_common_addsub show_and_no">
            <span class="cartbox_common_btn icon_reduce no_show no_show_count"></span>
            <span class="cartbox_common_num cartbox_common_num_for_mobile show_count">{ suit.qty }</span>
          </div>
          { suit.isService && (
            <p class="cartbox_common_content_item cartbox_common_close cartbox_common_service_close">
              <span class="iconGray cartbox_common_content_item cartbox_common_btn icon_close" data-id={ suit.id } onClick={handleCartDelNum}>I</span>
            </p>
          )}
        </aside>
      </div>
    );
  };

  const renderAvailableServicesTpl = (avaService) => {
    return (
      <aside class="cartbox_common_aside cartbox_common_aside_box" key={getKey()}>
        <span class="j-cart-event iconBlue cartbox_common_aside_btn icon_add" data-id={ avaService.id }>B</span>
        <span class="cartbox_common_aside_desc">{ avaService.name }</span>
        <a class="j-cart-event j-availableservices cartbox_common_aside_desc cartbox_common_linkcolor" data-id={ avaService.id }>了解详情</a>
        <pop-box popdata={avaService.popdata}></pop-box>
      </aside>
    );
  };

  return (
    <section class="cartbox_common cartbox_common_bg" data-id={id} key={getKey()}>
      <div class="j-cart-event cartbox_common_main cartbox_common_main_line">
        { renderCheckbox() }

        <a class="cartbox_common_content_item cartbox_common_desc" href={url}>
          <img class="cartbox_common_img" src={image} />
        </a>
        <aside class="carbox_common_for_mobile">
          <a class="cartbox_common_title cartbox_common_tablewrap" href={url}>
            <p class="cartbox_common_name">{ name }</p>
            { promotion.map((prom) => {
              return (<span class="cartbox_common_label" key={getKey()}>{prom}</span>);
            })}
          </a>
          <h4 class="cartbox_common_content_item cartbox_common_price">
            <div class="cartbox_common_tablewrap">
              <p class="cartbox_common_newprice">{ newestPrice }</p>
              { currentPrice && (
                <span class="cartbox_common_oldprice cartbox_common_price_del">{ currentPrice }</span>
              )}
            </div>
          </h4>
          <div class="cartbox_common_content_item cartbox_common_addsub">{ renderQty() }</div>
          <p class="cartbox_common_content_item cartbox_common_totalprice">{ totalPrice }</p>
          {/* renderDeleteTpl() */}
        </aside>
      </div>
      { suits.map(renderGiftSuitsTpl) }
      { gifts.map(renderGiftSuitsTpl) }
      { services.map(renderGiftSuitsTpl) }
      { availableServices && availableServices.map(renderAvailableServicesTpl) }
    </section>
  );
};

CartCommonBox.propTypes = {
  id: React.PropTypes.number.isRequired,
  qty: React.PropTypes.number.isRequired,
  checked: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  newestPrice: React.PropTypes.string.isRequired,
  totalPrice: React.PropTypes.string.isRequired,
  skuId: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  currentPrice: React.PropTypes.string.isRequired,
  promotion: React.PropTypes.array.isRequired,
  suits: React.PropTypes.array.isRequired,
  gifts: React.PropTypes.array.isRequired,
  services: React.PropTypes.array.isRequired,
  availableServices: React.PropTypes.array.isRequired,
  updateForCartNum: React.PropTypes.func.isRequired,
};

export default CartCommonBox;

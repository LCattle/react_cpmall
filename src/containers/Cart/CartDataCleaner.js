export default function cleanCartData(originServerData) {
  let idx = 0;
  let jdx = 0;
  let size = 0;
  let jSize = 0;
  let tmpDeduction = null;
  const announceObj = {};
  let listOpts = {};
  if (originServerData.hasOwnProperty('deduction') || originServerData.deduction !== undefined) {
    for (idx = 0, size = originServerData.deduction.length; idx < size; ++idx) {
      tmpDeduction = originServerData.deduction[idx];
      for (jdx = 0, jSize = tmpDeduction.sku_ids.length; jdx < jSize; ++jdx) {
        announceObj[(tmpDeduction.sku_ids)[jdx]] = tmpDeduction.promotion_name;
      }
    }
  }
  const serverData = {
    cartEmpty: {},
    cartsettle: { // 结算信息
      isCheck: false,
      sumPrice: '￥' + originServerData.total,
      discount: '活动已优惠￥' + originServerData.discount,
      selectedSize: originServerData.items.length,
      totalItemSize: originServerData.items.length,
      hrefTo: '/cart/checkout'
    },
    idsForChecked: [],
    cartlists: [],    // 购物车商品列表
    nonSelfLists: [], // 非自营
    cartSensor: {
      cp_add_time: new Date(),
      order_id: '暂无',
      cp_good_id: '',
      good_class: '',
      good_name: '',
      good_color: '',
      good_type: '',
      good_version: '',
      good_suit_type: '',
      has_service: false,
      service_type: '',
      good_single_price: '',
      even_price: originServerData.total / originServerData.items.length,
      cart_size: originServerData.items.length,
      cart_total_size: originServerData.items.length,
      cart_total_price: '' + originServerData.total
    },
    infos: [{
      popdata: {
        title: '提示',
        hasImage: false,
        content: ['网络请求忙，请重新再试']
      }
    }],
    popdata: {
      title: '提示',
      hasImage: false,
      content: ['您确认删除该商品吗？'],
      btns: [{
        tip: '取消',
        jsHook: 'jCancel'
      }, {
        isColor: true,
        tip: '确认',
        jsHook: 'jConfirm'
      }]
    }
  };

  let selectedSize = 0;
  let allChecked = true;
  let cartlistItem = null;
  let tmpPrice = 0;
  serverData.cartEmpty.isCartEmpty = originServerData.items.length === 0;
  if (serverData.cartEmpty.isCartEmpty) {
    serverData.cartEmpty.btns = [];
    // if (!$('#myAccount > a').hasClass('j-login')) {
    //   serverData.cartEmpty.btns = [{
    //     isColor: true,
    //     name: '登录',
    //     url: $('#myAccount > a').eq(0).attr('href')
    //   }];
    // }
    // serverData.cartEmpty.btns = [{
    //   isColor: false,
    //   name: '前往购物',
    //   url: '/',
    // }];
  } else {
    for (idx = 0, size = originServerData.items.length; idx < size; ++idx) {
      cartlistItem = originServerData.items[idx];
      const promotions = [];
      const gifts = [];
      const services = [];
      const suits = [];
      const availableServices = [];
      let tmpArr = cartlistItem.promotion ? cartlistItem.promotion : [];
      // 处理商品标签
      for (jdx = 0, jSize = tmpArr.length; jdx < jSize; ++jdx) {
        promotions.push(tmpArr[jdx].promotion_name);
      }
      tmpArr = cartlistItem.gifts ? cartlistItem.gifts : [];
      for (jdx = 0, jSize = tmpArr.length; jdx < jSize; ++jdx) {
        // const giftPromtion = [];
        // let tmpProm = tmpArr[jdx].promotion ? tmpArr[jdx].promotion : []
        // for (let k = 0, kSize = tmpProm.length; k < kSize; ++k) {
        //   giftPromtion.push(tmpProm[k].promotion_name)
        // }
        gifts.push({
          cs: 'cartbox_common_main cartbox_common_main_item_line cartbox_common_sub_for_mobile cartbox_common_gifts',
          image: tmpArr[jdx].image !== 'null' ? tmpArr[jdx].image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYGWP4////fwAJ+wP93BEhJAAAAABJRU5ErkJggg==',
          name: tmpArr[jdx].name,
          newestPrice: ' ',
          currentPrice: '',
          qty: tmpArr[jdx].qty,
          promotion: ['赠品']
        });
      }
      // 套餐
      tmpArr = cartlistItem.suits ? cartlistItem.suits : [];
      for (jdx = 0, jSize = tmpArr.length; jdx < jSize; ++jdx) {
        suits.push({
          cs: 'cartbox_common_main cartbox_common_main_item_line cartbox_common_sub_for_mobile',
          image: tmpArr[jdx].image,
          name: tmpArr[jdx].name,
          qty: tmpArr[jdx].qty,
          newestPrice: '￥' + tmpArr[jdx].price,
          currentPrice: '',
          promotion: []       // 需调查优化
        });
      }
      // 服务
      tmpArr = cartlistItem.services ? cartlistItem.services : [];
      for (jdx = 0, jSize = tmpArr.length; jdx < jSize; ++jdx) {
        services.push({
          cs: 'cartbox_common_main cartbox_common_main_item_line cartbox_common_sub_for_mobile',
          isService: true,
          id: tmpArr[jdx].id,
          image: tmpArr[jdx].image,
          name: tmpArr[jdx].name,
          qty: tmpArr[jdx].qty,
          newestPrice: '￥' + tmpArr[jdx].price,
          currentPrice: '',
          desc: tmpArr[jdx].condition,
          popdata: {
            title: tmpArr[jdx].name,
            hasImage: true,
            image: tmpArr[jdx].image,
            price: '￥' + tmpArr[jdx].price,
            content: [tmpArr[jdx].condition],
            btns: []
          },
          promotion: []       // 需调查优化
        });
      }
      // 待添加的服务
      tmpArr = cartlistItem.available_services ? cartlistItem.available_services : [];
      for (jdx = 0, jSize = tmpArr.length; jdx < jSize; ++jdx) {
        availableServices.push({
          id: tmpArr[jdx].id,
          name: tmpArr[jdx].name,
          qty: tmpArr[jdx].qty,
          price: '￥' + tmpArr[jdx].price,
          desc: tmpArr[jdx].description,
          popdata: {
            title: tmpArr[jdx].name,
            hasImage: true,
            image: tmpArr[jdx].image,
            price: '￥' + tmpArr[jdx].price,
            content: [tmpArr[jdx].condition],
            btns: [{
              isColor: true,
              tip: '购买',
              jsHook: 'jConfirmBuy'
            }]
          },
        });
      }
      tmpArr = cartlistItem.suits ? cartlistItem.suits : [];
      tmpPrice = (cartlistItem.price ? cartlistItem.price : cartlistItem.original_price);
      if (serverData.cartSensor.max_price < tmpPrice) {
        serverData.cartSensor.max_product = cartlistItem.id;
        serverData.cartSensor.max_product_name = cartlistItem.name;
        serverData.cartSensor.max_price = tmpPrice;
        serverData.cartSensor.max_is_suit = tmpArr.length && (tmpArr.length > 0);
      }
      if (size > 1 && serverData.cartSensor.min_price > tmpPrice) {
        serverData.cartSensor.min_product = cartlistItem.id;
        serverData.cartSensor.min_product_name = cartlistItem.name;
        serverData.cartSensor.min_price = tmpPrice;
        serverData.cartSensor.min_is_suit = tmpArr.length && (tmpArr.length > 0);
      }
      // 商品列表
      listOpts = {
        hasHeader: idx === 0 ? true : false,
        announce: announceObj['' + cartlistItem.id] || '',
        checked: cartlistItem.checked,
        id: cartlistItem.id,
        skuId: cartlistItem.sku_id,
        name: cartlistItem.name,
        image: cartlistItem.image,
        newestPrice: '￥' + (cartlistItem.price ? cartlistItem.price : cartlistItem.original_price),
        currentPrice: cartlistItem.price !== cartlistItem.original_price ? cartlistItem.original_price : '',
        qty: cartlistItem.qty,
        url: cartlistItem.url,
        totalPrice: '￥' + cartlistItem.subtotal,
        saleModel: cartlistItem.sale_model === 'self',
        promotion: promotions,
        gifts: gifts,
        suits: suits,
        services: services,
        availableServices: availableServices
      };
      // 自营和非自营
      if (cartlistItem.sale_model === 'self') {
        serverData.cartlists.push(listOpts);
      } else {
        serverData.nonSelfLists.push(listOpts);
      }
      serverData.idsForChecked.push(cartlistItem.id);
      if (cartlistItem.checked) {
        ++selectedSize;
      } else {
        if (allChecked) {
          allChecked = false;
        }
      }
    }
  }
  serverData.cartEmpty.isNonSelfEmpty = (!serverData.nonSelfLists || serverData.nonSelfLists.length <= 0) ? true : false;
  serverData.cartEmpty.cartEmptyClass = (serverData.cartlists.length <= 0 && serverData.nonSelfLists.length <= 0) ? 'cart_empty_box_bg' : '';
  serverData.cartsettle.isCheck = allChecked;
  serverData.cartsettle.selectedSize = selectedSize;
  return serverData;
}

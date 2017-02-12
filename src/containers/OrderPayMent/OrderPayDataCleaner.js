export default function OrderPayDataCleaner(PayData) {
  if (!PayData) {
    console.log('获取订单数据失败！');
    return '';
  }
  const servicePayData = {
    isEmptry: {},
    orderDetail: {},
    hbfq: [],
    orders: {
      address: PayData.address,
      city: PayData.city,
      created_at: PayData.created_at,
      district: PayData.district,
      out_trade_no: PayData.out_trade_no,
      province: PayData.province,
      receiver: PayData.receiver,
      subject: PayData.subject,
      total_fee: PayData.total_fee,
      mobile_phone: PayData.mobile_phone
    }
  };

  const orderDetailData = PayData.orders;
  const fqData = PayData.hbfq_plans || [];
  /**
   * 订单详情数据解构
   */
  let orderItem = {};
  for (const item of orderDetailData) {
    const deliveryType = item.shipping_time;
    let typeText = '';
    if ( deliveryType === 1 ) {
      typeText = '工作日送货(周一到周五)';
    }else if ( deliveryType === 2 ) {
      typeText = '节假日送货(双休日及法定假日)';
    }else if ( deliveryType === 3 ) {
      typeText = '不限(周一到周日)';
    }
    orderItem = {
      address: item.address,
      coupon_detail: item.coupon_detail,
      coupon_discount: item.coupon_discount,
      freight_fee: item.freight_fee,
      full_address: item.full_address,
      id: item.id,
      invoice_title: item.invoice_title,
      order_no: item.order_no,
      payment: item.payment,
      payment_method: item.payment_method,
      promotion_detail: item.promotion_detail,
      promotion_discount: item.promotion_discount,
      shipping_method: item.shipping_method,
      shipping_time: item.shipping_time,
      delivery_type_text: typeText,
      status: item.status,
      supplier_code: item.supplier_code,
      total_to_pay: item.total_to_pay,
      user: item.user
    };
  }
  servicePayData.orderDetail = orderItem;
  /**
   * 订单分期数据数据解构
   */
  if (fqData && fqData.length > 0) {
    let fqItem = {};
    const hbfqs = [];
    for (const item of fqData) {
      let fqItemText = '共计约' + item.total_fee + '元';
      if ( item.commission_rate === '0' || item.commission_rate === '' ) {
        fqItemText += '限时免手续费';
      } else {
        fqItemText += '含' + ( item.commission_rate * 100 ) + '%手续费';
      }
      fqItem = {
        commission_rate: item.commission_rate,
        fq_commission: item.fq_commission,
        fq_num: item.fq_num,
        fq_price: item.fq_price,
        total_fee: item.total_fee,
        fq_text: fqItemText,
        id: 'fq_' + item.fq_num,
        isChecked: false
      };
      hbfqs.push(fqItem);
    }
    hbfqs[0].isChecked = true;
    servicePayData.hbfq = hbfqs;
  } else {
    servicePayData.isEmptry = {
      isHbfqEmptry: true
    };
  }
  return servicePayData || null;
}

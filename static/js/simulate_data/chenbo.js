module.exports = {
    'order_count': {
            'for_paid':0,//代付款
            'for_shipping':0,//代发货
            'for_comment':0,//待评论
            'for_receipt':0
        },
   
   
   'useraddr': [
            {
                "mobile_phone": "15995939903",
                "receiver": "测试用户1",
                "id": 1,
                "province": {
                    260: "广东省",
                },
                "city": {
                    280: "深圳市",
                },
                "district": {
                    3009: "南山区",
                },
                "address": "某某某某街道，超级无敌长的名字的街道，超级无敌长的名字的大楼，超级无敌长的名字的门派，超级霸气的地址，还能再长一点吗",
                "is_default": false,
                "tel_phone": "",
                "is_deleted": false,
                "user": 1,
                "area_level": 2,
                "email": "",
                "postal_code": "",
                "full_address": false
            },
            {
                "mobile_phone": "15995939903",
                "receiver": "张大壮",
                "id": 1,
                "province": {
                    260: "广东省",
                },
                "city": {
                    280: "深圳市",
                },
                "district": {
                    3009: "南山区",
                },
                "address": "娥儿雪柳黄金缕,笑语盈盈暗香去,众里寻他千百度,蓦然回首,那人却在,灯火阑珊处,衣带渐宽终不悔，为伊消的人憔悴",
                "is_default": false,
                "tel_phone": "",
                "is_deleted": false,
                "user": 1,
                "area_level": 2,
                "email": "",
                "postal_code": "",
                "full_address": false
            },
            {
                "mobile_phone": "15995939903",
                "receiver": "李大壮",
                "id": 1,
                "province": {
                    260: "广东省",
                },
                "city": {
                    280: "深圳市",
                },
                "district": {
                    3009: "南山区",
                },
                "address": "酷派信息港",
                "is_default": false,
                "tel_phone": "",
                "is_deleted": false,
                "user": 1,
                "area_level": 2,
                "email": "",
                "postal_code": "",
                "full_address": false
            }, {
                "mobile_phone": "15995939903",
                "receiver": "耿直的大波波",
                "id": 1,
                "province": {
                    260: "广东省",
                },
                "city": {
                    280: "深圳市",
                },
                "district": {
                    3009: "南山区",
                },
                "address": "酷派信息港",
                "is_default": true,
                "tel_phone": "",
                "is_deleted": false,
                "user": 1,
                "area_level": 2,
                "email": "",
                "postal_code": "",
                "full_address": false
            }, {
                "mobile_phone": "15995939903",
                "receiver": "球都麻袋",
                "id": 1,
                "province": {
                    260: "广东省",
                },
                "city": {
                    280: "深圳市",
                },
                "district": {
                    3009: "南山区",
                },
                "address": "酷派信息港",
                "is_default": false,
                "tel_phone": "",
                "is_deleted": false,
                "user": 1,
                "area_level": 2,
                "email": "",
                "postal_code": "",
                "full_address": false
            }, {
                "mobile_phone": "15995939903",
                "receiver": "扛着枪的猎人",
                "id": 1,
                "province": {
                    260: "广东省",
                },
                "city": {
                    280: "深圳市",
                },
                "district": {
                    3009: "南山区",
                },
                "address": "酷派信息港",
                "is_default": false,
                "tel_phone": "",
                "is_deleted": false,
                "user": 1,
                "area_level": 2,
                "email": "",
                "postal_code": "",
                "full_address": false
            }],
    
    
    
    
    'orderList':{
        "user":{
            "id":001,
            "username":"SuperMan"
        },
        "orders":[
        
        
        //待付款
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':1,
            "created_time": "2016-12-01T15:56:43",
            'order_total':11,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },{
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':2,
            "created_time": "2016-12-01T15:56:43",
            'order_total':5201314,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[]
                }, //套装
                'service':[] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },
        //待付款
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':1,
            "created_time": "2016-12-01T15:56:43",
            'order_total':54,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },{
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':2,
            "created_time": "2016-12-01T15:56:43",
            'order_total':22,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[]
                }, //套装
                'service':[] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },
        //待付款
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':1,
            "created_time": "2016-12-01T15:56:43",
            'order_total':33,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },{
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':2,
            "created_time": "2016-12-01T15:56:43",
            'order_total':44,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[]
                }, //套装
                'service':[] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },//待付款
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':1,
            "created_time": "2016-12-01T15:56:43",
            'order_total':55,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },{
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':2,
            "created_time": "2016-12-01T15:56:43",
            'order_total':66,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[]
                }, //套装
                'service':[] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },//待付款
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':1,
            "created_time": "2016-12-01T15:56:43",
            'order_total':77,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },{
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':2,
            "created_time": "2016-12-01T15:56:43",
            'order_total':88,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[]
                }, //套装
                'service':[] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },//待付款
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':1,
            "created_time": "2016-12-01T15:56:43",
            'order_total':99,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },{
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':2,
            "created_time": "2016-12-01T15:56:43",
            'order_total':100,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[]
                }, //套装
                'service':[] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },//待付款
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':1,
            "created_time": "2016-12-01T15:56:43",
            'order_total':111,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },{
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':2,
            "created_time": "2016-12-01T15:56:43",
            'order_total':222,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_paid',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[]
                }, //套装
                'service':[] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },
        
        //待发货
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':3,
            "created_time": "2016-12-01T15:56:43",
            'order_total':333,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_shipping',//订单状态  //订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },
        
        
        
        //待收货订单
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':4,
            "created_time": "2016-12-01T15:56:43",
            'order_total':444,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_receipt',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品2",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    },{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad X22运动手环",
                        "qty": 1,
                        "price": "129.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                },{
                    "product_variant_id":1,
                    "product_name": "超级保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            },{
                'id':13,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':3,
                'order_id':11,
                'discount':100,
                'product_price':2999,
                'product_sku': 'CP10002673',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },
        
        
        //待评价订单
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':5,
            "created_time": "2016-12-01T15:56:43",
            'order_total':555,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_comment',//订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment 
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },
        
        
        //已完成
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':6,
            "created_time": "2016-12-01T15:56:43",
            'order_total':666,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_completed',//订单状态  //订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment  已完成：for_completed    
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        },
        
        
        
        //已取消订单
        {
            "invoice_title": '个人',//发票抬头
            'status_display': '已提交',
            "shipping_time": "工作日",//快递时间
            'id':7,
            "created_time": "2016-12-01T15:56:43",
            'order_total':5201314,//订单总价
            'user':1,
            'promotion_detail':'[]',//促销信息
            'order_number':'3120099001',//订单号
            'status':60,//订单状态  0对应新建订单（未支付的）10==>已提交    100==>已完成       60==》已签收       50==》已发货       31==》取消订单
            'page_status':'for_canceled',//订单状态  //订单状态  、代付款: for_paid  待发货: for_shipping  待收货: for_receipt  待评论: for_comment  已完成：for_completed  已取消：for_canceled  
            'coupon_detail':'[]',//优惠券信息
            'address':11,//收货地址
            'promotion_discount':'0.00',//促销折扣
            'items':[{
                'id':11,//产品id
                'url':"http://www.coolpad.com",
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':2,
                'discount':100,
                'product_sku': 'CP1012671',
                'order_id':11,//对应父订单id
                'product_price':200,//产品价格
                'product_variant_id':1,//产品SKU
                'product_name':'酷派手机全魔王(99TROM+9999T内存)',//产品名字
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'gifts': [{
                    "product_variant_id":1,
                    "product_name": "我是超级好的赠品1",
                    "product_price": 9999999,
                    "product_sku":"CP112321",
                    "discount":1,
                    "image": "https://img14.360buyimg.com/n7/jfs/t2542/199/1230838231/145054/d17e9a8c/569860daN46fcf2a9.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }], //赠品
                'suites': {
                    'id':1,
                    'name':'套装1',
                    'price':1000,
                    'items':[{
                        "url":"http://www.coolpad.com",
                        "sku_id":111,
                        "image": "http://res.coolpad.com/img/5113/12404/12404_540.jpg",
                        "name": "Coolpad C86耳机",
                        "qty": 1,
                        "price": "79.99"
                    }]
                }, //套装
                'service':[{
                    "product_variant_id":1,
                    "product_name": "无敌的保险",
                    "product_price": 9999,
                    "product_sku":"CP112321",
                    "discount":111,
                    "image": "http://res.coolpad.com/img/5003/12490/12490_540.jpg",
                    "qty": 1,
                    "url":"http://www.coolpad.com",
                    "order_id":1
                }] //保险服务
            },{
                'id':12,
                'url':'http://www.coolpad.com',
                'image':'https://img12.360buyimg.com/n7/jfs/t3706/50/41231686/78214/382e71cf/57fcc0efN05814832.jpg',
                'qty':1,
                'order_id':11,
                'discount':100,
                'product_price':150,
                'product_sku': 'CP10002672',
                'product_variant':1,
                'package_list':'耳机*1,充电器*1,数据线*1',//包装清单
                'product_name':'酷派土豪大金项链(5000g,附赠鹅蛋那么大的钻石)假如我的名字很长很长很长很长很长很长很长很长很长很长很长很长很长',
                'service':[],
                'gifts':[],
                'suites':{}
            }]
        }
        
        
        
        
        
        
        
        
    ]}
}
/**
 * Created by wangxiping on 2016/12/19.
 */
module.exports = {
    //个人中心
    "usercenter":{
        "user": {
            "username": "ww123",
            "id": 22946852
        },
    },
    //订单详情
    "order_detail":{
        "user": {
            "username": "ww123",
            "id": 22946852
        },
        "order": {
            "shipping_method": "快递",
            "invoice_title": "个人",
            "status_display": "已提交",
            "order_status": {
                "timelines": [
                    {
                        "name": "下单",
                        "time": "2016-12-16T14:50:55"
                    },
                    {
                        "name": "付款",
                        "time": "2016-12-16T14:50:55"
                    },
                    {
                        "name": "发货",
                        "time": "2016-12-16T14:50:55"
                    },
                    {
                        "name": "拒收",
                        "time": "2016-12-16T14:50:55"
                    }
                ]
            },
            "discount_total": "0.00",
            "order_number": "C1161216534540890",
            "id": 50,
            "consignee": {
                "mobile_phone": "18925231080",
                "full_address": "广东省深圳市南山区酷派信息港",
                "receiver": "曹井升"
            },
            "created_time": "2016-12-27T17:00:55",
            "status": 40,//订单状态判断 10已提交 31用户取消 32系统取消 33后台取消 50已发货 60已签收 70拒收 90已付款 100已完成
            "payment_type": "在线支付",//在线支付  货到付款
            "is_paid":true,
            "items": [
                {
                    "services": [
                        {
                            "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",//图片地址
                            "url": "/product/product_detail/19/",//跳转商品详情地址
                            "product_sku": "CP10001933",
                            "services": [],
                            "suites": [],
                            "product_variant_id": 19,
                            "qty": 1,//购买的数量
                            "package_list": "",
                            "product_name": "我是服务1",//产品名称
                            "order_id": 50,//订单id
                            "product_price": "299.00",
                            "product_subtotal":"299.00"
                        },
                        {
                            "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",//图片地址
                            "url": "/product/product_detail/19/",//跳转商品详情地址
                            "product_sku": "CP10001933",
                            "services": [],
                            "suites": [],
                            "product_variant_id": 19,
                            "qty": 1,//购买的数量
                            "package_list": "",
                            "product_name": "我是服务2",//产品名称
                            "order_id": 50,//订单id
                            "product_price": "200.00",
                            "product_subtotal":"200.00"
                        }
                    ],
                    "product_variant_id": 2,
                    "product_sku": "CP10002671",
                    "product_name": "cool1 标准",
                    "product_price": "0.01",
                    "order_id": 50,
                    "suites": [],
                    "gifts": [
                        {
                            "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",//图片地址
                            "url": "/product/product_detail/19/",//跳转商品详情地址
                            "product_sku": "CP10001933",
                            "services": [],
                            "suites": [],
                            "product_variant_id": 19,
                            "qty": 1,//购买的数量
                            "package_list": "",
                            "product_name": "我是赠品1",//产品名称
                            "order_id": 50,//订单id
                        },
                        {
                            "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",//图片地址
                            "url": "/product/product_detail/19/",//跳转商品详情地址
                            "product_sku": "CP10001933",
                            "services": [],
                            "suites": [],
                            "product_variant_id": 19,
                            "qty": 1,//购买的数量
                            "package_list": "",
                            "product_name": "我是赠品2",//产品名称
                            "order_id": 50,//订单id
                        }
                    ],
                    "discount": "0.00",
                    "qty": 1,
                    "url": "/product/product_detail/2/",
                    "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",
                    "package_list": "",
                    "product_subtotal":"44444.00"//总价（商品件数*商品单价）product_subtotal sub_total
                },
                {
                    "services": [
                        {
                            "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",//图片地址
                            "url": "/product/product_detail/19/",//跳转商品详情地址
                            "product_sku": "CP10001933",
                            "services": [],
                            "suites": [],
                            "product_variant_id": 19,
                            "qty": 1,//购买的数量
                            "package_list": "",
                            "product_name": "我是服务",//产品名称
                            "order_id": 50,//订单id
                            "product_price": "299.00",
                            "product_subtotal":"299.00"
                        }
                    ],
                    "product_variant_id": 2,
                    "product_sku": "CP10002671",
                    "product_name": "cool1 标准",
                    "product_price": "0.01",
                    "order_id": 50,
                    "suites": [],
                    "gifts": [
                        {
                            "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",//图片地址
                            "url": "/product/product_detail/19/",//跳转商品详情地址
                            "product_sku": "CP10001933",
                            "services": [],
                            "suites": [],
                            "product_variant_id": 19,
                            "qty": 1,//购买的数量
                            "package_list": "",
                            "product_name": "我是赠品",//产品名称
                            "order_id": 50,//订单id
                        }
                    ],
                    "discount": "0.00",
                    "qty": 1,
                    "url": "/product/product_detail/2/",
                    "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",
                    "package_list": "",
                    "product_subtotal":"1599.00"//总价（商品件数*商品单价）product_subtotal sub_total
                }
            ],
            "freight_fee":"0.00",//运费  freight_fee express_pay
            "product_subtotal":"2333.00",//订单在没有减除优惠情况下的价格 product_subtotal products_total
            "order_total": "10.02",
            "coupon_discount": "1.00",
            "promotion_discount": "2.00",
            "shipping_time": "工作日"
        }
    },



    //领取优惠卷
    'receiveCoupon':[
        {
            'id': 1,
            'deleted': false,
            'desc': '123123123123',
            'end': '2016-12-28T21:58:18Z',
            'kind': 2,//
            'limit': 1000,
            'name': 'dsafsda',
            'params': {
                'disccount': 500,//金额，返回'分'为单位
                'condition': 0
            },
            'salt': '419378be-8743-45f7-a016-b2b10f21484d',
            'secret': '',
            'send_type': 1,
            'sent': 23333,
            'start': '2016-11-03T21:58:16Z',
            'exists': false
        },{
            'id': 1,
            'deleted': false,
            'desc': 'dfasdfasfsda',
            'end': '2016-12-28T21:58:18Z',
            'kind': 2,//
            'limit': 1000,
            'name': 'dsafsda',
            'params': {
                'disccount': 500,//金额，返回'分'为单位
                'condition': 0
            },
            'salt': '419378be-8743-45f7-a016-b2b10f21484d',
            'secret': '',
            'send_type': 1,
            'sent': 1242,
            'start': '2016-11-03T21:58:16Z',
            'exists': true
        },{
            'id': 2,
            'deleted': false,
            'desc': 'dfasdfasfsda',
            'end': '2016-11-23T21:58:18Z',
            'kind': 2,
            'limit': 1000,
            'name': 'dsafsda',
            'params': {
                'disccount': 500,//金额，返回'分'为单位
                'condition': 0
            },
            'salt': '419378be-8743-45f7-a016-b2b10f21484d',
            'secret': '',
            'send_type': 1,
            'sent': 222,
            'start': '2016-11-03T21:58:16Z'
        },{
            'id': 2,
            'deleted': false,
            'desc': 'dfasdfasfsda',
            'end': '2016-11-23T21:58:18Z',
            'kind': 1,
            'limit': 1000,
            'name': 'dsafsda',
            'params': {
                'disccount': 500,//金额，返回'分'为单位
                'condition': 0
            },
            'salt': '419378be-8743-45f7-a016-b2b10f21484d',
            'secret': '',
            'send_type': 1,
            'sent': 1,
            'start': '2016-11-03T21:58:16Z'
        },{
            'id': 2,
            'deleted': false,
            'desc': 'dfasdfasfsda',
            'end': '2016-11-23T21:58:18Z',
            'kind': 2,
            'limit': 1000,
            'name': 'dsafsda',
            'params': {
                'disccount': 500,//金额，返回'分'为单位
                'condition': 0
            },
            'salt': '419378be-8743-45f7-a016-b2b10f21484d',
            'secret': '',
            'send_type': 1,
            'sent': 1000,
            'start': '2016-11-03T21:58:16Z',
            'exists': true
        },
    ],





    //订单详情
    "order_detail999999999999": {
        "order": {
            "consignee": {//收货人，收货地址，收货人电话
                "receiver": "曹井升",
                "full_address": "广东省深圳市南山区酷派信息港",
                "mobile_phone": "18925231080"
            },
            "created_time": "2016-12-13T20:35:22",//订单创建时间
            "status_display": "未付款",
            "discount_total": "40.00",//优惠折扣额度
            "invoice_title": "个人",    //发票抬头
            "coupon_discount": "0.00",//优惠卷优惠额度
            "payment_type": "在线支付",//支付方式2种("货到付款","在线支付")
            "express_pay":"0.00",//运费
            "items": [//购买的产品
                {
                    "gifts": [//产品赠品
                        {
                            "image": "http://cpmall-cdn.coolpad.com/images/8e041bfa-5249-417e-8230-3d6df8c800ff.png",//图片地址
                            "url": "/product/product_detail/19/",//跳转商品详情地址
                            "product_sku": "CP10001933",
                            "services": [],
                            "suites": [],
                            "product_variant_id": 19,
                            "qty": 1,//购买的数量
                            "package_list": "",
                            "name": "我是赠品",//产品名称
                            "order_id": 49,//订单id
                        }
                    ],
                    "image": "http://cpmall-cdn.coolpad.com/images/995663cf-2133-4ca8-a7a8-b43f637ecf9c.jpg",//图片地址
                    "product_price": "1599.00",//产品价格
                    "url": "/product/product_detail/19/",
                    "product_sku": "CP10001933",
                    "services": [],
                    "discount": "40.00",//折扣额度
                    "suites": [],
                    "product_variant_id": 19,
                    "qty": 2,//购买的数量
                    "package_list": "",
                    "name": "锋尚MAX 全网通版尊爵金",//产品名称
                    "order_id": 49,//订单id
                    "sub_total":"3298.00"//总价（商品件数*商品单价）
                },
                {
                    "gifts": [],
                    "image": "http://cpmall-cdn.coolpad.com/images/995663cf-2133-4ca8-a7a8-b43f637ecf9c.jpg",//图片地址
                    "product_price": "1599.00",
                    "url": "/product/product_detail/19/",
                    "product_sku": "CP10001933",
                    "services": [],
                    "discount": "40.00",
                    "suites": [],
                    "product_variant_id": 19,
                    "qty": 1,
                    "package_list": "",
                    "name": "锋尚MAX 全网通版尊爵金",
                    "order_id": 49,
                    "sub_total":"1599.00"//总价（商品件数*商品单价）
                }
            ],
            // "history": [
            //     {
            //         "created_at": "2016-12-13T20:35:22",
            //         "status_display": "订单提交"
            //     }
            // ],
            "order_number": "C1161213741210450",
            "shipping_time": "工作日（周一至周五）",
            "promotion_discount": "40.00",
            "id": 49,
            "shipping_method": "快递",
            "status": 0,
            "products_total":"3198.00",//订单在没有减除优惠情况下的价格
            "order_total": "3158.00"//订单减除优惠后需要支付总额
        },
        "user": {
            "id": 22946852,//用户id
            "username": "ww"//用户名
        },
        "order_status":{
            'timelines': [//已存在的状态（时间线）
                {
                    'time': "2016-12-13T20:35:22",//时间
                    'name': '下单'
                },
                {
                    'time': "2016-12-13T20:35:22",//时间
                    'name': '发货'
                },
                {
                    'time': "2016-12-13T20:35:22",//时间
                    'name': '拒收'
                }
            ],
            'status': {
                'type': 5, // 1:下单，2：拒收，3：丢包；4.已取消，5.已签收，6.待发货，7.待签收，8.未付款
                //'leave_time': 647609, // 剩余时间
                //-----------在线支付----------货到付款-------------
                //1下单----------N----------------1Y---------------
                //2拒收----------4Y---------------3Y---------------
                //3丢包（暂无）---Y----------------Y----------------
                //4已取消--------2Y---------------2Y-------->分栏数2
                //5已签收--------4Y---------------3Y---------------
                //6待发货--------2Y---------------1Y---------------
                //7待签收--------3Y---------------2Y---------------
                //8未付款--------1Y---------------N----------------
                //分栏数-------->4--------------->3----------------


                //配送信息异步请求，防止页面挂了
                // 'shipping': { // 不为空的状态: 丢包，已签收，待签收
                //     'express': '我是xxx快递公司',//快递公司名称
                //     'shipping_no': '123123123123123',//快递单号
                //     'phone': '400-111-111',//快递公司电话
                //     'receipt': [{//配送详情
                //         'time': "2016-12-14T10:35:22",
                //         'address': '您的订单在[上海浦东分拨中心]发货完成，准备送往[浦东新区]'
                //     }, {
                //         'time': "2016-12-15T10:35:22",
                //         'address': '您的订单在[蓝村路]站分拣完成，准备出发'
                //     }, {
                //         'time': "2016-12-16T10:35:22",
                //         'address': '上海市浦东新区东方路蓝村路东方纯一大厦15楼1502室,上海市浦东新区东方路蓝村路东方纯一大厦15楼1502室,上海市浦东新区东方路蓝村路东方纯一大厦15楼1502室'
                //     }, {
                //         'time': "2016-12-16T10:35:22",
                //         'address': '上海市浦东新区东方路蓝村路东方纯一大厦15楼1502室'
                //     }, {
                //         'time': "2016-12-16T10:35:22",
                //         'address': '上海市浦东新区东方路蓝村路东方纯一大厦15楼1502室'
                //     }]
                // }
            }
        }
    }
}
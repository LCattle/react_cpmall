module.exports = {
    'center': {
        'user': {
            'id': 123,
            'username': 'yl26333',
            'mobile': '135****575',
            'email': 'linguohui@yulong.com',
            'pwd': '**********'
        },
        'addresses': [
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
            }
        ],
        'coupons': {
            //"couponTabs": {
            //未使用
            "not_used": [
                {
                'id': 2,
                'deleted': false,
                'desc': 'dfasdfasfsda',
                'end': '2016-11-23T21:58:18Z',
                'kind': 2,
                'limit': 1000,
                'name': 'dsafsda',
                'params': {
                    'discount': '500.00',//金额，返回'分'为单位
                    'condition': '0'
                },
                'salt': '419378be-8743-45f7-a016-b2b10f21484d',
                'secret': '',
                'send_type': 1,
                'sent': 1,
                'start': '2016-11-03T21:58:16Z'
            }, {
                'id': 2,
                'deleted': false,
                'desc': 'dfasdfasfsda',
                'end': '2016-11-23T21:58:18Z',
                'kind': 2,
                'limit': 1000,
                'name': 'dsafsda',
                'params': {
                    'discount': '500.00',//金额，返回'分'为单位
                    'condition': 0
                },
                'salt': '419378be-8743-45f7-a016-b2b10f21484d',
                'secret': '',
                'send_type': 1,
                'sent': 1,
                'start': '2016-11-03T21:58:16Z'

            }, {
                'id': 2,
                'deleted': false,
                'desc': 'dfasdfasfsda',
                'end': '2016-11-23T21:58:18Z',
                'kind': 2,
                'limit': 1000,
                'name': 'dsafsda',
                'params': {
                    'discount': '500.00',//金额，返回'分'为单位
                    'condition': 0
                },
                'salt': '419378be-8743-45f7-a016-b2b10f21484d',
                'secret': '',
                'send_type': 1,
                'sent': 1,
                'start': '2016-11-03T21:58:16Z'
            }],
            //已使用
            "used": [
                {
                'id': 2,
                'deleted': false,
                'desc': 'dfasdfasfsda',
                'end': '2016-11-23T21:58:18Z',
                'kind': 2,
                'limit': 1000,
                'name': 'dsafsda',
                'params': {
                    'discount': '500.00',//金额，返回'分'为单位
                    'condition': 0
                },
                'salt': '419378be-8743-45f7-a016-b2b10f21484d',
                'secret': '',
                'send_type': 1,
                'sent': 1,
                'start': '2016-11-03T21:58:16Z'
            }],
            //已过期
            "out_dated": [
                {
                'id': 2,
                'deleted': false,
                'desc': 'dfasdfasfsda',
                'end': '2016-11-23T21:58:18Z',
                'kind': 2,
                'limit': 1000,
                'name': 'dsafsda',
                'params': {
                    'discount': '500.00',//金额，返回'分'为单位
                    'condition': 0
                },
                'salt': '419378be-8743-45f7-a016-b2b10f21484d',
                'secret': '',
                'send_type': 1,
                'sent': 1,
                'start': '2016-11-03T21:58:16Z'
            }]
        }
        //}
    },
    'payMent': {
        "out_trade_no": '20161125083030123456',
        "subject": 'Cool1手机等商品',
        "total_fee": 1099,
        "minutes_left": 120,
        "receiver": '习近平',
        "mobile_phone": '15995939903',
        "province": '上海市',
        "city": '上海市',
        "district": '浦东新区',
        "address": '峨山路505号',
        "hbfq_plans": [{
        "fq_num": 6,
        "fq_price": 209.00,
        "commission_rate": "4.50%",
        "fq_commission": 9.00,
        "total_fee": 1254.00
        }],
        "orders": [{
            'id': 12345,
            'order_no': '5684391836789',
            'created_at': '2016-11-24 12:12:12',
            'status': 10,
            'payment_method': '在线支付',

        }

        ]
    },
    'afterSale':[
        {
            'afterSaleOrderNo': 123456789456,
            'afterSaleDate': '2016-12-04',
            'afterSaleImg': 'http://coolpad-cdn.b0.upaiyun.com/images/cool.jpg',
            'afterSaleGoodsName': 'cool dual 标准版尊贵金（黑色，3G + 16G）',
            'afterSaleGoodsPrice': '1991.00',
            'afterSaleStatus': '待检测',
            'userId': '123456',
            'afterSaleNum': 2
        },{
            'afterSaleOrderNo': 123456789456,
            'afterSaleDate': '2016-12-04',
            'afterSaleImg': 'http://coolpad-cdn.b0.upaiyun.com/images/cool.jpg',
            'afterSaleGoodsName': 'cool dual 标准版尊贵金（黑色，3G + 16G）',
            'afterSaleGoodsPrice': '1991.00',
            'afterSaleStatus': '待检测',
            'userId': '123456',
            'afterSaleNum': 2
        }
    ],
    'receiveCoupon':[
        {
            'id': 1,
            'deleted': false,
            'desc': 'dfasdfasfsda',
            'end': '2016-12-08T21:58:18Z',
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
            'sent': 10000,
            'start': '2016-11-03T21:58:16Z',
            'exists': false
        },{
            'id': 1,
            'deleted': false,
            'desc': 'dfasdfasfsda',
            'end': '2016-12-08T21:58:18Z',
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
            'sent': 10000,
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
            'sent': 1,
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
    ]
}
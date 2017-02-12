const pay = {
	"city": "深圳市",
	"hbfq_plans": [
	{
		"fq_commission": 19.15,
		"total_fee": 2556.47,
		"fq_num": 3,
		"commission_rate": "0.023",
		"fq_price": 852.15
	}, {
		"fq_commission": 18.74,
		"total_fee": 2611.45,
		"fq_num": 6,
		"commission_rate": "0.045",
		"fq_price": 435.24
	}, {
		"fq_commission": 16.66,
		"total_fee": 2698.92,
		"fq_num": 12,
		"commission_rate": "0.08",
		"fq_price": 224.91
	}],
	"mobile_phone": "13545785452",
	"out_trade_no": "YLC1702075862003541617015752",
	"orders": [{
		"full_address": "",
		"promotion_detail": {
			"items":[
			{ 
				"amortized_discount":"0.00", 
				"price":"2499.00", 
				"gifts":[], 
				"sku_id":"CP1000e2pJz5", 
				"promotion":[], 
				"qty":1,
				"checked":true,
				"original_price":
				"2499.00" 
			} 
				], 
				"deduction":[]
		},
		"coupon_detail": "{}",
		"user": 22942787,
		"shipping_method": 1,
		"invoice_title": "个人",
		"total_to_pay": "2499.00",
		"status": 10,
		"id": 71565656,
		"freight_fee": "0.00",
		"address": 7975230,
		"payment": null,
		"payment_method": 1,
		"order_no": "C170207586200354",
		"shipping_time": 1,
		"coupon_discount": "0.00",
		"promotion_discount": "0.00",
		"supplier_code": "PS14112103"
	}],
	"province": "广东省",
	"address": "çé¾ä¸ºä¸ä½å",
	"subject": "酷派改变者S1 音乐尊享版 标配价值999元AKG耳机",
	"receiver": "æXX",
	"total_fee": "2499.00",
	"created_at": "2017-02-12T11:10:00.856",
	"district": "南山区"
}

export default function getPayMentData(req) {
  return new Promise((resolve, reject) => {
    resolve(pay);
  });
}
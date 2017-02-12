const cart = {
  "deduction": [],
  "product_subtotal": "8153.00",
  "items": [{
      "name": "cool1 dual \u6807\u51c6\u72483+32",
      "image": "http://cpmall-cdn.coolpad.com/images/ba33f709-eb64-42d5-a4ff-fe9bf4d9e5da.jpg",
      "amortized_discount": "0.00",
      "sale_model": "self",
      "services": [{
        "name": "\u5ef6\u4fddcool1 dual",
        "image": "http://coolpad-cdn.b0.upaiyun.com/images/f8ad9209-9cbd-4c32-b93c-2ffaee38c1ad.jpg",
        "qty": [1],
        "id": 41,
        "subtotal": "299.00",
        "price": "299.00",
        "sku_id": "PJ20001814",
        "url": "/product/product_detail/41/",
        "condition": "最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机"
      }, {
        "name": "\u5c4f\u788e\u4fddcool1 dual",
        "image": "http://coolpad-cdn.b0.upaiyun.com/images/a2a51643-6849-497d-b1ce-98d33fa329fc.jpg",
        "qty": [1],
        "id": 65,
        "subtotal": "299.00",
        "price": "299.00",
        "sku_id": "PJ20001833",
        "url": "/product/product_detail/65/",
        "condition": "最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机"
      }],
      "id": 848,
      "checked": true,
      "subtotal": "1099.00",
      "available_services": [],
      "price": "1099.00",
      "sku_id": "CP10002348",
      "url": "/product/product_detail/80/",
      "original_price": "1099.00",
      "qty": 1,
      "gifts": [],
      "promotion": []
    }, {
      "name": "\u950b\u5c1amini\u667a\u5c1a\u767d",
      "image": "http://cpmall-cdn.coolpad.com/images/41fb0086-8065-4083-a076-ee3bcdf9e678.jpg",
      "amortized_discount": "0.00",
      "sale_model": "self",
      "services": [],
      "id": 880,
      "checked": true,
      "subtotal": "2398.00",
      "available_services": [],
      "price": "1199.00",
      "sku_id": "CP10002189",
      "url": "/product/product_detail/3/",
      "original_price": "1199.00",
      "qty": 2,
      "gifts": [],
      "promotion": []
    }, {
      "name": "cool1 dual \u534e\u6668\u5b87\u72484+32",
      "image": "http://coolpad-cdn.b0.upaiyun.com/images/be5988ef-f53c-4ebc-9998-54388eed8aa3.jpg",
      "amortized_discount": "0.00",
      "sale_model": "self",
      "services": [],
      "id": 881,
      "checked": true,
      "subtotal": "1459.00",
      "available_services": [{
        "name": "\u5ef6\u4fddcool1 dual",
        "image": "http://coolpad-cdn.b0.upaiyun.com/images/f8ad9209-9cbd-4c32-b93c-2ffaee38c1ad.jpg",
        "qty": [1],
        "id": 41,
        "subtotal": "299.00",
        "price": "299.00",
        "sku_id": "PJ20001814",
        "url": "/product/product_detail/41/",
        "condition": "最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机最好的手机,最好的手机,最好的手机,最好的手机"
      }],
      "price": "1459.00",
      "sku_id": "CP10002371",
      "url": "/product/product_detail/46/",
      "original_price": "1459.00",
      "qty": 1,
      "gifts": [],
      "promotion": []
    }
  ],
  "total": "8153.00",
  "discount": "0.00"
};

export default function postCartQty(req) {
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject('Oh no! cart change number fails... Try again.');
      } else {
        resolve(cart);
      }
    }, 1500); // simulate async db write
  });
}

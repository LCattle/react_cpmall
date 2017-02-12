export default function homepagemsg() {
  return new Promise((resolve) => {
    resolve({
      'code': 0,
      'msg': '',
      'data': {
        "categories": [{
          "items": [{
            "name": "cool S1",
            "subtitle": "送价值999元AKG耳机",
            "price": "2499.00",
            "sku_id": "CP1000e2pJz5",
            "priority": 1,
            "product_url": "/product/product_detail/107/",
            "promotion_type": null,
            "image": "http://cpmall-cdn.coolpad.com/images/596757b4-49e6-42b3-a6b8-44dd5b374c27.jpg",
            "mobile_image": "http://cpmall-cdn.coolpad.com/images/4e02ad8e-da8b-4fad-880d-a7b44ad28021.jpg"
          }],
          "link_url": "/product/all/?name=phone",
          "rank": 0,
          "name": "热销手机"
        }, {
          "items": [{
            "name": "Cool 1C桀骜银",
            "subtitle": "Cool 1C桀骜银",
            "price": "899.00",
            "sku_id": "CP10002508",
            "priority": 1,
            "product_url": "/product/product_detail/97/",
            "promotion_type": null,
            "image": "http://cpmall-cdn.coolpad.com/images/93d87291-fc81-4231-ac11-e8abe5eb68d3.jpg",
            "mobile_image": "http://cpmall-cdn.coolpad.com/images/2d6e0bf2-bb09-4589-a55d-43cff0c10e0f.jpg"
          }],
          "link_url": "/product/all/",
          "rank": 1,
          "name": "精选商品"
        }],
        "small_banners": [{
          "image": "http://cpmall-cdn.coolpad.com/images/876a73b6-e827-4f1f-88fe-4e1c4b512d36.jpg",
          "id": 3,
          "url": "http://www.coolpad.com/product/product_detail/97/",
          "priority": 1,
          "background_color": "#ffffff",
          "mobile_image": "http://cpmall-cdn.coolpad.com/images/47fbdc73-3210-45b9-a518-b7db6c843d70.jpg",
          "size_big": false
        }],
        "big_banners": [{
          "image": "http://cpmall-cdn.coolpad.com/images/fb626a0f-fd86-4c78-8343-490c87139981.jpg",
          "id": 13,
          "url": "http://www.coolpad.com/hd/20161216/",
          "priority": 1,
          "background_color": "#300e40",
          "mobile_image": "http://cpmall-cdn.coolpad.com/images/ff5d907b-b4f1-4fe9-8486-34218d5fa775.jpg",
          "size_big": true
        }]
      }
    });
  });
}

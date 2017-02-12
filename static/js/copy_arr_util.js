/**
 * Created by betta on 2016/12/9.
 * 兼容IE7以上
 */
module.exports = {
    _copyArr: function (arr){
        return $.map(arr, function(obj){
            return $.extend(true,{},obj);//返回对象的深拷贝
        });
    }
}
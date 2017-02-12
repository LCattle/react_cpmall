/**
 * Created by betta on 2016/12/9.
 */
module.exports = {
    /**获取浏览器参数**/
    getUrlParam : function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2]));
        return null;
    },
    getUrlParamAll : function(link) {
        var url = link || window.location.href;
        var urlSearchObject = {};
        if (/\?/.test(url)) {
            var urlArray = url.match(/[&|\?][a-zA-Z_0-9]+=[^#&$\/]+/g);
            for (var i = 0, len = urlArray.length; i < len; i++) {
                var urlItem = urlArray[i];
                var item = urlItem.split("=");
                urlSearchObject[item[0].substr(1)] = item[1];
            }
        }
        return urlSearchObject;
    },
    redirectUrl: function(url, pathname){
        var host = window.location.host,
        search = window.location.search,
        pathname = pathname || window.location.pathname,
        protocol = window.location.protocol,
        url = url || "/accounts/login/",
        redirectUrl = protocol+ "//" + host + url + "?next=" + pathname + search;

        return redirectUrl
    }
}
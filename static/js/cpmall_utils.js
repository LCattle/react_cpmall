Date.prototype.Format = function(fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

/**
 * 时间戳转换成日期格式
 * @param timeStamp 时间戳
 * @param timeFlag 是否要返回时间 boolean
 * @param signStr 日期间拼接的符号， 如：'-', '/' 默认为'-'
 * @returns {*|null}
 * @constructor
 */
Date.prototype.TimeStampToDateTime = function TimeStampToDateTime(timeStamp, timeFlag, signStr) {
  var sign = '-';
  if (signStr) {
    sign = signStr;
  }
  var date = new Date(timeStamp);
  var dateTimeStr;
  var Y = date.getFullYear();
  var M = date.getMonth() + 1;
  var D = date.getDate();

  Y = countNumberLt(Y);
  D = countNumberLt(D);
  dateTimeStr = Y + sign + M + sign + D;
  if (timeFlag) {
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = countNumberLt(h);
    m = countNumberLt(m);
    s = countNumberLt(s);
    dateTimeStr = dateTimeStr + ' ' + h + ':' + m + ':' + s;
  }
  return dateTimeStr || null;
};

function countNumberLt(n) {
  return n <= 9 ? '0' + n : n;
};

window.crosXDR = function(api, okFunc) {
  if ($.browser.msie && window.XDomainRequest) {
    // Use Microsoft XDR
    var xdr = new XDomainRequest();
    xdr.open("get", "api");
    xdr.onload = function() {
      var JSON = $.parseJSON(xdr.responseText);
      if (JSON == null || typeof(JSON) == 'undefined') {
        JSON = $.parseJSON(data.firstChild.textContent);
      }
      console.log('成功了')
      okFunc(JSON)
    };
    xdr.onprogress = function() {};
    xdr.ontimeout = function() {};
    xdr.onerror = function() {};
    setTimeout(function() {
      xdr.send();
    }, 0);
  }

}



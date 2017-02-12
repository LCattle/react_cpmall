;(function(para) {
  var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
  w['sensorsDataAnalytic201505'] = n;
  w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
  var ifs = ['track','quick','register','registerOnce','registerSession','registerSessionOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.async = 1;
    x.src = p;
    y.parentNode.insertBefore(x, y);
    w[n]._t = 1 * new Date();
    w[n].para = para;
  }
})({
  sdk_url: 'https://www.sensorsdata.cn/sdk/sensorsdata.sdk.js',
  name: 'sa',
  source_channel:['ch'],
  server_url: 'https://sensorswww.cloud.sensorsdata.cn:4006/sa.gif?token=6b551cb59b1c1973'
});

// track官网访问
sa.quick('setSessionReferrer');
// 金蝉要加的基于session的页面地址
sa.registerSessionOnce({session_page_url:location.href});

sa.quick('autoTrack');

window.onerror = function(){
  sa.track('sensors_error_report',{
    problem: JSON.stringify(arguments),
    error_report_pos: 'window-statistics',
    page_url:location.href
  });
};


// (function(i, s, o, g, r, a, m) {
//   i['GoogleAnalyticsObject'] = r;
//   i[r] = i[r] || function() {
//       (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
//   a = s.createElement(o),
//     m = s.getElementsByTagName(o)[0];
//   a.async = 1;
//   a.src = g;
//   m.parentNode.insertBefore(a, m)
// })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

// ga('create', 'UA-65370777-1', 'auto');
// ga('send', 'pageview');


// 统计的方法
var saStartTime = new Date();

function getSaScroll() {
  if ($('#desc_wrapper_2').length < 1 || $('#desc_wrapper_2').length < 1) {
    return 1;
  }

  var pos = [
    $('#desc_wrapper_1').offset().top + 100,
    $('#desc_wrapper_2').offset().top + 100,
    $('#desc_wrapper_3').offset().top
  ];
  var top = $(window).scrollTop();
  var height = $(window).height();

  for (var i = 0; i < pos.length; i++) {
    if (top + height < pos[i]) {
      return i + 1;
    }
  }
  return i + 1;
}


function saTrackLeave(trackName) {
  window.onbeforeunload = function() {
    var end = new Date();
    var duration = (end.getTime() - saStartTime.getTime()) / 1000;
    sa.track(trackName, {
      pageUrl: location.href,
      pageStayTime: duration,
      pagePosition: getSaScroll()
    });
  };
}

// window._pt_lt = new Date().getTime();
// window._pt_sp_2 = [];
// _pt_sp_2.push('setAccount,5b70b7f6');
// var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
// (function() {
//   var atag = document.createElement('script'); atag.type = 'text/javascript'; atag.async = true;
//   atag.src = _protocol + 'js.ptengine.cn/5b70b7f6.js';
//   var s = document.getElementsByTagName('script')[0];
//   s.parentNode.insertBefore(atag, s);
// })();


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?bf5399c1b8bd2f8990ce3acf7dae876e";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

$('a').on('click',function(e){
        e.preventDefault();   // 阻止默认跳转
        var me = this;
        var hasCalled = false;
        setTimeout(track_a_click, 1000);  //如果没有回调成功，设置超时回调
        function track_a_click(){
          if (!hasCalled) {
            hasCalled = true;
            location.href = me.href;  //把 A 链接的点击跳转,改成 location 的方式跳转
          }
        }
        sa.track('a_click', {}, track_a_click); //把跳转操作加在callback里
    });
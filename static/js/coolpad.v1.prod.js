/**
 * Created by linguohui on 2016/12/23.
 */
// devices detect
(function () {
    var n, e, o, t, i, r, d, a, c, l;
    e = window.device, n = {}, window.device = n, t = window.document.documentElement, l = window.navigator.userAgent.toLowerCase(), n.ios = function () {
        return n.iphone() || n.ipod() || n.ipad()
    }, n.iphone = function () {
        return !n.windows() && i("iphone")
    }, n.ipod = function () {
        return i("ipod")
    }, n.ipad = function () {
        return i("ipad")
    }, n.android = function () {
        return !n.windows() && i("android")
    }, n.androidPhone = function () {
        return n.android() && i("mobile")
    }, n.androidTablet = function () {
        return n.android() && !i("mobile")
    }, n.blackberry = function () {
        return i("blackberry") || i("bb10") || i("rim")
    }, n.blackberryPhone = function () {
        return n.blackberry() && !i("tablet")
    }, n.blackberryTablet = function () {
        return n.blackberry() && i("tablet")
    }, n.windows = function () {
        return i("windows")
    }, n.windowsPhone = function () {
        return n.windows() && i("phone")
    }, n.windowsTablet = function () {
        return n.windows() && i("touch") && !n.windowsPhone()
    }, n.fxos = function () {
        return (i("(mobile;") || i("(tablet;")) && i("; rv:")
    }, n.fxosPhone = function () {
        return n.fxos() && i("mobile")
    }, n.fxosTablet = function () {
        return n.fxos() && i("tablet")
    }, n.meego = function () {
        return i("meego")
    }, n.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, n.nodeWebkit = function () {
        return "object" == typeof window.process
    }, n.mobile = function () {
        return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego()
    }, n.tablet = function () {
        return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet()
    }, n.desktop = function () {
        return !n.tablet() && !n.mobile()
    }, n.television = function () {
        var n;
        for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], n = 0; n < television.length;) {
            if (i(television[n])) return !0;
            n++
        }
        return !1
    }, n.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, n.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, n.noConflict = function () {
        return window.device = e, this
    }, i = function (n) {
        return l.indexOf(n) !== -1
    }, d = function (n) {
        var e;
        return e = new RegExp(n, "i"), t.className.match(e)
    }, o = function (n) {
        var e = null;
        d(n) || (e = t.className.replace(/^\s+|\s+$/g, ""), t.className = e + " " + n)
    }, c = function (n) {
        d(n) && (t.className = t.className.replace(" " + n, ""))
    }, n.ios() ? n.ipad() ? o("ios ipad tablet") : n.iphone() ? o("ios iphone mobile") : n.ipod() && o("ios ipod mobile") : n.android() ? o(n.androidTablet() ? "android tablet" : "android mobile") : n.blackberry() ? o(n.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : n.windows() ? o(n.windowsTablet() ? "windows tablet" : n.windowsPhone() ? "windows mobile" : "desktop") : n.fxos() ? o(n.fxosTablet() ? "fxos tablet" : "fxos mobile") : n.meego() ? o("meego mobile") : n.nodeWebkit() ? o("node-webkit") : n.television() ? o("television") : n.desktop() && o("desktop"), n.cordova() && o("cordova"), r = function () {
        n.landscape() ? (c("portrait"), o("landscape")) : (c("landscape"), o("portrait"))
    }, a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, r, !1) : window.attachEvent ? window.attachEvent(a, r) : window[a] = r, r(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return n
    }) : "undefined" != typeof module && module.exports ? module.exports = n : window.device = n
}).call(this);
var isMobile = device.mobile() || device.ios() || device.tablet()
if (isMobile) {
    (function (i, s, o, g, a, m) {
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
        a.onload = function () {
            $(function () {
                FastClick.attach(document.body);
            });
        }
    })(window, document, 'script', '/static/js/fastclick-1.0.6.min.js')
}

// var browser = navigator.appName
// var b_version = navigator.appVersion
// var version = b_version.split(";");
// var trim_Version = version ? version[1].replace(/[ ]/g, "");
// if (browser !== "Microsoft Internet Explorer" && browser !== "Netscape") {
var width = Math.min(document.documentElement.offsetWidth, screen.width);
if (width <= 768) {
    // 阿里适配js
    isMobile && !function (a, b) {
        function c() {
            var b = f.getBoundingClientRect().width;
            b / i > 540 && (b = 540 * i);
            var c = b / 10;
            f.style.fontSize = c + "px", k.rem = a.rem = c
        }

        var d, e = a.document,
            f = e.documentElement,
            g = e.querySelector('meta[name="viewport"]'),
            h = e.querySelector('meta[name="flexible"]'),
            i = 0,
            j = 0,
            k = b.flexible || (b.flexible = {});
        if (g) {
            var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
            l && (j = parseFloat(l[1]), i = parseInt(1 / j))
        } else if (h) {
            var m = h.getAttribute("content");
            if (m) {
                var n = m.match(/initial\-dpr=([\d\.]+)/),
                    o = m.match(/maximum\-dpr=([\d\.]+)/);
                n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
            }
        }
        if (!i && !j) {
            var p = a.navigator.userAgent,
                q = (!!p.match(/android/gi), !!p.match(/iphone/gi)),
                r = q && !!p.match(/OS 9_3/),
                s = a.devicePixelRatio;
            i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i
        }
        if (f.setAttribute("data-dpr", i), !g)
            if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
            else {
                var t = e.createElement("div");
                t.appendChild(g), e.write(t.innerHTML)
            }
        a.addEventListener("resize", function () {
            clearTimeout(d), d = setTimeout(c, 300)
        }, !1), a.addEventListener("pageshow", function (a) {
            a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
        }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
            e.body.style.fontSize = 12 * i + "px"
        }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
            var b = parseFloat(a) * this.rem;
            return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
        }, k.px2rem = function (a) {
            var b = parseFloat(a) / this.rem;
            return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
        }
    }(window, window.lib || (window.lib = {}));
} else {
    // IE Hack
    window.isMobile = false
    // document.getElementsByTagName("html")[0].removeAttribute("data-dpr");
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;
            for (; from < len; from++) {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }
    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
}
// siteMonitor
(function (a, e, f, g, b, c, d) {
    a.ClickiTrackerName = b;
    a[b] = a[b] || function () {
            (a[b].queue = a[b].queue || []).push(arguments)
        };
    a[b].start = +new Date;
    c = e.createElement(f);
    d = e.getElementsByTagName(f)[0];
    c.async = 1;
    c.src = g;
    d.parentNode.insertBefore(c, d)
})(window, document, 'script', ('https:' == document.location.protocol ? 'https://stm-collect' : 'http://stm-cdn') + '.cn.miaozhen.com/clicki.min.js', 'stm_clicki');
stm_clicki('create', 'dc-770', 'auto');
stm_clicki('send', 'pageview');
//热图统计
var stm = {
    heatmapDeploy: function () {
        stm_clicki('require', 'heatmap', ('https:' == document.location.protocol ? 'https://stm-collect' : 'http://stm-cdn') + '.cn.miaozhen.com/plugins/heatmap.js');
        stm_clicki('heatmap:on', 5);
    }
};
stm.heatmapDeploy();

// sensor
;
(function (para) {
    var p = para.sdk_url,
        n = para.name,
        w = window,
        d = document,
        s = 'script',
        x = null,
        y = null;
    w['sensorsDataAnalytic201505'] = n;
    w[n] = w[n] || function (a) {
            return function () {
                (w[n]._q = w[n]._q || []).push([a, arguments]);
            }
        };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'registerSession', 'registerSessionOnce', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout'];
    for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
        x = d.createElement(s), y = d.getElementsByTagName(s)[0];
        x.async = 1;
        x.src = p;
        y.parentNode.insertBefore(x, y);
        w[n].para = para;
    }
})({
    sdk_url: 'http://static.sensorsdata.cn/sdk/1.6.16/sensorsdata.min.js',
    name: 'sa',
    // 正式环境
    server_url: 'http://sensors.coolpad.com:8006/sa?project=production'
});
sa.quick('setSessionReferrer');
sa.quick('autoTrack');
window.startTime = new Date().getTime();
window.cpmall = {};
//测试DaoVoice
//window.cpmall.app_id = '57f147a6';

window.cpmall.data = 43420024;
var saStartTime = new Date();
var coolsa = {
    userName: '',
    getSaScroll: function () {
        if ($('#render').length < 1) {
            return 1;
        }
        var pos = [
            $('#render').offset().top + 100
        ];
        var top = $(window).scrollTop();
        var height = $(window).height();
        for (var i = 0; i < pos.length; i++) {
            if (top + height < pos[i]) {
                return i + 1;
            }
        }
        return i + 1;
    },
    randomString: function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    },
    login: function (userName) {
        var tmpId = '';
        var cookieUserName = '';
        if (userName === '' || userName === null) {
            //如果传进来的用户名等于空，则获到cookie保存的用户名
            //如果cookie的用户名不存在，则创建匿名用户名，并且保存到cookie
            var BCookie = document.cookie;
            var cookieArr = BCookie.split(';');
            var splitItem = '';
            var reName = '';
            for (var i = 0; i < cookieArr.length; i++) {
                splitItem = cookieArr[i].split('=');
                if (splitItem[0] === 'cp_userName') {
                    reName = splitItem[1];
                    break;
                }
            }
            cookieUserName = reName || null;
            //设置cookie
            if (!cookieUserName || cookieUserName === '') {
                tmpId = ('' + (new Date()).getTime()).substring(6, 12) + coolsa.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
                ;
                var date = new Date();
                var ed = 7;
                date.setDate(date.getDate() + ed);
                document.cookie = 'cp_userName' + "=" + (window.cpmall.distinctId + tmpId) + "; expires=" + date.toUTCString(); //将date赋值给expires
                cookieUserName = (window.cpmall.distinctId + tmpId);
            }
        }
        coolsa.userName = userName || cookieUserName;
        sa.login(coolsa.userName);
    },
    logout: function () {
        sa.logout();
    },
    getUserId: function () {
        return coolsa.userName
    },
    cpDaoVoice: function (userName) {
        window.setTimeout(function(){
            var opts = {};
            if (!userName || userName === '') {
                opts = {
                    app_id: '25744c38'
                }
            } else {
                var timestamp=Math.round(new Date().getTime()/1000);
                var windowHref = window.location.href;
                var payPage = windowHref.indexOf('payment');
                var orderNo = '';
                if(payPage && payPage !== -1){
                    orderNo = $('#pay-price').attr('data-order-no')
                }
                opts = {
                    app_id: '25744c38',
                    user_id: userName,
                    email: '',
                    name: userName,
                    signed_up: timestamp,
                    plan: '',
                    order_no: orderNo
                }
            }
            daovoice('init', opts);
            daovoice('update');
        }, 2000)
    },
    trackPageView: function (productCategory, productName) {
        window.onbeforeunload = function () {
            var end = new Date();
            var duration = (end.getTime() - saStartTime.getTime()) / 1000;
            if (productCategory) {
                sa.track('cpV3_page_view', {
                    user_name: coolsa.userName,
                    cp_page_start_time: saStartTime,
                    page_stay_time: duration,
                    page_position: coolsa.getSaScroll(),
                    product_category: productCategory,
                    product_name: productName
                });
                return;
            }
            sa.track('cpV3_page_view', {
                user_name: coolsa.userName,
                cp_page_start_time: saStartTime,
                page_stay_time: duration,
                page_position: coolsa.getSaScroll()
            });
        };
    },
    activityClick: function () {
        $(document).on('click', 'button,a', function () {
            sa.track('cpV3_link_click', {
                add_time: new Date(),
                link_name: $(this).prop('name'),
                link_href: $(this).prop('href'),
                link_type: $(this).prop('tagName')
            })
        });
    },
    bannerClick: function (bannerOpt) {
        sa.track('cpV3_banner_click', {
            user_id: bannerOpt.userId,
            cp_add_time: new Date(),
            banner_name: bannerOpt.name,
            banner_id: bannerOpt.id,
            banner_position: bannerOpt.position,
            // banner_priority: bannerOpt.priority,
            // banner_image: bannerOpt.image
        })
    },
    trackError: function (userName) {
        window.onerror = function (message, url, lineNo, columnNo, error) {
            var ext = [];
            var fn = arguments.callee.caller;
            var floor = 3;  //这里只拿三层堆栈信息
            while (fn && (--floor>0)) {
                ext.push(fn.toString());
                if (fn  === fn.caller) {
                    break;//如果有环
                }
                fn = fn.caller;
            }
            sa.track('sensors_error_report', {
                user_name: coolsa.userName,
                message: message,
                url: url,
                lineNo: lineNo,
                columnNo: columnNo && columnNo,
                stack: ext && ext.join(","),
                error: error && error.stack.toString(),
                problem: JSON.stringify(arguments),
                cerror_report_pos: 'window-statistics',
            });
        };
    },
    // util
    getSiteMonitorAttrs: function (siteMonitorId, opts) {
        var newOpts = {
            customActionId: siteMonitorId,
            customActionLabel1: coolsa.userName
        };
        var i = 2;
        $.each(opts, function (key, val) {
            newOpts['customActionLabel' + i] = val;
            ++i;
        });
        newOpts.customActionValue1 = 1;
        return newOpts;
    }
}

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?95bc2db1993824ecbe02e069c3a865ac";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

;(function (i, s, o, g, r, a, m) {
    i["DaoVoiceObject"] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    a.charset = "utf-8";
    m.parentNode.insertBefore(a, m)
})(window, document, "script", ('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/25744c38.js", "daovoice")
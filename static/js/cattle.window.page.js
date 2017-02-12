/**
 * Created by LinGuoHui on 2016/11/21.
 * mall common pup
 */

(function($, win, doc){

    if(!doc){
        console.log('document undefined!');
        return;
    }
    //pager
    function pager(ele,options){
        this.config = $.extend({
            num:5,//show num
            url: false,//是否通过跳转页面
            showType:1 //0,1
        }, options||{});
        this.ele = ele;
        this.total = parseInt(this.config.total) || 1;
        this.show = this.config.num;
        this.curPage = parseInt(this.config.curPage);

        this.curPage = this.curPage || 1;

        this.int();
    }
    pager.prototype = {
        int: function(){
            if(this.config.showType == 0){
                this.buildHtml();
            }else{
                this.renderNum();
            }
        },
        bulidUrl: function(page){
            if(this.config.url){
                var  searchStr = window.location.search.substr(1),
                routeMode = this.ele.attr('routeMode'),
                pathname = window.location.pathname;
                searchArr = searchStr.split('&');
                searchObj = {};
                search = '';
                for(var i = 0, len = searchArr.length; i < len; i++){
                    var arr = searchArr[i].split('=');
                    searchObj[arr[0]] = arr[1];
                }
                for(var item in searchObj){
                    if(item){
                        if(item == 'page'){
                            continue;
                        }
                        search += '&' + item + '=' + searchObj[item];
                    }
                }
                var searchStr = search.substr(1) ?  ('&' + search.substr(1)) : "";
                return pathname + '?page=' + page + searchStr;  
            }else{
                return 'javascript:'
            }
        },
        buildHtml: function(){
            var total = this.total,num = this.show,prevPage = true , nextPage = true , html = '',curPage = this.curPage;
            if(total <= 1){
                this.ele.hide();
                return false;
            }

            /**/
            if(curPage <= 1){
                curPage = 1;
                prevPage = false;
            }
            if(curPage >= total){
                curPage = total;
                nextPage = false;
            }

            for(var i = num; i >= 1 ; i--){
                page = curPage - i;
                if(page < 1){
                    continue;
                }
                else{
                    html += '<li class="pager-item"><a href="' + this.bulidUrl(page) + '">' + page + '</a></li>';
                }
            }
            html += '<li class="pager-current">' + curPage + '</li>';
            for(i = 1; i <= num; i++){
                page = i + curPage;

                if(page > total){
                    break;
                }
                html += '<li class="pager-item"><a href="' + this.bulidUrl(page) + '">' + page + '</a></li>';
            }

            if(prevPage){
                html = '<li class="pager-previous"><a title="返回上一页面" href="' + this.bulidUrl(curPage - 1) + '">上一页</a></li>' + html;
            }else{
                html = '<li class="pager-previous"><span>上一页</span></li>' + html;
            }

            if(curPage == 1){
                html = '<li class="pager-first first"><span>« 首页</span></li>' + html;
            }else{
                html = '<li class="pager-first first"><a title="到第一页" href="' + this.bulidUrl(1) + '">« 首页</a></li>' + html;
            }

            if(nextPage){
                html = html + '<li class="pager-next"><a title="去下一页面" href="' + this.bulidUrl(curPage + 1) + '">下一页</a></li>';
            }else{
                html = html + '<li class="pager-next"><span>下一页</span></li>';
            }

            if(curPage == total){
                html = html + '<li class="pager-last last"><span>尾页 »</span></li>';
            }else{
                html = html + '<li class="pager-last last"><a title="到最后一页" href="' + this.bulidUrl(total) + '">尾页 »</a></li>';
            }
            this.ele.html(html);
        },
        renderNum: function(){
            var total = this.total,num = this.show, html = '', curPage = this.curPage;
            if(total <= 1){
                this.ele.hide();
                return false;
            }else{
                this.ele.show();
            }
            /**/
            if(curPage >= total -3){
                var s = total - 6;
            }else{
                var s = curPage - 3;
            }
            if(curPage < 5){
                var end = 7;
            }else{
                var end = curPage + 3;
            }
            s1 = s;
            s = s > 1 ? s : 2;
            end1 = end;
            end = end < total ? end : total - 1;

            if(curPage == 1){
                html += '<li class="pager-previous"><span>g</span></li>';
                html += '<li class="pager-current">1</li>';
            }else{
                html += '<li class="pager-previous pager-item"><a href="'+ this.bulidUrl(curPage-1) +'" data-index="'+ (curPage-1) +'">g</a></li>';
                html += '<li class="pager-item"><a href="'+ this.bulidUrl(1) +'" data-index="1">1</a></li>';
            }
            if(s1 > 1 && curPage > 5){
                html += '<li><span>...</span></li>';
            }
            for(var j = s;j <= end; j++){
                if(j == curPage){
                   html += '<li class="pager-current">'+j+'</li>';
                }else{
                    html += '<li class="pager-item"><a href="' + this.bulidUrl(j) + '" data-index="'+ j +'">'+j+'</a></li>';
                }
            }

            if(end1 < total && curPage < total-4){
                html += '<li><span>...</span></li>';
            }
            if(total > 1){
                if(curPage == total){
                    html += '<li class="pager-current" data-index="'+ (total) +'">'+total+'</li>';
                    html += '<li class="pager-next"><span>h</span></a></li>';
                }else{
                   html += '<li class="pager-item"><a href="' + this.bulidUrl(total) + '" data-index="'+ total +'">'+total+'</a></li>';
                   html += '<li class="pager-next pager-item"><a href="' + this.bulidUrl((curPage+1)) + '" data-index="'+ (curPage+1) +'">h</a></li>'
                }
            }
            this.ele.html(html);
         }
    }
    $.fn.pager = function(options){
        return this.each(function(){
            pagerObj = new pager($(this),options);
            $(this).data("pager", pagerObj);
        });
    }
})(jQuery, window, document);

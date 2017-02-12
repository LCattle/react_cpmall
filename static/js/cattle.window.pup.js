/**
 * Created by LinGuoHui on 2016/11/21.
 * mall common pup
 */

(function($, win, doc){

    if(!doc){
        console.log('document undefined!');
        return;
    }
    $.fn._P = {
        init:function(ops){
            var self = this;
            self.defaults ={
                pTitle: '提示',
                confirmBtn: true,
                cancelBtn: true,
                closeBtn: true,
                isShow: false,
                pContentText:''
            }

            this.opts = $.extend({}, self.defaults, ops);
            self.loadPupHtml();

        },
        loadPupHtml: function(){
            var self = this;
            var pupHtml = '<div class="cp-pup cp-pup-mobile popup" style="display: none;"></div>'+
                '<div class="cp-pup-content cp-pup-content-mobile popup" style="display: none;">'+
                '<div class="pup-title">'+
                '<h3 class="p-title">提示</h3>'+
                '<span class="close-btn" style="display:none;">'+
                '<b class="close-icon">x</b>'+
                '</span>'+
                '</div>'+
                '<div class="pup-body">'+ self.opts.pContentText +'</div>'+
            '<div class="pup-footer">'+
            '<a href="javascript:void(0)" d="n" style="display: none;" class="btn btn-common cancel-btn">取消</a>'+
            '<a href="javascript:void(0)" d="y" style="display: none;" class="btn btn-common confirm-btn">确定</a>'+
            '</div></div>';

            $('body').children('.popup').remove();
            $('body').append(pupHtml);
            self.setPupInfo();
        },
        setPupInfo: function(){
             var self = this;
            $('.p-title').html(self.opts.pTitle);
            if(self.opts.closeBtn && self.opts.closeBtn !== ''){
                $('.close-btn').css('display', 'block');
            }
            if(self.opts.confirmBtn && self.opts.confirmBtn !== ''){
                $('.confirm-btn').css('display', 'inline-block');
            }
           if(self.opts.cancelBtn && self.opts.cancelBtn !== ''){
               $('.cancel-btn').css('display', 'inline-block');
            }
            if(self.opts.isShow ){
                $('.popup').css('display', 'block');
            }
            self.closePup();
        },
        closePup: function(){
            $('.cancel-btn, .confirm-btn, .close-btn').unbind('click').on('click', function(){
                $('.popup').css('display', 'none').remove();
            });
        }
    }

})(jQuery, window, document);

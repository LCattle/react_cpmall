/*
 * 倒计时
 */
module.exports = {
    //createTime:订单创建时间   dom:需要渲染的元素  fun:计时结束之后的回调函数
    __countdown: function(startTime,endTime,dom,fun){
        var countdown = endTime - startTime //剩余毫秒数
        var _hours=Math.floor(countdown/3600000),//剩余小时
        _minutes=Math.floor((countdown%3600000)/60000),//剩余分钟
        _seconds=Math.floor((countdown%60000)/1000);//剩余秒
        
        if(_hours<10 && _hours>=0){
            _hours = '0'+_hours
        }
        if(_minutes<10 && _minutes>=0){
            _minutes = '0'+_minutes
        }
        if(_seconds<10 && _seconds>=0){
            _seconds = '0'+_seconds
        }
        $(dom).html(_hours+"时"+_minutes+"分"+_seconds+"秒")
        if(countdown <= 0){
            if(typeof(fun) == 'function'){
                fun()
            }
        }
    }
}

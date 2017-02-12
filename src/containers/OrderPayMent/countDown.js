const _countDown = {
  _downTime: (creatTime, downTimeFun)=>{
    let downFlag = true;
    const endTime = new Date(creatTime).getTime() + 7200000;
    const beginTime = new Date().getTime();
    const countDown = endTime - beginTime;
    let hours = Math.floor(countDown / 3600000);
    let minutes = Math.floor((countDown % 3600000) / 60000);
    let seconds = Math.floor((countDown % 60000) / 1000);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (countDown <= 0) {
      downFlag = false;
      clearInterval(downTimeFun);
    }
    const times = hours + '小时' + minutes + '分钟' + seconds + '秒';
    return {
      times: times,
      downFlag: downFlag
    };
  }
};
export default _countDown;

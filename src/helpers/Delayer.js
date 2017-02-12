const Delayer = {
  _isSetHanlder: false,
  _timeoutId: null,
  _trueHandler: null,
  _timeSleep: 600,
  reset: () => {
    Delayer._isSetHanlder = false;
  },
  setTrueHandler: (cb, timeSleep) => {
    if (!Delayer._isSetHanlder) {
      Delayer._trueHandler = cb;
      Delayer._timeSleep = timeSleep ? timeSleep : 600;
      Delayer._isSetHanlder = !!1;
    }
    return Delayer;
  },
  performHandling: () => {
    Delayer._trueHandler();
  },
  handing: () => {
    clearTimeout(Delayer._timeoutId);
    const that = Delayer;
    Delayer._timeoutId = setTimeout(() => {
      that.performHandling();
    }, Delayer._timeSleep);
  }
};

export default Delayer;

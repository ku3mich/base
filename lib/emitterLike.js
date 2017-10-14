const Emiter = require('events');

const EmiterLike = base => class extends base {
  constructor() {
    super();
    this._emiter = new Emiter();
  }

  on(event, handler) {
    return this._emiter.on(event, handler);
  }

  remove(event, listener){
    if (listener)
      return this._emiter.removeListner(event, listener);

    return this._emiter.removeAllListeners(event);
  }
  
  emit(...args){
    return Emiter.prototype.emit.apply(this._emiter, args);
  }
};

module.exports = EmiterLike;

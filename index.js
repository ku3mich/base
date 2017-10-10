Object.assign(
  module.exports,
  {
    Object : require('./lib/object'),
    prototypeChain : require('./lib/prototypeChain'),
    RethrownError : require('./lib/rethrownError'),
    NotImplementedError : require('./lib/notImplementedError'),
    EmitterLike : require('./lib/emitterLike')
  },
  require('./lib/pipe')
);

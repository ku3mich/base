Object.assign(
  module.exports,
  {
    Object : require('./lib/object'),
    prototypeChain : require('./lib/prototypeChain'),
    RethrownError : require('./lib/rethrownError.js')
  },
  require('./lib/pipe')
);

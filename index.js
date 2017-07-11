Object.assign(
  module.exports,
  {
    Object : require('./lib/object'),
    prototypeChain : require('./lib/prototypeChain')
  },
  require('./lib/pipe'));

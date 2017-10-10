module.exports = function* prototypeChain(proto){
  if (proto.constructor !== Object.getPrototypeOf(proto).constructor)
      yield proto;
      
  while ( (proto=Object.getPrototypeOf(proto)) != Object.prototype){
	yield proto;
  }
};

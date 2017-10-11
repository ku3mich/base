module.exports = function* prototypeChain(proto){
  if (typeof(proto) == 'function')
    proto = proto.prototype;
  
  if (proto.constructor !== Object.getPrototypeOf(proto).constructor)
      yield proto;
      
  while ( (proto=Object.getPrototypeOf(proto)) != Object.prototype){
	yield proto;
  }
};

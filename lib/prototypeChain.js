module.exports = function* prototypeChain(obj){
  while ( (obj=Object.getPrototypeOf(obj)) != Object.prototype){
	yield obj;
  }
};

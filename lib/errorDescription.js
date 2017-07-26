class ErrorDescription {
  constructor(msg){
    this.msg = msg;
    this.stack = [];
  }
  
  add(stackPoint){
    this.stack.push(stackPoint);
  }

  toString() {
    return `${this.msg}\n  ` + this.stack.map(s=>s.toString()).join('\n  ');
  }
  
  inspect() {
    return this.toString();
  }
}

module.exports = ErrorDescription;

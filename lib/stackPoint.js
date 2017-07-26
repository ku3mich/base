const variants = [
  {
    rex :  /\s+at (.*?)\s*(\[as .*?\])?\s+\((.*?):(\d+):(\d+)\)$/,
    ctor : m => new StackPoint(m[1], m[3], m[4], m[5])
  },
  {
    rex : /\s+at (.+?):(\d+):(\d+)$/,
    ctor : m => new StackPoint(undefined, m[1], m[2], m[3])
  }
];

class StackPoint {
  constructor(spot, file, line, pos){
    Object.assign(this, {
      spot,
      file,
      line,
      pos
    });
  }

  toString() {
    if (this.spot)
      return `at ${this.spot} in ${this.file}:${this.line}:${this.pos}`;
    
    return `in ${this.file}:${this.line}:${this.pos}`;
  }

  inspect() {
    return toString();
  }
  
  static parse(line){
    for (let v of variants) {
      let m = line.match(v.rex);
      if (m)
        return v.ctor(m);
    }
    
    return null;
  }
}

module.exports = StackPoint;

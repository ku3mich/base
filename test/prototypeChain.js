const prototypeChain = require('../lib/prototypeChain');

class B {
}

class C extends B {
}

describe('prototypeChain', function () {
  it('type', () =>{
    const chain = Array.from(prototypeChain(C));
    chain
      .should
      .contain(B.prototype)
      .have
      .length(2);
  });

  it('instace', () =>{
    const chain = Array.from(prototypeChain(new C()));
    chain
      .should
      .contain(B.prototype)
      .have
      .length(2);
  });
});

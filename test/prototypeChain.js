const prototypeChain = require('../lib/prototypeChain');

describe('prototypeChain', function () {
  it('correct', () =>{
    class B {
    }

    class C extends B {
    }

    const chain = Array.from(prototypeChain(C));
    chain
      .should
      .containEql(B)
      .have
      .length(2);
  });
});

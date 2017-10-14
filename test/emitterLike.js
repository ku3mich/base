const EmitterLike = require('../lib/emitterLike');

describe('emitterLike', function() {
  it('emmits(stub)', () => {
    class Q extends EmitterLike(Object) {
    }

    const q = new Q();
    const proxy = sinon.spy();
    q.on('e', proxy);
    q.emit('e');

    assert(proxy.should.called);
  });
  
  it('correct args', () => {
    class A extends EmitterLike(Object) {
    }

    let w;
    
    const a = new A();
    a.on('e', (...args) => w = args);
    a.emit('e', 1, 2, 3);

    w.should.be.eql([1,2,3]);
  });
});

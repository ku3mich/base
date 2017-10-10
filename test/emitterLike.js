const EmitterLike = require('../lib/emitterLike');

describe('emitterLike', function() {
  it('works', () => {
    class Q extends EmitterLike(Object) {
    }

    const q = new Q();
    const proxy = sinon.spy();
    q.on('e', proxy);
    q.emit('e');

    proxy.should.called();
  });
});

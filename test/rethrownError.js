const RethrownError = require('../lib/rethrownError');

describe('rethrown error', function  () {
  function q() {
    throw new Error('somthing went wrong');
  }

  function f() {
    q();
  }

  function t(){
    try {
      f();
    }
    catch (e) {
      throw new RethrownError('rethrownerror', e);
    }
  }

  it('has correct stack', () => {
    try {
      t();
    }
    catch(e){
      e.errors.should.have.length(2);
      e.errors[0].stack.should.have.length(3);
    }
  });
});



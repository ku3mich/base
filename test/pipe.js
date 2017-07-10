const me = require('../index');

describe('pipe tests', function(){
  it('PipeObject', () =>{
    const p = new me.PipeObject();
    assert(p);
  });
});

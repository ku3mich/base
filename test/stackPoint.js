const StackPoint = require('../lib/stackPoint');

describe('StackPoint', function () {
  it('parses case 1', () => {
    const line = '    at /usr/src/js/ku3mich/base/node_modules/mocha/lib/runner.js:549:12';
    const stackPoint = StackPoint.parse(line);
    assert(stackPoint instanceof StackPoint);
  });
});

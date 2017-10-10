const Error = require('./rethrownError.js');

class NotImplementedError extends Error {
  constructor(){
    super('Method is not implemented');
  }
}

module.exports = NotImplementedError;

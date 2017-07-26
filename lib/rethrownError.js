const StackPoint = require('./stackPoint');
const ErrorDescription = require('./errorDescription');

class RethrownError extends Error {
  constructor(msg, error){
    super(msg);

    if (!error)
      return;
    
    const thisSplit = this.stack.split('\n');
    
    if (error instanceof Error) {
      const errorSplit = error.stack.split('\n');
      const stackPoint = errorSplit.indexOf(thisSplit[2]);
      
      this.stack = errorSplit.slice(0, stackPoint)
        .concat(thisSplit)
        .join('\n');
    }
    else 
      this.stack = `${thisSplit[0]} - ${error}\n${thisSplit.slice(1).join('\n')}`;
  }

  get errors() {
    return this._errors || (this._errors = this._parseErrors());
  }

  _parseErrors() {
    const stackLines = this.stack.split('\n');
    const errors = [];

    let err;
    
    for (let line of stackLines){
      const stackPoint = StackPoint.parse(line);
      
      if (stackPoint){
        if (!err)
          throw new Error('something wrong with errror stack(stack line without error): \n'+this.stack.join('\n  '));

        err.add(stackPoint);
      }
      else {
        if (err)
          errors.push(err);
        
        err = new ErrorDescription(line);
      }
    }

    errors.push(err);
    
    return errors;
  }
}

module.exports = RethrownError;

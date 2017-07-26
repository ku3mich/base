class BaseObject {
  static toString() {
	return `[class ${this.prototype.constructor.name}]`;
  }
}

module.exports = BaseObject;

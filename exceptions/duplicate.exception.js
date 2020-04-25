const BaseException = require('./base.exception');

class DuplicateException extends BaseException {
	constructor(param, value) {
		super(`Bad request: Invalid value ${value} for param ${param}. alreay exists!`, 'DUP_ERROR', 400);
	}
}

module.exports = DuplicateException;

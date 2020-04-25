const BaseException = require('./base.exception');

class InvalidModelException extends BaseException {
	constructor(model) {
		super(`Bad request: Invalid model ${model}`, 'PARAM_ERROR', 500);
	}
}

module.exports = InvalidModelException;

const BaseException = require('./base.exception');

class InvalidApprovalException extends BaseException {
	constructor(param) {
		super(`Bad request: Invalid approval ${param}`, 'PARAM_ERROR', 400);
	}
}

module.exports = InvalidApprovalException;

const BaseException = require('./base.exception');

class MongoConnectionException extends BaseException {
	constructor() {
		super('Unable to connect to mongo.');
	}
}

module.exports = MongoConnectionException;

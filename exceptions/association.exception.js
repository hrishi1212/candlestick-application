const BaseException = require('./base.exception');

class AssociationException extends BaseException {
	constructor() {
		super('Bad request: Lenders are not associated', 'ASSOCIATION_ERROR', 400);
	}
}

module.exports = AssociationException;

const {
	InvalidParamException,
} = require('../exceptions');

const MarketDataRequest = require('../request/market.request');


class GraphSerivce {

    constructor() {
        this.marketDataRequest = new MarketDataRequest();
    }

	 /**
	 * @author Hrishikesh Kale
	 * @description get trade history api of coin dcx
	 * @param {*} pair
	 * @param {*} limit default 500
	 */
    getTradeHistoryData(pair, limit) {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.marketDataRequest.tradeHistory(pair, limit);
				resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	}

}

module.exports = GraphSerivce;
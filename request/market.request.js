const request = require('request');
const config = require('config');

class MarketDataRequest {

     /**
	 * @author Hrishikesh Kale
	 * @description fetch trade history api of coin dcx
	 * @param {*} pair
	 * @param {*} limit default 500
	 */
    tradeHistory(pair, limit) {
        return new Promise(async (resolve, reject) => {
            try {
                const url = `${config.get('coinDCX.baseUrl')}${config.get('coinDCX.market_data.trade_history')}?pair=${pair}&limit=${limit}`;
                request.get({
                    url,
                    headers: {
                        Accept: "application/json",
                        "Content-Type":  "application/json"
                    }
                }, (error, response, body) => {
                    if(error) {
                        return reject(error.message);
                    }
                    return resolve(JSON.parse(body));
                });
            } catch (error) {
                reject(error);
            }
        })
    }
    
}

module.exports = MarketDataRequest;

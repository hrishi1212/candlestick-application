const {
	InvalidParamException,
} = require('../exceptions');
const GraphSerivce = require('../service/graphs.service');


class GraphBiz {

    constructor() {
        this.graphService = new GraphSerivce();
    }

    /**
	 * @author Hrishikesh Kale
	 * @description create graph from trade history api of coin dcx
	 * @param {*} pair
	 * @param {*} limit default 500
	 */
    createGraphTradeHistory(pair, limit = 500) {
		return new Promise(async (resolve, reject) => {
			try {
                const result = await this.graphService.getTradeHistoryData(pair, limit);
                const calculateGraphData = await this.calculateData(result);

				resolve({
                    title : 'Candle Light Graph',
                    type: "candlestick",
                    name: 'Stock Name',
					graph_data: calculateGraphData
				});
			} catch (error) {
				reject(error);
			}
		});
    }
    
    /**
	 * @author Hrishikesh Kale
	 * @description calculate data from given result from coin DCX API
	 * @param {*} result Array of data
	 */
    calculateData(data) {
        return new Promise(async (resolve, reject) => {
			try {
                /**
                 use promise all because it will not wait to execute first 1 minute data, also it will execute other 2 as well on 
                 full data

                 we passed data, start and end time into calculateData function which will help us to know, also minused the minutes what we want
                 from the current time, like we always wanted a data for a minute so minused 60 sec from current date and time to get 1 minute data from result

                 also utilized the same calculateDataTime function because in future if we want to add 20 minute graphdata we just need to pass start time minus its seconds
                 which is reusable...
                 */
                const result = await Promise.all([
                    this.calculateDataTime(data, new Date( Date.now() - 1000 * 60 ), new Date()), //minused 60 sec for 1 minute
                    this.calculateDataTime(data, new Date( Date.now() - 1000 * 900 ), new Date()), //minused 900 sec(15 mins) for 15 minute
                    this.calculateDataTime(data, new Date( Date.now() - 1000 * 3600 ), new Date()) //minused 3600 sec(1 hour) for 60 minute
                ]);

                const calculateData1Minute = {"duration" : "1 Minute", total: result[0].length, data:result[0]};
                const calculateData15Minute = {"duration" : "15 Minute", total: result[1].length, data:result[1]};
                const calculateData60Minute = {"duration" : "1 hour", total: result[2].length, data:result[2]};

                let graphData = [
                    calculateData1Minute,
                    calculateData15Minute,
                    calculateData60Minute
                ];

                resolve(graphData);
			} catch (error) {
				reject(error);
			}
		});
    }

    /**
	 * @author Hrishikesh Kale
	 * @description calculate or filter result on basis of start and end time provided
	 * @param {*} data Array
	 * @param {*} startTime Date()
	 * @param {*} endTime Date()
	 */
    calculateDataTime(data, startTime, endTime) {
        return new Promise(async (resolve, reject) => {
			try {
               const result = data.filter(result => {
                    let date = new Date(result.T);
                    return (date >= startTime && date <= endTime);
               });
                resolve(result);
			} catch (error) {
				reject(error);
			}
		});
    }

}   

module.exports = GraphBiz;
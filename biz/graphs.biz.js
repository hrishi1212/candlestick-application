const {
	InvalidParamException,
} = require('../exceptions');
const GraphSerivce = require('../service/graphs.service');


class GraphBiz {

    constructor() {
        this.graphService = new GraphSerivce();
    }

    createGraphTradeHistory(pair, limit = 500) {
		return new Promise(async (resolve, reject) => {
			try {
                const result = await this.graphService.create(pair, limit);
				resolve({
					code: result,
				});
			} catch (error) {
				reject(error);
			}
		});
	}

}   

module.exports = GraphBiz;
const {
	InvalidParamException,
} = require('../exceptions');

const GraphBiz = require('../biz/graphs.biz');

class GraphController {
	register(app) {
		app.route('/candlestick')
			.post(async (request, response, next) => {
				try {

					return response.status(200).json({
						success: true,
						data: request.body,
						message: 'success'
					});
				} catch (error) {
					return response.status(500).json({
						success: false,
						message: 'Internal Server Error',
						error,
					});
				}
			})
			.get(async (request, response, next) => {
				try {
                    
					const {
                        pair,
                        limit
					} = request.query;

					//let pair be required param
					if (!pair) throw new InvalidParamException('pair');

					const biz = new GraphBiz();
					const result = await biz.createGraphTradeHistory(pair,limit);

					return response.status(200).json({
						success: true,
						data: result,
						message: 'graph data generated'
					});
				} catch (error) {
					return response.status(500).json({
						success: false,
						message: 'Internal Server Error',
						error,
					});
				}
			});
	}
}

module.exports = GraphController;

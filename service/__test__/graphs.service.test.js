const expect = require('expect');
const GraphService = require('../graphs.service');

describe('Graph Serivce test', () => {
    
    test('getTradeHistoryData', async ()=> {

        const pair = 'B-BTC_USDT';
        const limit = 10;

        const graphService = new GraphService();
        const result = await graphService.getTradeHistoryData(pair, limit);

        //to check if return is a array or no
        let containArrays = true;
        if(result.length == 0) {
            containArrays = false
        }
        expect(containArrays).toBeTruthy();
    });
});

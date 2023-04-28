import Request from "./request";

const callApiArticle = {
    async getListArticle() {
        return await callApiArticle.callArticleAPI("get", `/api/activity`,);
    },

    async getListDataExtend(data) {
        return await callApiArticle.callArticleAPI("get", `/api/v1/assets?format=${data.format}`,);
    },

    async getListDataProduct() {
        return await callApiArticle.callProductAPI("get", '/products');
    },

    callArticleAPI(method, pathUrl, body, headers = {}) {
        return Request.callAPI(method, 'https://api.opensea.io', pathUrl, body, headers);
    },

    callProductAPI(method, pathUrl, body, headers = {}) {
        return Request.callAPI(method, 'https://fakestoreapi.com', pathUrl, body, headers);
    }
};

// https://api.coinbase.com/v2/currencies

// https://api.kraken.com/0/public/Trades?pair=ltcusd

// https://api.opensea.io/api/v1/assets?format=json

// const callAPIdata = {
//     async getListData() {
//         return await callAPIdata.callAPIdata("GET", `/v2/beers`,);
//     },
//     callDataAPI(method, pathUrl, body, headers = {}) {
//         return Request.callAPI(method, 'https://api.punkapi.com', pathUrl, body, headers);
//     },
// };

export default callApiArticle;


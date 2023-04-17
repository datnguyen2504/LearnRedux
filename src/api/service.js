import Request from "./request";

const callApiArticle = {
    async getListArticle() {
        return await callApiArticle.callArticleAPI("get", `/api/activity`,);
    },
    callArticleAPI(method, pathUrl, body, headers = {}) {
        return Request.callAPI(method, 'https://www.boredapi.com', pathUrl, body, headers);
    },
};

export default callApiArticle;

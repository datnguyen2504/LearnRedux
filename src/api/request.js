import axios from "axios";

const Request = {
    callAPI(method, url, pathUrl, args, headers) {
        return new Promise(async (resolve, reject) => {
            try {
                let apiUrl = `${url}${pathUrl}`;
                let apiHeader = {
                    ...headers,
                    "Content-Type": "application/json; charset=utf-8",
                };
                let apiBody = args;

                const option = {
                    method, // Get, post, put, delete ......
                    url: apiUrl, // goi len day de lay data tu server ve client
                    headers: apiHeader, // token -> kiem tra dang nhap
                    //data
                    //params
                };
                if (method.toUpperCase() !== "GET") {
                    option.data = apiBody;
                } else {
                    option.params = apiBody;
                }

                const response = await axios(option);
                resolve(response);
            } catch (error) {
                // if (error) console.log(error);
                resolve({
                    code: -1001,
                    data: { message: "Lỗi kết nối server, Vui lòng quay lại sau" },
                });
            }
        });
    },
};

export default Request;

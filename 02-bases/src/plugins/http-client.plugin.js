const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        // const response = await axios.get(url);
        // const data = response.data;
        // return data;
        const { data } = await axios.get(url);
        return data;
    },
    post: async (url, body) => { },
    put: async (url, body) => { },
    delete: async (url) => { },
};


module.exports = {
    httpClientPlugin
}
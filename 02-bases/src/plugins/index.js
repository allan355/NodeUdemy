const { getId } = require('../plugins/get-id.plugin')
const { getAge } = require('../plugins/get-age.plugin')

const { httpClientPlugin } = require('../plugins/http-client.plugin')
module.exports = {
    getId,
    getAge,
    httpClientPlugin,
}
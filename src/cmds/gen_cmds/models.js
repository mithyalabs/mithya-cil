const findUp = require('find-up');
const fs = require('fs');
const logging = require('../../logging');
const axios = require('axios');
const configPath = findUp.sync(['config.json', './src/config.json']);

exports.command = 'models [out-dir]'
exports.desc = 'Generate base-models from swagger.json'
exports.builder = {}
exports.handler = async function (argv) {
    try {
        if (configPath === null) {
            logging.errorLog("Not found: config.json")
            return;
        }
        const config = require(configPath);
        const baseUrl = config['BASE_URL'];
        if (!baseUrl) {
            logging.errorLog("BASE_URL not found in config.json")
            return;
        }
        const { data } = await axios.request(baseUrl + 'explorer/swagger.json');
        const script = require("../../scripts/generate-web-models");
        await script(data, argv['outDir']);
        logging.successLog("Base models successfully generated");
    } catch (error) {
        logging.errorLog("Error", JSON.stringify(error, null, 2))
    }
}
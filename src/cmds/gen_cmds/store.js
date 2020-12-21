exports.command = 'store'
exports.desc = 'Create a new redux store'
exports.builder = {}
exports.handler = function (argv) {
    const script = require("../../scripts/generate-store");
    script()
}
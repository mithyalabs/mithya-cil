const script = require('../scripts/init-web');

exports.command = 'init <type>'
exports.desc = 'Initialize project'
exports.builder = function (yargs) {

}
exports.handler = function (argv) {
    console.log("init");
    const type = argv['type'];
    script()

}
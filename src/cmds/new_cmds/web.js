
exports.command = 'web <project-name>'
exports.desc = 'Create a new web project with name <project-name>'
exports.builder = {}
exports.handler = function (argv) {
    const script = require('../../scripts/create-web-app');
    script(argv['project-name']);
}
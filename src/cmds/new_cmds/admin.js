exports.command = 'admin <project-name>'
exports.desc = 'Create a new admin project with name <project-name>'
exports.builder = {}
exports.handler = function (argv) {
    console.log('Creating new react admin project:', argv['project-name'])
}
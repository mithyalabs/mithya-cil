exports.command = 'new <type>'
exports.desc = 'Create a new project'
exports.builder = function (yargs) {
    return yargs.commandDir('new_cmds')
}
exports.handler = function (argv) {

}
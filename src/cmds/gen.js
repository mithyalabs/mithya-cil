exports.command = 'gen <type>'
exports.desc = 'Generate utility file(s) for a project'
exports.builder = function (yargs) {
    return yargs.commandDir('gen_cmds')
}
exports.handler = function (argv) {
}
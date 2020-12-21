const { spawn } = require("child_process");
var readline = require('readline');
const logging = require('../logging')


module.exports = () => {
    // const appName = await getProjectName();
    var child = spawn('npx', [
        'hygen', 'store', 'new'
    ]);

    readline.createInterface({
        input: child.stdout,
        terminal: false
    }).on('line', function (line) {
        console.log(line);
    }).on('close', function () {
        console.log("done")
    });

    readline.createInterface({
        input: child.stderr,
        terminal: false
    }).on('line', function (line) {
        console.log(line);
    });
}
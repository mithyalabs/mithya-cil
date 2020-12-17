const { spawn } = require("child_process");
var readline = require('readline');
const logging = require('../logging')


// async function getProjectName() {
//     return inquirer
//         .prompt([
//             {
//                 name: 'projectName',
//                 message: 'Enter the project name'
//             }
//         ])
//         .then(answers => {
//             return answers.projectName;
//         })
// }

module.exports = (appName) => {
    // const appName = await getProjectName();
    logging.successLog("Creating new web project");
    var child = spawn('npx', [
        'create-react-app', appName,
        '--template', 'mithyalabs'
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
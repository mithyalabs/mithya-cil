const chalk = require("chalk");
const boxen = require("boxen");


const boxenOptions = {
    padding: 1,
    borderStyle: "round",
    borderColor: "green",
};


module.exports = {
    successLog(msg) {
        console.log(chalk.green(msg))
    },
    errorLog(msg) {
        console.log(chalk.red(msg))
    },
    boxedLog(msg) {
        const msgBox = boxen(msg, boxenOptions);
        console.log(msgBox);
    }

}
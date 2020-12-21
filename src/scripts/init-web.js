const fs = require('fs');
const fse = require('fs-extra');
const utils = require('../utils');

module.exports = () => {

    const srcDir = require('../_templates');
    const destDir = utils.getCurrentDirectoryBase();
    console.log("dest", destDir, srcDir)
    return;


    // To copy a folder or file  
    fse.copySync(srcDir, destDir, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("success!");
        }
    });
    // File destination.txt will be created or overwritten by default.
    // fs.copyFile('source.txt', 'destination.txt', (err) => {
    //     if (err) throw err;
    //     console.log('source.txt was copied to destination.txt');
    // });
}
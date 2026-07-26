const path = require('path');
const fs = require('fs');
function readFile(filename){
    const filePath = path.join(__dirname,"..","..", "workspace", filename);

    fs.readFile(filePath,'utf-8', (err,data) => {
        if(err){
            throw err;
        }
        console.log(data);
    });
}

module.exports = readFile;
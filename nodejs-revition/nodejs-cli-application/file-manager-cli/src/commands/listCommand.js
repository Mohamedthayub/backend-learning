const fs = require('fs');
const path = require('path');
const { list } = require('postcss');
function listFiles(){
    const filePath = path.join(__dirname, "..","..","workspace");
    fs.readdir(filePath,(err,files) => {
        if(err){
            throw err;
        }

        files.forEach((file,index) => {
            console.log(`${index + 1}. ${file}`);
        })
    })

}
module.exports = listFiles;
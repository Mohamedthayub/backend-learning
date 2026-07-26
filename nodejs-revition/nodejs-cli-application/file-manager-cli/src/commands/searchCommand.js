const fs = require('fs');
const path  = require('path');

function searchFiles(filename){
    const filePath = path.join(__dirname,"..","..","workspace");
    fs.readdir(filePath,(err,files) => {
        if(err){
            throw err;
        }
        const filteredNames = files.filter((file) => {
            return file.includes(filename);
        });
        
        filteredNames.forEach((file,index) => {
            console.log(`${index + 1}. ${file}`)
        })
    })
}
module.exports  = searchFiles;
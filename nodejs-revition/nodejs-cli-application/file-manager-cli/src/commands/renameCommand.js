const fs = require('fs')
const path = require('path');

function renameFile(oldfileName,newfileName){
    const oldfilePath = path.join(__dirname,"..","..", "workspace",oldfileName);
    const newfilePath = path.join(__dirname,"..","..","workspace",newfileName);

    fs.rename(oldfilePath,newfilePath, (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
    console.log("✓ File renamed successfully.");
}

module.exports = renameFile;
const fs = require('fs')
const path = require('path');

function renameFile(oldfileName,newfileName){
    const oldfilePath = path.join(__dirname,"..","..", "workspace",oldfileName);
    const newfilePath = path.join(__dirname,"..","..","workspace",newfileName);
    if(fs.existsSync(oldfilePath)){
        fs.rename(oldfilePath,newfilePath, (err) => {
           if(err){
            console.log(err);
            return;
        }
    });
    console.log("✓ File renamed successfully.");   
    }
    else{
        console.log("file does not exits ❌");
    }
}

module.exports = renameFile;
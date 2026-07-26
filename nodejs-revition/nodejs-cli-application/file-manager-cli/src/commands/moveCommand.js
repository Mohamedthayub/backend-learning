const fs = require('fs');
const path = require('path');
function moveFile(filename){
    const destination = path.join(__dirname,"..","..","archive",filename);
    const oldPath = path.join(__dirname,"..","..","workspace",filename);
    fs.rename(oldPath,destination,(err) => {
        if(err){
            console.log(err);
        }
        console.log("✓ File moved successfully.");  
    });
}
module.exports = moveFile;

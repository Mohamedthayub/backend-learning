const path = require("path");
const fs = require("fs");
function copyFile(filename){
    const oldPath = path.join(__dirname,"..","..","workspace",filename);
    const destination = path.join(__dirname,"..","..","backups",filename);
    if(fs.existsSync(oldPath)){
        fs.copyFile(oldPath,destination,(err) => {
            if(err){
                throw err;
            }
            console.log("✓ File copied successfully.");
        });
    }
    else{
        console.log("file does not exits ❌");
    }

}
module.exports = copyFile;
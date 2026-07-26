const path = require("path");
const fs = require("fs");
function copyFile(filename){
    const destination = path.join(__dirname,"..","..", "backup",filename);
    const oldPath = path.join(__dirname,"..","..","workspace",filename);
    fs.copyFile(oldPath,destination,(err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("✓ File copied successfully.");
    })
}
module.exports = copyFile;
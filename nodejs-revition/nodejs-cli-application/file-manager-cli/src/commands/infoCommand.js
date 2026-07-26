const fs = require('fs');
const path = require('path');
const formateDate = require("../utils/formatDate");
function showFileInfo(filename){
    const filePath = path.join(__dirname,"..","..", "workspace", filename)
    fs.stat(filePath,(err,stats) => {
        if(err){
            console.log(err);
        }
        console.log("Name         :",filename.trim());
        console.log("Size         :",stats.size,"bytes");
        console.log("Created      :",formateDate(stats.birthtime));
        console.log("Modified     :",formateDate(stats.mtime));
        console.log("Is File      :",stats.isFile());
        console.log("Is Directory :",stats.isDirectory());
    })
}
module.exports  = showFileInfo;
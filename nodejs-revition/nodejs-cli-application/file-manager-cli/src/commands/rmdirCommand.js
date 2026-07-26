const fs = require('fs');
const path = require('path');


function removeDirectory(foldername){
    const filePath = path.join(__dirname,"..","..","workspace",foldername);
    fs.rm(filePath,{recursive:true},(err) => {
        if(err){
            throw err;
        }
        console.log("✓ Directory deleted successfully.");
    })
}

module.exports = removeDirectory;
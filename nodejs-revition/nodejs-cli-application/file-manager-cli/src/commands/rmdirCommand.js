const fs = require('fs');
const path = require('path');


function removeDirectory(foldername){
    const filePath = path.join(__dirname,"..","..","workspace",foldername);
    if(fs.existsSync(filePath)){
        fs.rm(filePath,{recursive:true},(err) => {
        if(err){
            throw err;
        }
        console.log("✓ Directory deleted successfully.");
    })   
    }
    else{
        console.log("Directory does not exist ❌")
    }
}

module.exports = removeDirectory;
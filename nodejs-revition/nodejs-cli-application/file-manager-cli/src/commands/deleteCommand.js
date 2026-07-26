const path = require('path');
const fs = require('fs');

function deleteFile(filename){
    const filePath = path.join(__dirname,"..","..", "workspace", filename)

    fs.unlink(filePath,(err) => {
        if(err){
            throw err.message;
        }
        console.log("✓ File deleted successfully.");
    });   
}

module.exports  = deleteFile;

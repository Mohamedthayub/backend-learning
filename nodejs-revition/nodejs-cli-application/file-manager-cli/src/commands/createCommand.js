const path = require("path");
const fs = require('fs');
function createFile(filename,content) {
    const filePath = path.join(__dirname,"..","..","workspace",filename)

    fs.writeFile(filePath,content,(err) => {
        if(err){
            throw err;
        }
        console.log("✓ File created successfully.");

    });
}

module.exports = createFile;
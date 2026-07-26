const fs  = require('fs');
const path = require('path');

function createDirectory(foldername){
    const filePath = path.join(__dirname,"..","..","workspace",foldername);
    fs.mkdir(filePath,(err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('✓ Directory deleted successfully.');
    })
}
module.exports = createDirectory;
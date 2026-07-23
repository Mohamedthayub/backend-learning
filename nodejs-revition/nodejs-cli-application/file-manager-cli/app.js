const fs = require("fs");
const path = require("path");
function createFile(filename) {
    const filePath = path.join(__dirname, "workspace", filename);

    fs.writeFileSync(filePath, "");

    console.log("✓ File created successfully.");
}

const command = process.argv[2];
const fileName = process.argv[3];

if(command == "add"){
    createFile(fileName);    
}

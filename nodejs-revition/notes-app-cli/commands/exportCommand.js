const {readNotes} = require("../utils/notes")
const fs = require('fs');
const path = require('path');

function  exportNotes(format){
    const filePath = path.join(__dirname, "..", "exports",`notes-exports.${format}`);
    const notes = readNotes();
    if(notes.length == 0){
        console.log("No Notes available");
        return ;
    }
    if(format === "txt"){
        fs.writeFileSync(filePath,JSON.stringify(notes,null,2));
        console.log("✓ Notes exported successfully.");
    }
    else if (format == "json"){
        fs.writeFileSync(filePath,JSON.stringify(notes,null,2));
        console.log("✓ Notes exported successfully.");
    }
    else{
        console.log("Unsupported export format.");
    }

}
module.exports = exportNotes;
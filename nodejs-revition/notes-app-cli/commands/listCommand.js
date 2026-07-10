const { readNotes, saveNotes } = require("../utils/notes");
function listNotes(){
    const notes = readNotes();
    if(notes.length == 0){
        console.log("No notes are available. !");
    }
    let column_number = 0;
    for(let  note of notes){
        column_number++;
        console.log(`${column_number}. ${note.title}`);
    }
}
module.exports = listNotes;
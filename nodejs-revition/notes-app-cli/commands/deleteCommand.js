const { readNotes, saveNotes } = require("../utils/notes");
 
function deleteNote(id){
    const notes = readNotes();

    const isNoteId = notes.filter((nt) => nt.id == id)
    if(isNoteId.length == 0){
        console.log('Note Id does not exist');
    }
    else{
        const filteredNotes = notes.filter((nt) => nt.id != id);
        saveNotes(filteredNotes);
        console.log("✓ Note deleted successfully.");
    }
}

module.exports = deleteNote;
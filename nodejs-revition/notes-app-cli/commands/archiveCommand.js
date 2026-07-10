const {readNotes,saveNotes }  = require('../utils/notes');

function archiveNote(id){
    const notes = readNotes();
    const isNoteId = notes.filter((nt) => nt.id == id)
    if(isNoteId.length == 0){
        console.log('Note Id does not exist');
    }
    else{
        const archivedNotes = notes.map((nt) => {
        if(nt.id == id && nt.archived == false){
            nt.archived = true;
        }
           return nt;
        })
        saveNotes(archivedNotes);
        console.log("✓ Note archived successfully.");
    }
}
module.exports = archiveNote;
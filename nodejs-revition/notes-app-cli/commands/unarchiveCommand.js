const {readNotes,saveNotes }  = require('../utils/notes');

function unArchive(id){
    const notes = readNotes();
    const unarchivedNotes = notes.map((nt) => {
        if(nt.id == id && nt.archived == true){
            nt.archived = false;
        }
        return nt;
    });
    saveNotes(unarchivedNotes);
    console.log("✓ Note unarchived successfully.");
}
module.exports = unArchive;
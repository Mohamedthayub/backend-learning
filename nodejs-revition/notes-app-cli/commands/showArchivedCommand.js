const {readNotes,saveNotes }  = require('../utils/notes');
function showArchivedNotes(){
    console.log("Archived Notes ...");
    const notes = readNotes();
    const archived  = notes.filter((nt) => nt.archived == true );
    console.log(archived);
}

module.exports = showArchivedNotes;
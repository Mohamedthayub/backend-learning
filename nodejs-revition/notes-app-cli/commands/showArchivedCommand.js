const {readNotes,saveNotes }  = require('../utils/notes');
function showArchivedNotes(){
    const notes = readNotes();
    const archived  = notes.filter((nt) => nt.archived == true );
    if(archived.length == 0){
        console.log("No Archived Notes");
    }
    else{
        console.log("Archived Notes ...");
        console.log(archived);
    }
}

module.exports = showArchivedNotes;
const {readNotes}  = require('../utils/notes');
function readSingleNote(id){
    const notes = readNotes();
    const isNoteId = notes.filter((nt) => nt.id == id)
    if(isNoteId.length == 0){
        console.log('Note Id does not exist');
    }
    else{
        const filteredNote = notes.filter((note) => note.id ==  id);
        console.log(filteredNote);
    }
}

module.exports  = readSingleNote;
const {readNotes}  = require('../utils/notes');
function readSingleNote(id){
    const notes = readNotes();
    const filteredNote = notes.filter((note) => note.id ==  id);
    console.log(filteredNote);
}

module.exports  = readSingleNote;
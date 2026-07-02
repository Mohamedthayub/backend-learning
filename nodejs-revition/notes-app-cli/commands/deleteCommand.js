function deleteNote(id){
    const notes = readNotes();
    const filteredNotes = notes.filter((nt) => nt.id != id);
    saveNotes(filteredNotes);
    console.log("✓ Note deleted successfully.");
}

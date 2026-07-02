function archiveNote(id){
    const notes = readNotes();
    const archivedNotes = notes.map((nt) => {
        if(nt.id == id && nt.archived == false){
            nt.archived = true;
        }
        return nt;
    })
    saveNotes(archivedNotes);
    console.log("✓ Note archived successfully.");
}
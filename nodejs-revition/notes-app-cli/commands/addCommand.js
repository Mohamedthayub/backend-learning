function createNote(title,content,tags){
    const notes = readNotes();
    const note = {
        "id":notes.length + 1,
        "title":title,
        "content":content,
        "tags":tags.split(" "),
        "archived":false
    }
    notes.push(note);
    saveNotes(notes);
    console.log("✓ Note added successfully.");

}
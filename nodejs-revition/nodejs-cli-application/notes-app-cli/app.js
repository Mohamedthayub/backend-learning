const { create } = require('domain');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname , "notes.json");

const command = process.argv[2];
const id = process.argv[3]
const tittle =  process.argv[3];
const content = process.argv[4];
const tags = process.argv[5];

const readNotes = () => {
    try{
        const data = fs.readFileSync(filePath,'utf8')
        return JSON.parse(data);
    }
    catch(err){
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFile(filePath,JSON.stringify(notes),(err) => {
        if(err){
            throw err;
        }
    });
}

if(command == "add"){
    const index = readNotes();
    const note = {
        "id":index.length + 1,
        "title" :tittle,
        "content":content,
        "tags":tags,
        "archeived":false
        
    }
    console.log(note);         
    saveNotes(notes);
    console.log("✓ Note added successfully.");
}

else if (command == 'delete'){
    const notes = readNotes();
    const filteredNotes = notes.filter((nt) => nt.id != id);
    saveNotes(filteredNotes);
    console.log("✓ Note deleted successfully.");
}

else if (command  == "list"){
    const notes = readNotes();
    let column_number = 0;
    for(let  note of notes){
        column_number++;
        console.log(`${column_number}. ${note.title}`);
    }
}
else if(command === "delete-all"){
    saveNotes([]);
    console.log("✓ Notes all deleted successfully.");

}
else if (command == "read"){
    const notes = readNotes();
    const filteredNote = notes.filter((note) => note.id ==  id);
    console.log(filteredNote);
}
else if (command == "count"){
    const notes = readNotes();
    console.log("The notes total count is : " + notes.length);
}
else{
    console.log("Invalid command");
}
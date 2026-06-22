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
    const notes = readNotes();
    
    const note = {
        "id":notes.length + 1,
        "title" :tittle,
        "content":content,
        "tags":tags,
        "archeived":false
        
    }
    console.log(note);      
    notes.push(note);   
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
    if(notes.length == 0){
        console.log("No notes are available. !");
    }
    let column_number = 0;
    for(let  note of notes){
        column_number++;
        console.log(`${column_number}. ${note.title}`);
    }
}


else if (command == "archive"){
    const notes = readNotes();
    const archivedNotes = notes.map((nt) => {
        if(nt.id == id && nt.archeived == false){
            nt.archeived = true;
        }
        return nt;
    })
    saveNotes(archivedNotes);
    console.log("✓ Note archived successfully.");
}

else if (command == "archived"){
    const notes = readNotes();    console.log("archived notes :")
    notes.forEach((note) => {
        if(note.archeived == true){
            console.log(`${note.id}. ${note.title}` );
        }
    })
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
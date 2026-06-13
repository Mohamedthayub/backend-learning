const { create } = require('domain');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname , "notes.json");

const command = process.argv[2];
const note = process.argv[3];


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
    notes.push(note);
    saveNotes(notes);
    console.log("Note Added ...");
}

else if (command == 'delete'){
    const notes = readNotes();
    const filteredNotes = notes.filter((nt) => nt != note);
    saveNotes(filteredNotes);
    console.log("Note deleted ....");
}

else if (command  == "list"){
    const notes = readNotes();
    notes.forEach((note,index) => {
        console.log(`${index + 1}. ${note}`);
    })
}
else{
    console.log("Invalid command");
}
const fs = require('fs');
const path = require('path');
const isvalidAddNote = require('./utils/validator');
const { comma } = require('postcss/lib/list');

const filePath = path.join(__dirname , "notes.json");

const command = process.argv[2];
const id = process.argv[3]
const title =  process.argv[3];
const content = process.argv[4];
const tags = process.argv[5];

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
function deleteNote(id){
    const notes = readNotes();
    const filteredNotes = notes.filter((nt) => nt.id != id);
    saveNotes(filteredNotes);
    console.log("✓ Note deleted successfully.");
}
function listNotes(){
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
function showStats(){
    const notes = readNotes();
    
    const tagCount = notes.reduce((acc,curr) => {
         return acc + curr.tags.length;
    },0);

    const activeNotes = notes.reduce((acc,curr) => {
    if(curr.archived == false){
        acc++
    }
       return acc;
   },0);
    const archivedNotes = notes.reduce((acc,curr) => {

    if(curr.archived == true){
        acc++
    }
       return acc;
    },0);

    console.log(`Total Notes    : ${notes.length}`);
    console.log(`Active Notes   : ${activeNotes}` );
    console.log(`Archived Notes : ${archivedNotes}`);
    console.log(`Tags Used      : ${tagCount}`);
    
}
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
function unArchive(id){
    const notes = readNotes();
    const unarchivedNotes = notes.map((nt) => {
        if(nt.id == id && nt.archived == true){
            nt.archived = false;
        }
        return nt;
    });
    saveNotes(unarchivedNotes);
    console.log("✓ Note unarchived successfully.");
}
function showArchivedNotes(){
    const notes = readNotes();   
    console.log("Archived notes :")
    notes.forEach((note) => {
        if(note.archived == true){
            console.log(`${note.id}. ${note.title}` );
        }
    })
}

function readSingleNote(id){
    const notes = readNotes();
    const filteredNote = notes.filter((note) => note.id ==  id);
    console.log(filteredNote);
}

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
    if(isvalidAddNote(command,title,content,tags)){
        createNote(title,content,tags);   
    }
}
else if (command === 'delete'){
    deleteNote(id);
}
else if (command === "list"){
    listNotes()
}
else if(command === "stats"){
    showStats();
}
else if(command === "archive"){
    archiveNote(id);
}
else if (command == "unarchive"){
    unArchive(id);
}
else if(command == "showarchive"){
    showArchivedNotes();
}
else if(command == "read"){
    readSingleNote(id);
}
else{
    console.log("Invalid command");
}
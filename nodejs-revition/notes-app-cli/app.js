const isvalidAddNote = require('./utils/validator');
const createNote = require('./commands/addCommand');
const deleteNote  = require('./commands/deleteCommand');
const listNotes = require('./commands/listCommand');
const showStats = require('./commands/statsCommand');
const archiveNote = require('./commands/archiveCommand');
const unArchive = require('./commands/unarchiveCommand');
const readSingleNote = require('./commands/readSingleCommand');
const showArchivedNote = require('./commands/showArchivedCommand');
const command = process.argv[2];
const id = process.argv[3]
const title =  process.argv[3];
const content = process.argv[4];
const tags = process.argv[5];




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
    showArchivedNote();
}
else if(command == "read"){
    readSingleNote(id);
}
else{
    console.log("Invalid command");
}

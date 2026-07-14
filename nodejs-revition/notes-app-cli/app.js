const {validateNote, validateId}  = require('./utils/validator');
const createNote = require('./commands/addCommand');
const deleteNote  = require('./commands/deleteCommand');
const listNotes = require('./commands/listCommand');
const showStats = require('./commands/statsCommand');
const archiveNote = require('./commands/archiveCommand');
const unArchive = require('./commands/unarchiveCommand');
const readSingleNote = require('./commands/readSingleCommand');
const showArchivedNotes = require('./commands/showArchivedCommand');
const updateNote = require('./commands/updateCommand');
const exportNotes = require('./commands/exportCommand');
const command = process.argv[2];
const id = Number(process.argv[3]);
const format = process.argv[3];
const title =  process.argv[3];
const content = process.argv[4];
const tags = process.argv[5];






if(command == "add"){
    if(validateNote(command,title,content,tags)){
        createNote(title,content,tags);   
    }
}
else if (command === 'delete'){
    if(validateId(id)){
        deleteNote(id)
    }
}
else if (command === "list"){
    listNotes()
}
else if(command === "stats"){
    showStats();
}
else if(command === "archive"){
    if(validateId(id)){
        archiveNote(id);    
    }
}
else if (command == "unarchive"){
    if(validateId(id)){
        unArchive(id);
    }
}
else if(command == "showarchive"){
    showArchivedNotes();
}
else if(command == "read"){
    if(validateId(id)){
        readSingleNote(id);
    }
}
else if (command == "export"){
    exportNotes(format);
}
else if (command == "update"){
    if(validateNote(title,content,tags) && validateId(id)){
        updateNote(id,title,content,tags);   
    }
}
else{
    console.log("Invalid command");
}

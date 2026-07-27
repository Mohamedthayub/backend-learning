const fs = require("fs");
const path = require("path");
const formateDate  = require('./utils/formatDate');
const createFile = require('./commands/createCommand');
const readFile = require('./commands/readCommand');
const deleteFile = require('./commands/deleteCommand');
const showFileInfo = require("./commands/infoCommand");
const listFiles = require('./commands/listCommand');
const showCurrDirectory = require("./commands/pwdCommand");
const copyFile = require('./commands/copyCommands');
const searchFiles = require('./commands/searchCommand');
const moveFile = require('./commands/moveCommand');
const renameFile = require('./commands/renameCommand');
const createDirectory = require('./commands/mkdirCommand');
const removeDirectory  = require('./commands/rmdirCommand');
const {validateCreateCommand,validateReadFile,validateFileRename}  = require("./utils/validator");
const command = process.argv[2];
const filename = process.argv[3];
const foldername = process.argv[3];
const newFileName = process.argv[4]
const content = process.argv[4];


if(command == "create"){
    if(validateCreateCommand(filename,content)){
        createFile(filename,content);    
    }
}
if(command == "read"){
    if(validateReadFile(filename)){
        readFile(filename);
    }
}
if(command == "delete"){
    if(validateReadFile(filename)){
        deleteFile(filename);
    }
}
if(command == "list"){
    listFiles();   
}
if(command == "mkdir"){
    if(validateReadFile(foldername)){
        createDirectory(foldername);
    }
}
if(command == "rename"){
    if(validateFileRename(filename,newFileName)){
        renameFile(filename,newFileName);        
    }
}
if(command == "rmdir"){
    if(validateReadFile(foldername)){
        removeDirectory(foldername);        
    }
}
if(command == "info"){
    if(validateReadFile(filename)){
        showFileInfo(filename);
    }
}
if(command == "pwd"){
    showCurrDirectory();
}
if(command == "search"){
    if(validateReadFile(filename)){
        searchFiles(filename);
    }
}
if(command == "move"){
    if(validateReadFile(filename)){
        moveFile(filename);        
    }
}
if(command == "copy"){
    if(validateReadFile(filename)){
        copyFile(filename);
    }
}

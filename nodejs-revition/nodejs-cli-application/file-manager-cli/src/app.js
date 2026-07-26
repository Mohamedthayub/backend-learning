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

const command = process.argv[2];
const filename = process.argv[3];
const foldername = process.argv[3];
const newFileName = process.argv[4]
const content = process.argv[4];

if(command == "create"){
    createFile(filename,content);    
}
if(command == "read"){
    readFile(filename);   
}
if(command == "delete"){
    deleteFile(filename);
}
if(command == "list"){
    listFiles();   
}
if(command == "mkdir"){
    createDirectory(foldername);
}
if(command == "rename"){
    renameFile(filename,newFileName);
}
if(command == "rmdir"){
    removeDirectory(foldername);
}
if(command == "info"){
    showFileInfo(filename);
}
if(command == "pwd"){
    showCurrDirectory();
}
if(command == "search"){
    searchFiles(filename);
}
if(command == "move"){
    moveFile(filename);
}
if(command == "copy"){
    copyFile(filename);
}

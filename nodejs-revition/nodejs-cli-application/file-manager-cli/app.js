const fs = require("fs");
const path = require("path");
const formateDate  = require('./utils/formatDate');
function createFile(filename,content) {
    const filePath = path.join(__dirname, "workspace", filename);

    fs.writeFileSync(filePath,content);

    console.log("✓ File created successfully.");
}

function readFile(filename){
    const filePath = path.join(__dirname, "workspace", filename);

    fs.readFile(filePath,'utf-8', (err,data) => {
        if(err){
            throw err;
        }
        console.log(data);
    });
}

function deleteFile(filename){
    const filePath = path.join(__dirname, "workspace", filename)

    fs.unlink(filePath,(err) => {
        if(err){
            throw err.message;
        }
        console.log("✓ File deleted successfully.");
    });   
}

function listFiles(){
    const filePath = path.join(__dirname, "workspace");
    fs.readdir(filePath,(err,files) => {
        if(err){
            throw err;
        }

        files.forEach((file,index) => {
            console.log(`${index + 1}. ${file}`);
        })
    })
}

function createDirectory(foldername){
    const filePath = path.join(__dirname,"workspace",foldername);
    fs.mkdir(filePath,(err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('✓ Directory deleted successfully.');
    })
}

function renameFile(oldfileName,newfileName){

    const oldfilePath = path.join(__dirname, "workspace",oldfileName);
    const newfilePath = path.join(__dirname,"workspace",newfileName);

    fs.rename(oldfilePath,newfilePath, (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
    console.log("✓ File renamed successfully.");
}

function deleteDirectory(directoryname){ 
    const folderPath = path.join(__dirname,"workspace",directoryname);
    fs.rm(folderPath,{recursive:true},(err) => {
        if(err){
            throw err;
        }
        console.log("✓ Directory deleted successfully.");
    })
}

function showFileInfo(filename){
    const filePath = path.join(__dirname, "workspace", filename)
    fs.stat(filePath,(err,stats) => {
        if(err){
            console.log(err);
        }
        console.log("Name         :",filename.trim());
        console.log("Size         :",stats.size,"bytes");
        console.log("Created      :",formateDate(stats.birthtime));
        console.log("Modified     :",formateDate(stats.mtime));
        console.log("Is File      :",stats.isFile());
        console.log("Is Directory :",stats.isDirectory());
    })
}

function showCurrDirectory(){
    console.log(process.cwd());
}
const command = process.argv[2];
const filename = process.argv[3];
const foldername = process.argv[3];
const newFileName = process.argv[4]
const content = process.argv[4];

if(command == "add"){
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
    deleteDirectory(foldername)
}
if(command == "info"){
    showFileInfo(filename);
}
if(command == "pwd"){
    showCurrDirectory();
}

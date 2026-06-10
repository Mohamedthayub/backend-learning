const  fs = require('fs');

/*
create folder automatically 

*/
const dir  = './notes-folder';

if(!fs.existsSync((dir))){{
    fs.mkdirSync(dir);
    console.log("The Folder Created Successfully");
}}
else{
    console.log("THe folder is Already exist");
}

/// create  a file inside notes-folder;

fs.writeFile('./notes-folder/notes.txt', "This is notes 1" ,(err)  => {
    if(err){
        throw err;
    }
    console.log("The File created Successfully");
});

// copy the file content to another file;
fs.copyFile('./story.txt','./mystory.txt',(err) => {
    if(err){
        throw err;
    }
    console.log("The Story Copied Successfully");
})

// rename the file


fs.rename('./buyath.txt','./thayub.txt',(err) => {
    if(err){
        throw err;
    }
    console.log("Rename Completed");
});

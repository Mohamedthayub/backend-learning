const fs = require('fs');


// create a file with content

fs.writeFile("information.txt","this is My text content" , (err) => {
    if(err){
        throw err;
    }
    console.log("The Created Successfully");
});


// read the file content
fs.readFile('information.txt',{encoding:'utf-8'},(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
});

// append the text content into the file;


fs.appendFile('information.txt',"this text is for appending",(err) => {
    if(err){
        throw err;
    }
    console.log("The Text is appended to the File");
});



// deleting the file from the folder;


fs.unlink('./test.js',(err) => {
    if(err){
        throw err;
    }
    console.log("File deleted Succesfully");
});

const fs = require('fs')
// console.log(fs);


// this both functions are asynchronous function and it won't wait for the completion of the task

fs.writeFile('./message.txt',"Add This is a message from fs module",(err) => {
    if(err){
        throw err;
    }
});

fs.readFile('./message.txt',{encoding:'utf-8'},(err,data) => {
    if(err){
        throw err;
    }
    console.log(data);
    console.log("File is Readed completed");
});
console.log("File is Reading");

const isValid = require('./validators/validateAddNote');

const fs = require('fs');
const path  = require('path');
// console.log(process.argv);
const title = process.argv[2];
const command = process.argv[3];
const content = process.argv[4]
const tags = process.argv[5];
if(isValid(title,content,tags,command)){
    const  note  = {
    "id":1,
    "title": title,
    "content":content,
    "tags":tags.split(","),
    "archived":false
}
console.log(note);
}


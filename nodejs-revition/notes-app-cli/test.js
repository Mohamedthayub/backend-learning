const isvalid = require('./validators/validateAddNote');
const fs = require('fs');
const path  = require('path');
// console.log(process.argv);
const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4]
const tags = process.argv[5];
console.log(tags);
if(isvalid(command,title,content,tags)){
    console.log("All inputs are valid");
}

else{
    console.log("Invalid inputs");
}
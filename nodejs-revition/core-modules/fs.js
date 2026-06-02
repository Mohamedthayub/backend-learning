const fs = require("fs");
// here we write  file synchronously
fs.writeFileSync(
  'message.txt',
  "Hello this is a message from fs module"
);
console.log("File is Created Successfully");


// here we read  file synchronously
console.log("File is Reading");

const data = fs.readFileSync('message.txt',{encoding:'utf-8'});

console.log(data);

console.log("File is Readed completed");
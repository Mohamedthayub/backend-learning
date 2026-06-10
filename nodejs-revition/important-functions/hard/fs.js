const  fs = require('fs');
const path = require('path');

const filePath = path.join('data','users',"thayub.js");
console.log(filePath);

const  filePath2 = path.resolve('data','users','buyath.js');
console.log(filePath2);

/*
the diffrence between path.join() and path.resolve 

path.join()

Combines path segments into a normalized path.

path.resolve()

Builds an absolute path starting from current working directory (unless already absolute).
*/


// need to print  this file extentions

const exts = ["resume.pdf", "photo.png", "notes.txt","thayub.exe"];

for(let  i = 0; i <exts.length; i++){
    const extention = path.extname(exts[i]);
    console.log(exts[i] + " " +  extention);
}


// chatgpt task 1
/*
1. Build path: documents/work/report.pdf
2. Get extension from report.pdf
3. Print full absolute path of that file
*/

// 1. Build path: documents/work/report.pdf
const filepath = path.join("documents","work","report.pdf");
console.log(filepath);

// 2. Get extension from report.pdf

const file = 'report.pdf';
console.log("This is File Extentio ", path.extname(file));

// 3. Print full absolute path of that file

console.log(path.resolve(__dirname));
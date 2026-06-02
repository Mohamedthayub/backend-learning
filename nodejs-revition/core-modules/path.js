const path = require("path");

const filePath = '/home/thayub/developer/backend-revition/nodejs-revition/core-modules/thayub.js';


console.log("Basename of the directory is :" + " "  +  path.basename(filePath));
console.log("Directory name is : "+ " " + path.dirname(filePath));
console.log("Extension name is : " + " " + path.extname(filePath));
console.log("Joined Path  : " + __dirname + "/thayub.js");

console.log("Joined Path : " + path.join(__dirname,"demo","thayub.js")); // here we can also use path.join to join the path instead of using + operator
// this join function will work according to the platform linux or windows and it will automatically add the seperator according to the platform;
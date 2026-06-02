const os = require('os');

console.log('Operating System Platform : ' + os.platform());
console.log("Architecture of the CPU : " + os.arch());
console.log("CPU information : " + os.cpus().length);
console.log("Free Memory :" + Math.round(os.totalmem() / 1024 ** 3), "GB"); 
console.log("Total Memory :" + Math.round(os.freemem() / 1024 ** 3), "GB"); 
console.log("Home Directory : "+os.homedir());
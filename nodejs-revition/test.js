// this is non blocking code ;
console.log("Hello Thayub");

setTimeout(() => {
    console.log("This is a timeout function");
},2000);

console.log("This is the end of the code ");


// this is blocking code;

console.log("The code Starts from here");
for(let i = 0; i<100; i++){
    console.log("This is i :" + i );
}
console.log("This is the End of the code");
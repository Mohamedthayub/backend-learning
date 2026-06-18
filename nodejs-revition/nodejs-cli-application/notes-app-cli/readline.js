// const { read } = require('fs');
const { create } = require('domain');
const { resolve } = require('path');
const readline = require('readline');
// console.log(readline);
const rl = readline.createInterface({
    input:process.stdin,
    input:process.stdout
});


rl.question("what is your name ",(name) => {
    rl.question("what is you age", (age) => {
        const note = {
            "name":name,
            "age": age
        };
        console.log(note);
        rl.close();
    })
});
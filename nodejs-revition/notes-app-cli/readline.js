
const readline = require('readline');


function  addCommand() {
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.question("Title" ,(title) => {
        rl.question("Content" , (content) => {
            rl.question("Tags", (tags) => {
                console.log("Note Added");
                rl.close();
            })
        })
    })
}
addCommand();
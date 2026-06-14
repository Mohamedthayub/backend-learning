/*
what is callback ? 

Callbacks in JavaScript
A callback is simply a function that is passed as an argument to another function and is executed later.

*/
function sayName(name){
    console.log('Hello' + ' ' + name);
}
function process(callback){
    const  username = "Thayub";
    callback(username);
}
process(sayName);



function saveNote(note,callback) {
    console.log("Saving note ...");

    setTimeout(() => {
        console.log("Note Saved")
        callback();
    },2000);
}
saveNote("Learn Nodejs",() => {
    console.log("Now Show success message");
})


/*
output: 

first saving note will run then 
note saved function will run after  now show success message will run after 2 second
*/

/*
The One Sentence to Remember

A callback is a function passed into another function so that it can be executed later, usually after an asynchronous task has finished.
*/
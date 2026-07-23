// function greet(name){
//     console.log("Hello" + name);
// }
// function processUser(callback){
//     const username = "Thayub";
//     greet(username);
// }
// processUser();


// function  saveNote(note){
//     console.log("Note Saved");
// }

// // this is what the example for callback

// function noteSave(callback,note){
//     console.log('Note saving');

//     setTimeout(() => {
//         callback(note) // here we pass the callback function to execute later
//     },2000);
// }
// noteSave(saveNote,'task going to end');

/*
what is Callback ? 
the callback  is a function we passed as argument to anther function execute later
*/

const promise =  new Promise((resolve,reject) => {
    const success = true;
    if(success){
        resolve("Task Completed")
    }
    else{
        reject("Task Failed");
    }
})
// console.log(promise);
/*
promise has three States: 
pending  -- pending means the api call created now or waiting
rejected -- the promise cancel bacause of the network issue server issue
fulfilled --  promise succesfully commpleted  or success
*/

// promise.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })


/*
.then will run when the promise get success and 
.catch will run when the promise get failed
this is how these two function works
*/
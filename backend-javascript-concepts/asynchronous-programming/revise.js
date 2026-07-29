// function saveNote(note,callback){
//     console.log("Saving Note");
//     setTimeout(() => {
//         console.log("Note Saved");
//         callback();
//     },2000);
// }
// saveNote("Learn Javascript",() => {
//     console.log("Now Show success message");
// });

function fetchUser(){
    return new Promise((resolve,reject) => {
        console.log("Fetching User..");
        setTimeout(() => {
            resolve({
                id:1,
                name:'Thayub'
            })
        },3000)
    })
}
fetchUser()
.then((res) => {
    console.log(res); // here is where the data comes
})
.catch((err) => {
    console.log(err);
});

/*
A Promise is an object that represents the future result of an asynchronous operation, allowing you to handle success and failure in a cleaner and more organized way than callbacks.
*/
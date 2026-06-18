
const  promise = new Promise((resolve,reject) => {
    const result = true;
    if(result){
        resolve("Task Completed");
    }
    else{
        reject("Task Failed");
    }
});
// this is how we create a promise;


// function fetchUser(){
//     return new Promise((resolve,reject) => {
//         console.log("Fetching User...");
//         setTimeout(() => {
//             resolve({
//                 id:1,
//                 name:"John"
//             });
//         },2000);
//     })   
// }
// fetchUser()
//      .then((res) =>{
//         console.log("User Received.");
//         console.log(res);
//      })
//      .catch((error) => {
//         console.log(error);
//      });
     

/*
What is the await Keyword?

await pauses the execution of an async function until a Promise is completed.
*/

function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                id:1,
                name:"Mohideen Thayub"
            });
        },3000);
    })
}

async function getUser(){
    try{
        console.log("Stated fetching User....");
        const user = await fetchData();
        console.log(user);
        console.log("End");   
    }
    catch(error){
        console.log(error);
    }
}
getUser()

/*
what is happening here await it waits until fetchData finish and you should use await only inside async 

try catch  is used  to handle the errors inside function 
*/


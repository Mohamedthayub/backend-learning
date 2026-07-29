
/*
3. Promise.race()
What is Promise.race()?

Promise.race() returns the result of the first Promise that completes.

It does not care whether it succeeds or fails.

Think:

"Whichever finishes first wins."
*/

function getProducts(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Products Data ");
        },1000);
    })
}

function getReviews(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Reviews Data");
        },3000);
    })
}

Promise.race([getProducts(),getReviews()])
.then((result) => {
    console.log(result);
})
.catch((error) =>{
    console.log(error);
})

// Promise race api will wait which promise complete first that result it will show

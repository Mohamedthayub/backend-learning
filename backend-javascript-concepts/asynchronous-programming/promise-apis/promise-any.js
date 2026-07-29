/*
4. Promise.any()
What is Promise.any()?

Promise.any() returns the first successfully resolved Promise.

It ignores failures.

Think:

"I only need one successful result."
*/


function getProducts(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Product Data is not coming");
        },2000);
    })
}

function getReviews(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Reviews Data is not coming");
        },1000);
    })
}

Promise.any([getProducts(),getReviews()])
.then((result) => {
    console.log(result);
})
.catch((error) =>{
    console.log(error);
})


/*

promise any will execute first succesful resolve promise 
and it ignores failures 


if all promises get fails . it will throw the affregateError : All Promises were rejected;
*/

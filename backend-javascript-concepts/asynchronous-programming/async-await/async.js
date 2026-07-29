async function getName(){
    return "Thayub";
}

getName()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})


// async is a keyword that makes our function to asynchoronous function 
/*What is the async Keyword?

async is used before a function.

Example:

async function hello() {
    return "Hello";
}

An async function always returns a Promise.

The above code is internally:

function hello() {
    return Promise.resolve("Hello");
}

async function always returns promise 


*/

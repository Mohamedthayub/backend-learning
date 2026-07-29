/*
1. Promise.all()
What is Promise.all()?

Promise.all() runs multiple Promises in parallel and waits until all Promises are completed successfully.

If all succeed → returns all results.
If one fails → immediately rejects.

Think:
"I need every task to complete. If even one task fails, the whole operation fails."
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
            resolve("Reviews Data");
        },2000);
    })
}

function getRecommendations(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Recommandations Data");
        },2000);
    })
}

Promise.all([getProducts(),getReviews(),getRecommendations()])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log(error);
})

// promise api is used to run promise parellel every promise runs parallel 

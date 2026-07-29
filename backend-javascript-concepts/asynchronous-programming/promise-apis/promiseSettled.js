/*
2. Promise.allSettled()
What is Promise.allSettled()?

Promise.allSettled() waits for all Promises to finish, whether they succeed or fail.

It never rejects.

Think:

"I want the result of every task, even if some fail."
*/


function getProducts(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Products Data ");
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
            resolve("Recommendation data");
        },2000);
    })
}


Promise.allSettled([getProducts(),getRecommendations(),getReviews()])

.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})


// promise allSettled will wait to finish whether will  it fails or success;


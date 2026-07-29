function stepOne(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Step  1 completed");
        },1000);
    })
}
function stepTwo(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Step 2 Completed");
        },1000); 
    })
}

function stepThree(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Step 3 Completed");
        },1000);
    })
}

function stepFour(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Step 4 Completed");
        },1000);
    })
}
stepOne()
.then((result) => {
    console.log(result)
    return stepTwo(result);
})
.then((result) => {
    console.log(result);
    return stepThree(result);
})
.then((result) => {
    console.log(result);
    return stepFour(result);
})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})
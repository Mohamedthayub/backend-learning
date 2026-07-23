function  fetchUser() {
    return new Promise((resolve,reject) => {
        console.log("Fetching User..");
        setTimeout(()  => {
            resolve({
                id:1,
                name:"Thayub"
            })
        },2000);
    })
}

fetchUser().then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
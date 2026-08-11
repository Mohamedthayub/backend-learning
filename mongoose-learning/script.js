const User = require("./models/userModel");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jvlcode').then(() => {
    console.log("Connected");
})
.catch(() => {
    console.log("Connection error");
});


async function run(){
    try{ 
        // const user = await User.exists({name:'thayub'}) // exists method will if user is exist it will return the userId
        // const user  = await  User.findById('6a68beb1f4a7cd5217e3e2e8'); // findById method  will get the  user by id 
        // const user  = await User.findOne({name:'thayub'}); // findOne method will find the first document
        const user = await User.findById('6a68c7ab1863374b93877bae') // this is our custom schema validation function
        console.log(user);
    }

    catch(err){
        console.log(err.message);
    }
}

run();
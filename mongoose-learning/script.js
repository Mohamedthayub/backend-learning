const User = require("./models/userModel");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jvlcode')    
.then((res)=> {
    console.log("Connected")
})
.catch((error) => {
    console.log("Error",error);
});

// const ob
async  function createUser() {
    try{
        // console.log(err);
        const  user = await User.create({
            name:"Logesh",
            age:20
        })
        user.name = "Venkat"
        await user.save();
        console.log(user);
    }
    catch(error){
        console.log("Error Crating Student",error);
    }
}

createUser();
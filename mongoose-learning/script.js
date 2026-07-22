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
        const  user = await User.create({
            name:"Vajiha uvva",
            age:10,
            email:'thayub@gmail.com',
            hobbies:["playing"],
            address:{
                city:"Tirunelveli",
                street:'South Thaikka Street'
            }
        })
        await user.save();
        console.log(user);
    }
    catch(e){
        console.log(e.message);
    }
}

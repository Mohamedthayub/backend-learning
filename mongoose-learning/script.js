const User = require("./models/userModel");
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jvlcode')    
.then((res)=> {
    console.log("Connected")
})
.catch((error) => {
    console.log("Error",error);
});


async  function createUser() {
    try{
        const user = await User.where('name').gt(9)
        console.log(user);
    }
    catch(e){
        console.log(e.message);
    }
}

createUser();

/*
User.findById('6a610b92099337bb183b7b58') -- find the user by id 
await User.where('name').equals('Mohamed') -- this method provide by mongoose
*/

const  mongoose = require('mongoose');
const  User = require("./models/userModel");

mongoose.connect('mongodb://127.0.0.1:27017/jvlcode')
.then(() => {
    console.log("connected");
})
.catch((err) => {
    console.log('connection error');
})

async function run(){
    const newUser = await User.create({
        name:'Logesh',
        age:20,
        hobbies:['sports','Music'],
        address:{
            street:'South Thaikka Street'
        }
    })
    console.log(newUser);
}
run();
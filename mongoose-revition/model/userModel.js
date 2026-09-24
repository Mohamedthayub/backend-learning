const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    age:{
        type:Number,
        min:18
    },
    isActive:{
        type:Boolean,
        dafault:true
    }    
},
{
    timestamps:true
});
const userModel = mongoose.model("User",userSchema);
module.exports = userModel;
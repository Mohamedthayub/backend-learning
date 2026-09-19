const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{ 
        type:String,
        required:true     
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:18
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user" 
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true
});
const userModel = mongoose.model("User",userSchema);
module.exports = userModel;
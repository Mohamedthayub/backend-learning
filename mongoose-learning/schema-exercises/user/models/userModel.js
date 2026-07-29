const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        min:18
    },
    role:{
        enum:['user','admin'],
        type:String,
        default:"user"
    },
    updatedAt:Date,
    createdAt:{
        timestamps:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

const userModel = mongoose.model("User",userSchema);
module.exports = userModel;
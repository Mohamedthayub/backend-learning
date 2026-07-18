const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    age:Number,        
    email:String,
    createdAt:Date,
    updateAt:Date,
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:{
        city:String,
        street:String
    }
    
})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;

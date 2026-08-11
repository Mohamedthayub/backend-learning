const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city:String,
    street:String
});

const userSchema = mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:10,
        max:20,
        validate:{
            validator: v => v % 2 == 0 , // here we write custom validation 
            message:props =>`${props.value} is not even  number`  // here we print that error
        } // here we write our custom validation function
    },
    email:{
        type:String,  // email type is string
        required:true,// email is required to this field
        lowercase:true  // this email will be fully lowercase;
    }, 
    createdAt:{
        type:Date,
        defautlt:() => Date.now() // here we give  the default time to this field;
    },
    updateAt:Date,
    bestFriend :{
        type:    mongoose.Schema.ObjectId,
        ref:"users"
    },

    hobbies:[String],
    address:addressSchema    
});
// this is custom schema validation
userSchema.methods.sayHi = function(){
    console.log(`my name is ${this.name}`)
} // here we say hi with user name;

userSchema.statics.findByName = function(name){
   return this.where({name:name})
}  // this function  will get the user by name;

userSchema.statics.findById = function(id){
    return this.where({_id:id})
} // this function i write by myself


const userModel  = mongoose.model('user',userSchema);
module.exports = userModel;
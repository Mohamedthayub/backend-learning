const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requied:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        enum:['electronics','Cloting','books','food']   
    },
    stock:{
        default:0,
        type:Number,
        min:0   
    },  
    ratings:{
        default:0,
        type:Number,
        min:0,
        max:5
    },
    isAvailable:{
        type:Boolean,
        default:true
    }
})
const productModel = mongoose.model("Product",productSchema);
module.exports  = productModel;
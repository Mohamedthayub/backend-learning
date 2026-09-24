const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    category:{
        type:String,
        required:true,
        enum:["electronics","clothing","books","food"]
    },
    stock:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    isAvailable:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
});


const productModel = mongoose.model("ProductModel",productSchema);
module.exports = productModel;

/*

*/
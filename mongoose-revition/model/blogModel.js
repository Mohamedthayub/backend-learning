const mongoose = require('mongoose');
const  blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength:5
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
        ref:"User"
    },
    tags:[
        {
            type:String,
            enum:[
                "javascript",
                "nodejs",
                "mongodb"
            ]
        }
    ],
    likes:{
        type:Number,
        default:0,
        min:0
    },
    published:{
        type:Boolean,
        default:false
    }    
},
{
    timestamps:true
})

const BlogModel = mongoose.model("Blog",blogSchema);
module.exports = BlogModel;
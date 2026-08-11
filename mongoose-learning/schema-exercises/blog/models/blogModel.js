const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        required:true,
        minLength:5,
        type:String
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    tags:[{
        type:String,
        enum:[
            'javascript',
            'nodejs',
            'mongodb'
        ]
    }]
    ,
    likes:{
        type:Number,
        default:0
    },
    published:{
        type:Boolean,
        default:false
    }
});
const Blog = mongoose.model("Blog",blogSchema);
module.exports  = Blog;
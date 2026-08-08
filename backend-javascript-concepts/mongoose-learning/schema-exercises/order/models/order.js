const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    products:[
        {
            products:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                min:1
            }
        }
    ],
    totalAmount:{
        type:Number,
        required:true,
        min:0
    },
    status:{
        type:String,
        enums:[
            "pending",
            "processing",
            "shipped",
            "delivered",
            "cancelled"
        ],
        default:"pending"
    },
    paymentStatus:{
        type:String,
        enum:[
            "pending",
            "paid",
            "failed"
        ],
        default:"pending"
    },
    timestamps:true
})

const order = mongoose.model("order",orderSchema);
module.exports = order;
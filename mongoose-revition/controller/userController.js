const userModel = require("../model/userModel");
exports.getUser = async (req,res,next) => {
    const users = await userModel.find();
    res.status(200).json({
        success:true,
        message:"get all users",
        users
    })
}

exports.createUser = async (req,res,next) => {
    try{
        const user = await userModel.create(req.body);
       res.status(200).json({
           success:true,
           message:user
        })
    }
    catch(err){
        next(err);
    }
   
}
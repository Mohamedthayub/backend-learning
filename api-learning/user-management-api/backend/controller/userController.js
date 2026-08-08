const userModel = require('../Models/User');

exports.createUser = async (req,res,next) => {
    const user = await  req.body;
    const saved = await userModel.create(user);
    res.json({
        success:true,
        saved
    });
}

exports.getUsers = async (req,res,next) => {
    const users  = await userModel.find();
    console.log(users);
    res.json({
        success:true,
        users
    });
}

exports.getUserById  = async (req,res,next) => {
    try{
        const users = await userModel.find()
        const singleUser = await userModel.findById(req.params.id);
        console.log(users);
        res.json({
            success:true,
            singleUser 
        });
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
}

exports.updateUser = async (req,res,next) => {
    try{
        const updatedUser = await  userModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.json({
            success:true,
            updatedUser
        });   
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
}

exports.deleteUser =  async (req,res,next) => {
    try{
        await userModel.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            message:"user deleted successfully"
        });
    }
    catch(error){
        res.json({
            success:false,
            message:error.message
        });
    }
}
const userModel   = require('../model/User');

exports.getUsers = async (req, res, next) => {
    try{
        const users = await userModel.find();
        if(users){
            res.status(200).json({
                success:true,
                users
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"Users not found" 
            })
        }
    }
    catch(err){
        next(err)
    }
};

exports.createUser = async (req,res,next) =>{
    try{
        const user = await userModel.create(req.body);
        res.status(201).json({
            success:true,
            user
        })
    }
    catch(err){
        next(err);
    }
}
exports.getUserById = async (req,res,next) => {
    try{
        const user = await userModel.findById(req.params.id);
        res.status(200).json({
            success:true,
            user
        })
    }
    catch(err){
        next(err);
    }
}


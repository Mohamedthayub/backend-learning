const userModel   = require('../model/User');


exports.getUsers = async (req,res,next) => {
    try{
        const {name,age} = req.query;
        // const filter = {};

        const users = await userModel.find({name,age});
        // const users = await  userModel.find();
        res.status(200).json({
            success:true,
            users
        });
    }
    catch(error){
        next(error);
    }
    
}

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
// exports.get
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




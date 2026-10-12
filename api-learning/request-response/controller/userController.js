const userModel   = require('../model/User');


exports.getUsers = async (req,res,next) => {
    try{
        const {sort} = req.query;
        const users = await userModel.find().sort(sort);
        res.status(200).json({
            success:true,
            users
        });
    }
    catch(error){
        next(error);
    }
    
}
// http://localhost:4000/api/users?sort=-age we sort  the age descening order
// http://localhost:4000/api/users?sort=age we sort the age by ascending order

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




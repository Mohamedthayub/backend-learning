const userModel   = require('../model/User');

exports.getUsers = async (req, res, next) => {
    try{
        let {name,age} = req.query;
        let filter = {};
        if(name){
            filter.name = name;
        }
        if(age){
            filter.age = age;
        }
        const users = await userModel.find(filter);
        res.status(200).json({
            success:true,
            users
        });
    }
    catch(err){
        next(err)
    }
};
// exports.getUsers = async (req,res,next) => {
//     try{
//         const data = req.query;
//         console.log(data);
//     }
//     catch(err){
//         next(err);
//     }
// }
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


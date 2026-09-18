const userModel   = require('../model/User');

// http://localhost:4000/api/users?name=aak
exports.getUsers = async (req, res, next) => {
    try{
        let {name} = req.query;
        let filter = {};
        if(filter){
            filter.name = {
                $regex:name,
                $options:"i"
            }
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


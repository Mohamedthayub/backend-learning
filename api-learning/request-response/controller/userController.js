const userModel   = require('../model/User');

// http://localhost:4000/api/users?sort=age sort the age ascending 
// http://localhost:4000/api/users?sort=-age sort the age descending 
exports.getUsers = async (req, res, next) => {
    try{
        let {sort} = req.query;

        const ages = await userModel.find().sort(sort);
        res.status(200).json({
            success:true,
            ages
        });
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


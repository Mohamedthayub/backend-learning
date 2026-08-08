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
    
    res.json({
        success:true,
        users
    });
}
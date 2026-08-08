const express = require('express');
const router = express.Router();
const User  = require('../model/User');

router.get('/',async (req,res) => {
    const users = await User.find();
    console.log(users);
    res.status(201).json(users);
});

router.get('/:id',async (req,res) =>{
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
});

router.post('/',async (req,res) => {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);  
});

router.put('/:id', async (req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(user);
});

router.delete("/:id",async (req,res) => {
    await  User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
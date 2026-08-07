const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all users
router.get('/',async (req,res) => {
    const  users = await User.find();
    console.log(users);
    res.status(201).json(users);
});
// get single user with id
router.get('/:id',async (req,res) => {
    const  users = await User.findById(req.params.id);
    res.status(200).json(users);
});
// create the user with name and email
router.post('/',async (req,res) => {
    const user = new User(req.body);
    const saved  = await user.save();
    res.status(201).json(saved);
});

// update the user by id 
router.put('/:id',async (req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(user);
});
// delete the user by id
router.delete('/:id',async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});


module.exports = router;
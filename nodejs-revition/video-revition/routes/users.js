const express = require('express');
const router = express.Router();
const User = require('../models/User');

// create a user
router.post("/", async (req,res) => {
    const user = new User(req.body);
    const saved  = await user.save();
    res.status(200).json(saved);
});
// get all users
router.get("/",async (req,res) => {
    // this is find method get the all user from database;
    const users =  await User.find();
    res.status(201).json(users);
});

// get single user
router.get("/:id" , async(req,res) => {
    const users = await  User.findById(req.params.id);
    res.status(201).json(users)
});

// update the user
router.put("/:id", async (req,res) => {
    const user =  await  User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(user);
});

// delete the user 
router.delete("/:id",async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
})

module.exports = router;
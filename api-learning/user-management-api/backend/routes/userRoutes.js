const express = require('express');
const router = express.Router();
const {createUser,getUsers} = require('../controller/userController');

router.route('/users').post(createUser);
router.route('/allUsers').get(getUsers);

module.exports = router;
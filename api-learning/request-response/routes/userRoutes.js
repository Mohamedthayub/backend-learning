const express = require('express');
const router = express.Router();
const {getUsers,createUser,getUserById} = require('../controller/userController');

router.route('/users').get(getUsers).post(createUser);
router.route('/users/:id').get(getUserById);

module.exports = router;
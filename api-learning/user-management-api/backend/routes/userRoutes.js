const express = require('express');
const router = express.Router();
const {createUser,getUsers,getUserById,updateUser,deleteUser} = require('../controller/userController');

router.route('/users').post(createUser);
router.route('/allUsers').get(getUsers);
router.route('/users/:id').get(getUserById);
router.route('/users/:id').put(updateUser);
router.route('/users/:id').delete(deleteUser);

module.exports = router;
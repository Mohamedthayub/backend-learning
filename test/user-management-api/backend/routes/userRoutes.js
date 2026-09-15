const express = require('express');
const  router = express.Router();
const {getUsers,createUser,getUserById,updateUser,deleteUser} = require('../controller/userController');

router.route('/users').get(getUsers).post(createUser);
router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
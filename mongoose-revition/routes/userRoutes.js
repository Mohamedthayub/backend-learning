const express = require('express');
const router = express.Router();
const {getUser,createUser}  = require('../controller/userController');

router.route('/users').get(getUser).post(createUser)



module.exports = router;
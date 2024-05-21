var express = require('express');
var router = express.Router();

var auth = require('../controllers/authorizationController')
var UserController = require('../controllers/userController');
const userController = require('../controllers/userController');

router.delete('/delete',
    auth.authenticate,
    auth.checkRole(['admin']),
    UserController.delete
)

router.patch('/update',
    auth.authenticate,
    auth.checkRole(['admin']),
    userController.update
)

module.exports = router;
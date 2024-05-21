var express = require('express');
var router = express.Router();

var UserController = require('../controllers/authenticationController')
var ValidateController = require('../controllers/validateController')

router.post('/register',
  ValidateController.validateRegister,
  ValidateController.checkValidation,
  UserController.register
)

router.post('/login', UserController.login)

module.exports = router;

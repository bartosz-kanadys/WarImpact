var express = require('express');
var router = express.Router();


var User = require('../database/models/UserModel')
var AuthController = require('../controllers/authController')
var ValidateController = require('../controllers/validateController')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',
  ValidateController.validateRegister,
  ValidateController.checkValidation,
  AuthController.register
)

router.post('/login', AuthController.login)

module.exports = router;

var express = require('express');
var router = express.Router();

var User = require('../database/models/UserModel')
var AuthController = require('../controllers/authController')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

module.exports = router;

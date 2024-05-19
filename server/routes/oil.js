var express = require('express');
var router = express.Router();

var Oil = require('../database/models/OilModel')

var auth = require('../controllers/authController')
var resource = require('../controllers/resourcesController')


var url = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'


router.get('/getFromAPI', (req, res) => resource.getFromAPI(req, res, Oil, url) );

router.get('/getPrice', (req, res) => resource.getPrice(req, res, Oil))

router.get('/getAll', (req, res) => resource.getAll(req, res, Oil));

router.delete("/deleteAll",
  auth.authenticate,
  auth.checkRole(['admin', 'root']),
  (req, res) => resource.deleteAll(req, res, Oil)
)

module.exports = router;

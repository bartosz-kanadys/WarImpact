var express = require('express');
var router = express.Router();

var Oil = require('../database/models/OilModel')
var Copper = require('../database/models/CopperModel')

var auth = require('../controllers/authController')
var resource = require('../controllers/resourcesController')
var convert = require('../controllers/convertController')


const urlOil = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'
const urlCopper = 'https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=demo'


router.get('/:typ/getFromAPI', (req, res, next) =>{
  convert.stringToModel(req, res, next).then(resource.getFromAPI(req, res, req.model, req.url))
})

router.get('/:typ/getPrice', (req, res, next) => {
  convert.stringToModel(req, res, next).then(resource.getPrice(req, res, req.model))
})

router.get('/:typ/getAll', (req, res, next) => {
  convert.stringToModel(req, res, next).then(resource.getAll(req, res, req.model))
});

router.delete("/:typ/deleteAll",
  auth.authenticate,
  auth.checkRole(['admin', 'root']),
  (req, res, next) => {
    convert.stringToModel(req, res, next).then(resource.deleteAll(req, res, req.model))
  }
)

module.exports = router;

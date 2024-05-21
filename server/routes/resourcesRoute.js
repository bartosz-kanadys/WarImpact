var express = require('express');
var router = express.Router();

var auth = require('../controllers/authorizationController')
var resource = require('../controllers/resourcesController')
var convert = require('../controllers/convertController')

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

router.get('/loadAll',  resource.loadAll)

module.exports = router;

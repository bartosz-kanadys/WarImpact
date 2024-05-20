var express = require('express');
var router = express.Router();

var conflictsController = require('../controllers/conflictsController')

router.get('/getConflicts', conflictsController.getConflict)

router.get('/getConflictByDate', conflictsController.getConflictByDate)

router.get('/loadAll', conflictsController.loadAll)


module.exports = router;

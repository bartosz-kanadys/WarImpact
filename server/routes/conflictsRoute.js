var express = require('express');
var router = express.Router();

var conflictsController = require('../controllers/conflictsController');
const authorizationController = require('../controllers/authorizationController');

router.get('/getConflicts', authorizationController.authenticate, conflictsController.getConflict)

router.get('/getConflictByDate', authorizationController.authenticate, conflictsController.getConflictByDate)

router.get('/loadAll', authorizationController.authenticate, conflictsController.loadAll)

module.exports = router;

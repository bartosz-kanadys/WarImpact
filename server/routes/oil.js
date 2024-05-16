var express = require('express');
var router = express.Router();

var url = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'

router.get('/getOil', function (req, res, next) {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      res.json(json.data)
    })

});

module.exports = router;

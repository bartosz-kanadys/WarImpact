var express = require('express');
var router = express.Router();

//var sequelize = require('../database/sequelize')
var Oil = require('../database/models/OilModel')

var url = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'

router.get('/getOilFromAPI', function (req, res, next) {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      json.data.forEach(element => {
        Oil.create(
          {
            date: new Date(element.date),
            price: element.value,
          }
        );
      });

     // res.json(json.data)
     res.send("Do bazy danych dodano historie cen baryłki ropy od roku 1987")

    })

});

router.get('/getAllOils', function(req, res) {
  Oil.findAll({
    where: {},
    attributes: ['date', 'price'],
  })
    .then(data => res.json(data))
    .catch(err => {
      console.error('Błąd w trakcie pobierania olejów:', err);
      res.status(500).json({ error: 'Wystąpił błąd podczas pobierania olejów.' });
    });
});


router.delete("/deleteAll", function(req,res){
  Oil.destroy({
    where: {},
    truncate: true
  })
  res.send("Usunięto wszystko z tabeli Oils")
})



module.exports = router;

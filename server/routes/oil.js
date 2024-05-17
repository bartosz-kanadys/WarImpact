var express = require('express');
var router = express.Router();

var Oil = require('../database/models/OilModel')

var url = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'


router.get('/getFromAPI', async (req, res, next) => {
  await fetch(url)
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
     res.send("Do bazy danych dodano historie cen baryłki ropy od roku 1987")
    })
});

router.get('/getPrice', async (req, res) => {
  if (req.query.day != null) {
    var date = req.query.year+"-"+req.query.month+"-"+req.query.day
  } else{
    var date = req.query.year+"-"+req.query.month+"-01"
  }
  
  await Oil.findOne({
    where:{date: date},
    attributes: ['date', 'price']
  }) 
  .then(data => res.json(data))
  .catch(err => {
    console.error('Błąd w trakcie pobierania danych:', err);
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych.' });
  });
})

router.get('/getAll', async(req, res) => {
  await Oil.findAll({
    where: {},
    attributes: ['date', 'price'],
  })
    .then(data => res.json(data))
    .catch(err => {
      console.error('Błąd w trakcie pobierania danych:', err);
      res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych.' });
    });
});

router.delete("/deleteAll", async(req,res) => {
  await Oil.destroy({
    where: {},
    truncate: true
  })
  res.send("Usunięto wszystko z tabeli Oils")
})



module.exports = router;

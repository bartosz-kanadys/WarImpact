const { Model } = require('sequelize')
var User = require('../database/models/UserModel')
var roles = require('../roles')

module.exports = {
    async getAll(req, res, model) {
        await model.findAll({
            where: {},
            attributes: ['date', 'price'],
        })
            .then(data => res.json(data))
            .catch(err => {
                console.error('Błąd w trakcie pobierania danych:', err);
                res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych.' });
            });
    },

    async getPrice(req, res, model) {
        if (req.query.day != null) {
            var date = req.query.year + "-" + req.query.month + "-" + req.query.day
        } else {
            var date = req.query.year + "-" + req.query.month + "-01"
        }

        await model.findOne({
            where: { date: date },
            attributes: ['date', 'price']
        })
            .then(data => res.json(data))
            .catch(err => {
                console.error('Błąd w trakcie pobierania danych:', err);
                res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych.' });
            });
    },

    async deleteAll(req, res, model) {
        await model.destroy({
            where: {},
            truncate: true
        })
        res.send("Usunięto wszystko z tabeli Oils")
    },

    async getFromAPI(req, res, model, url) {
        await fetch(url)
        .then(res => res.json())
        .then(json => {
          json.data.forEach(element => {
            model.create(
              {
                date: new Date(element.date),
                price: element.value,
              }
            );
          });
          res.send("Do bazy danych dodano historie cen baryłki ropy od roku 1987")
        })
    }

}
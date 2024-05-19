const { Model } = require('sequelize')
const sequelize = require('../database/sequelize');
var request = require('request');

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
        try {
            const response = await fetch(url);
            const json = await response.json();

            const transaction = await sequelize.transaction();
            try {
                for (const element of json.data) {
                    await model.upsert({
                        date: new Date(element.date),
                        price: parseFloat(element.value).toFixed(2),
                    }, { transaction });
                }
                await transaction.commit();
                res.send('Transaction committed successfully. \n Do bazy danych dodano historie cen surowca');
            } catch (error) {
                await transaction.rollback();
                res.status(500).send('Transaction rolled back due to an error: ' + error.message);
            }
        } catch (err) {
            res.status(500).send('Błąd w trakcie pobierania danych: ' + err.message);
        }
    },

    async loadAll(req, res, next) {
        let host = "http://localhost:5000/res"
        console.log(host)
        try {
            await fetch(host + '/oil/getFromAPI').then(res => {}),
            await fetch(host + '/copper/getFromAPI').then(res => {}),
            await fetch(host + '/aluminium/getFromAPI').then(res => {}),
            await fetch(host + '/coffee/getFromAPI').then(res => {}),
            await fetch(host + '/corn/getFromAPI').then(res => {}),
            await fetch(host + '/cotton/getFromAPI').then(res => {}),
            await fetch(host + '/gas/getFromAPI').then(res => {}),
            await fetch(host + '/sugar/getFromAPI').then(res => {}),
            await fetch(host + '/wheat/getFromAPI').then(res => {}),

            res.status(200).send('sukces')
        } catch (error) {
            res.send('error')
        }
    }
}
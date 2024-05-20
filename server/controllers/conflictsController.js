const sequelize = require('../database/sequelize');
var dotenv = require('dotenv')
dotenv.config()

const { Op } = require("sequelize");
const conflicts = require('../conflicts.json');
const Conflict = require('../database/models/ConflictModel')

module.exports = {
    async getConflict(req, res) {
        await Conflict.findAll({
            where: req.body,
            attributes: ['name', 'begin', 'end', 'localization', 'victims'],
        })
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error('Błąd w trakcie pobierania danych:', err);
                res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych.' });
            });
    },

    async getConflictByDate(req, res) {
        const from = new Date(req.body.from)
        const to = new Date(req.body.to)
        await Conflict.findAll({
            where: {
                [Op.and]: [{
                    begin: {
                        [Op.gte]: from
                    },
                    end: {
                        [Op.lte]: to
                    }
                }]
            },
            attributes: ['name', 'begin', 'end', 'localization', 'victims'],
        })
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error('Błąd w trakcie pobierania danych:', err);
                res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych.' });
            });
    },

    async loadAll(req, res) {
        const transaction = await sequelize.transaction();
        try {
            for (const element of conflicts) {
                await Conflict.upsert({
                    name: element.name,
                    begin: new Date(element.begin),
                    end: new Date(element.end),
                    localization: element.localization,
                    victims: element.victims
                }, { transaction });
            }
            await transaction.commit();
            res.status(200).send('Transaction committed successfully');
        } catch (error) {
            await transaction.rollback();
            res.status(500).send('Transaction rolled back due to an error: ' + error.message);
        }
    }
}
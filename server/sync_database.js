const sequelize = require('./database/sequelize');

var Oil = require('./database/models/OilModel')
var Copper = require('./database/models/CopperModel')
var Gas = require('./database/models/GasModel')
const Aluminium = require('./database/models/AluminiumModel')
const Coffee = require('./database/models/CoffeeModel')
const Corn = require('./database/models/CornModel')
const Cotton = require('./database/models/CottonModel')
const Sugar = require('./database/models/SugarModel')
const Wheat = require('./database/models/WheatModel')

async function syncDatabase() {
    await sequelize.sync();
    console.log('Database synchronized.');
}
syncDatabase()

//run: node sync_database.js


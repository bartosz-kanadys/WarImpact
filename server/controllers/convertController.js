var Oil = require('../database/models/OilModel')
var Copper = require('../database/models/CopperModel')
var Gas = require('../database/models/GasModel')
const Aluminium = require('../database/models/AluminiumModel')
const Coffee = require('../database/models/CoffeeModel')
const Corn = require('../database/models/CornModel')
const Cotton = require('../database/models/CottonModel')
const Sugar = require('../database/models/SugarModel')
const Wheat = require('../database/models/WheatModel')

const urlOil = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'
const urlCopper = 'https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=demo'
const urlGas = 'https://www.alphavantage.co/query?function=NATURAL_GAS&interval=monthly&apikey=demo'
const urlAluminium = 'https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo'
const urlWheat = 'https://www.alphavantage.co/query?function=WHEAT&interval=monthly&apikey=demo'
const urlCorn = 'https://www.alphavantage.co/query?function=CORN&interval=monthly&apikey=demo'
const urlCotton = 'https://www.alphavantage.co/query?function=COTTON&interval=monthly&apikey=demo'
const urlSugar = 'https://www.alphavantage.co/query?function=SUGAR&interval=monthly&apikey=demo'
const urlCoffee = 'https://www.alphavantage.co/query?function=COFFEE&interval=monthly&apikey=demo'

module.exports = {
    async stringToModel(req, res, next) {
        const resource = req.params.typ
        switch (resource) {
            case "oil":
                req.model = Oil
                req.url = urlOil
                break;
            case "copper":
                req.model = Copper
                req.url = urlCopper
                break
            case "gas":
                req.model = Gas
                req.url = urlGas
                break
            case "aluminium":
                req.model = Aluminium
                req.url = urlAluminium
                break
            case "wheat":
                req.model = Wheat
                req.url = urlWheat
                break
            case "corn":
                req.model = Corn
                req.url = urlCorn
                break
            case "cotton":
                req.model = Cotton
                req.url = urlCotton
                break
            case "sugar":
                req.model = Sugar
                req.url = urlSugar
                break
            case "coffee":
                req.model = Coffee
                req.url = urlCoffee
                break
            default:
                res.send("Błędna nazwa surowca")
                break;
        }
    }
}
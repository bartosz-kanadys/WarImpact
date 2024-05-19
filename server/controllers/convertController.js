var Oil = require('../database/models/OilModel')
var Copper = require('../database/models/CopperModel')
var Gas = require('../database/models/GasModel')
const Aluminium = require('../database/models/AluminiumModel')

const urlOil = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'
const urlCopper = 'https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=demo'
const urlGas = 'https://www.alphavantage.co/query?function=NATURAL_GAS&interval=monthly&apikey=demo'
const urlAluminium = 'https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo'

module.exports = {
    async stringToModel(req, res, next) {
        const typ = req.params.typ
        console.log(typ)
        if (typ === "oil") {
            req.model = Oil
            req.url = urlOil
        }
        else if (typ === "copper") {
            req.model = Copper
            req.url = urlCopper
        }
        else if (typ === "gas") {
            req.model = Gas
            req.url = urlGas
        }
        else if (typ === "alu") {
            req.model = Aluminium
            req.url = urlAluminium
        }
        else {
            res.send("Error")
        }
    }
}
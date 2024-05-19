var Oil = require('../database/models/OilModel')
var Copper = require('../database/models/CopperModel')

const urlOil = 'https://www.alphavantage.co/query?function=BRENT&interval=monthly&apikey=demo'
const urlCopper = 'https://www.alphavantage.co/query?function=COPPER&interval=monthly&apikey=demo'

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
         else{
            res.send("Error")
         }
    }
}
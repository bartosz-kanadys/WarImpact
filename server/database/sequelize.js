const { Sequelize } = require('sequelize');
const config = require('./config'); //path to the above config.js file 
const sequelize = new Sequelize(config.development);
// Test the connection 
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connected succefully');
    } catch (error) {
        //ensure you created the database 
        //check database credentials
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();



module.exports = sequelize;
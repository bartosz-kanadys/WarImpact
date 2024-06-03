var dotenv = require('dotenv')
dotenv.config()

module.exports = {
    development: {
        username: 'root',
        password: '',
        database: 'is',
        host: process.env.DB_HOST,
        dialect: 'mysql'
    },
};
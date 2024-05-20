const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Conflict = sequelize.define('Conflict', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    begin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false,
    },
    end: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false,
    },
    localization: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    victims: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    }
},
    {
        timestamps: false,
    }
);

module.exports = Conflict
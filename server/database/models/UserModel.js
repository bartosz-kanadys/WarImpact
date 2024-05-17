const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'user', 'guest'],
        allowNull: false,
        defaultValue: 'user'
    },
}, { timestamps: false }
);


module.exports = User;
const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Sugar = sequelize.define('Sugar', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
},
  {
    timestamps: false,
  }
);

module.exports = Sugar
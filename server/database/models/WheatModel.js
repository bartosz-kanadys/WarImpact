const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Wheat = sequelize.define('Wheat', {
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

module.exports = Wheat
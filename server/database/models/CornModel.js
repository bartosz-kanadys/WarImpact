const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Corn = sequelize.define('Corn', {
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

module.exports = Corn
const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Copper = sequelize.define('Copper', {
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

module.exports = Copper
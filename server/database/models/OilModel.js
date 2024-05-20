const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');
// Define a model
const Oil = sequelize.define('Oil', {
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

module.exports = Oil;
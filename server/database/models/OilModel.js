const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

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
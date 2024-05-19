const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Coffee = sequelize.define('Coffee', {
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

module.exports = Coffee
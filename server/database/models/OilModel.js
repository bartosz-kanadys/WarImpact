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

// Synchronize the model with the database
// This function will delete all existing tables in the database
async function syncDatabase() {
  await sequelize.sync();
  console.log('Database synchronized.');
}

async function run() {
  await syncDatabase();// remember to comment this after server runs ones.
}
//run()



module.exports = Oil;
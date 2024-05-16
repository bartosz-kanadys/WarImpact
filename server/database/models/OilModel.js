const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');
// Define a model
const Oil = sequelize.define('Oil', {
  timestamps: false,
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

// Synchronize the model with the database
// This function will delete all existing tables in the database
async function syncDatabase() {
  await sequelize.sync();
  console.log('Database synchronized.');
}
 
// async function run() {

//   await syncDatabase();// remember to comment this after server runs ones.
//   const newUser = await  Oil.create({
//            date: new Date(2021, 12, 1),
//            price: 67.9,
//          });
 

// }
// run();



module.exports = Oil;
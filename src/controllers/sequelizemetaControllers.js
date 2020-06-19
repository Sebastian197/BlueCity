//import sequelizemeta model
//const Sequelize = require('sequelize');
const sequelize = require('../models/database');
const Sequelizemeta = require('../models/sequelizemeta');

/**
 * SYNC ALL MODELS WITH DB
 */
//sequelize.sync();
sequelize.sync({force: false})
    .then(()=>{
        console.log('SYNC MODEL');
});

const sequelizemetaController = {};

sequelizemetaController.getAll = (req,res)=>{
  Sequelizemeta.findAll()
    .then(sequelizemeta => {
      const sequelizemetaString = JSON.stringify(sequelizemeta);
      const sequelizemetaObject = JSON.parse(sequelizemetaString);
      res.json(sequelizemetaObject);
  })
    .catch(err => {
      res.json({status: err});
  })
};

module.exports = sequelizemetaController;
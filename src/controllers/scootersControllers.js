//import scooters model
//const Sequelize = require('sequelize');
const sequelize = require('../models/database');
const Scooter = require('../models/scooters');

/**
 * SYNC ALL MODELS WITH DB
 */
//sequelize.sync();
sequelize.sync({force: false})
  .then(()=>{
    console.log('SYNC MODEL');
});

const scooterController = {};

scooterController.getAll = (req,res)=>{
  Scooter.findAll()
    .then(scooters => {
      const scootersString = JSON.stringify(scooters);
      const scootersObject = JSON.parse(scootersString);
      res.json(scootersObject);
  })
    .catch(err => {
      res.json({status: err});
  })
};

scooterController.getId = (req,res)=>{
  const {id} = req.params;
  Scooter.findAll({ where: {id:id} })
    .then(scooters => {
      if (scooters.length>0){
          const scootersString = JSON.stringify(scooters);
          const scootersObject = JSON.parse(scootersString);
          console.log(scootersObject);
          res.json(scootersObject);
      } else{
          res.json({status: 'Registry not exist'});
      }
  })
  .catch(err => {
    res.json({status: err});
  })
};

scooterController.Create = (req,res)=>{
  const {userId, boxId, createdAt, updatedAt} = req.body;
  Scooter.create({userId : userId, boxId :  boxId, createdAt : createdAt, updatedAt : updatedAt})
    .then(scooters => {
        if (scooters.id){
            res.json({success: true});
        } else{
            res.json({status: 'Not create'});
        }
  })
    .catch(err => {
      res.json({status: err});
  })
};

scooterController.Update = (req,res)=>{
  const {id} = req.params;
  const {userId, boxId, createdAt, updatedAt} = req.body;
  Scooter.update({userId : userId, boxId : boxId, createdAt : createdAt, updatedAt : updatedAt  },
      { where: {id:id} })
    .then(scooters => {
      const scootersString = JSON.stringify(scooters);
      const scootersObject = JSON.parse(scootersString);
        if (scootersObject.length > 0){
            res.json({success: true});
        } else{
            res.json({status: 'Not update'});
        }
  })
  .catch(err => {
    res.json({status: err});
  })
};

scooterController.Delete = (req,res)=>{
  const {id} = req.params;
  Scooter.destroy({ where: {id:id} })
    .then(scooters => {
      const scootersString = JSON.stringify(scooters);
      const scootersObject = JSON.parse(scootersString);
        if (scootersObject == 1){
            res.json({success: true});
        } else{
            res.json({status: 'Not delete'});
        }
  })
  .catch(err => {
    res.json({status: err});
  })
};

module.exports = scooterController;
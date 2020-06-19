//import parkings model
//const Sequelize = require('sequelize');
const sequelize = require('../models/database');
const Parking = require('../models/parkings');

/**
 * SYNC ALL MODELS WITH DB
 */
//sequelize.sync();
sequelize.sync({force: false})
  .then(()=>{
      console.log('SYNC MODEL');
});

const parkingController = {};

parkingController.getAll = (req,res)=>{
  Parking.findAll()
    .then(parkings => {
      const parkingsString = JSON.stringify(parkings);
      const parkingObject = JSON.parse(parkingsString);
      res.json(parkingObject);
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.getId = (req,res)=>{
  const {id} = req.params;
  Parking.findAll({ where: {id:id} })
    .then(parkings => {
      if (parkings.length>0){
          const parkingsString = JSON.stringify(parkings);
          const parkingsObject = JSON.parse(parkingsString);
          console.log(parkingsObject);
          res.json(parkingsObject);
      } else{
          res.json({status: 'Registry not exist'});
      }
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.Create = (req,res)=>{
  const {lat, long, address, name, createdAt, updatedAt} = req.body;
  Parking.create({lat : lat, long : long, address : address, name : name, createdAt : createdAt, updatedAt : updatedAt })
    .then(parkings => {
        if (parkings.id){
            res.json({success: true});
        } else{
            res.json({status: 'Not create'});
        }
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.Update = (req,res)=>{
  const {id} = req.params;
  const {lat, long, address, name, createdAt, updatedAt} = req.body;
  Parking.update({lat : lat, long : long, address : address, name : name, createdAt : createdAt, updatedAt : updatedAt  },
      { where: {id:id} })
    .then(parkings => {
        const parkingsString = JSON.stringify(parkings);
        const parkingsObject = JSON.parse(parkingsString);
          if (parkingsObject.length > 0){
              res.json({success: true});
          } else{
              res.json({status: 'Not update'});
          }
  })
    .catch(err => {
      res.json({status: err});
  })
};

parkingController.Delete = (req,res)=>{
  const {id} = req.params;
  Parking.destroy({ where: {id:id} })
    .then(parkings => {
      const parkingsString = JSON.stringify(parkings);
      const parkingsObject = JSON.parse(parkingsString);
        if (parkingsObject == 1){
            res.json({success: true});
        } else{
            res.json({status: 'Not delete'});
        }
  })
    .catch(err => {
      res.json({status: err});
  })
};

module.exports = parkingController;
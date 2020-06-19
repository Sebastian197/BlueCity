// import user model
const sequelize = require('../models/database');
const User = require('../models/users');

/**
 * SYNC ALL MODELS WITH DB
 */
//sequelize.sync();
sequelize.sync({ force: false })
    .then(() => {
        console.log('SYNC MODEL');
    });

const userController = {};

userController.getAll = (req, res) => {
    User.findAll()
        .then(users => {
            const usersString = JSON.stringify(users);
            const usersObject = JSON.parse(usersString);
            res.json(usersObject);
        })
        .catch(err => {
            console.log(`Error in getAll ${err}`);
        })
};

userController.getId = (req,res)=>{
    const {id} = req.params;
    User.findAll({ where: {id:id} })
      .then(users => {
        if (users.length>0){
            const usersString = JSON.stringify(users);
            const usersObject = JSON.parse(usersString);
            console.log(usersObject);
            res.json(usersObject);
        } else{
            res.json({status: 'Registry not exist'});
        }
    })
    .catch(err => {
      res.json({status: err});
    })
  };
  
  userController.Create = (req,res)=>{
    const {password, name, username, isAdmin, createdAt, updatedAt} = req.body;
    User.create({password : password, name : name, username : username, isAdmin : isAdmin, createdAt : createdAt, updatedAt : updatedAt})
      .then(users => {
          if (users.id){
              res.json({success: true});
          } else{
              res.json({status: 'Not create'});
          }
    })
      .catch(err => {
        res.json({status: err});
    })
  };
  
  userController.Update = (req,res)=>{
    const {id} = req.params;
    const {password, name, username, isAdmin, createdAt, updatedAt} = req.body;
    User.update({password : password, name : name, username : username, isAdmin : isAdmin, createdAt : createdAt, updatedAt : updatedAt},
        { where: {id:id} })
      .then(users => {
        const usersString = JSON.stringify(users);
        const usersObject = JSON.parse(usersString);
          if (usersObject.length > 0){
              res.json({success: true});
          } else{
              res.json({status: 'Not update'});
          }
    })
    .catch(err => {
      res.json({status: err});
    })
  };
  
  userController.Delete = (req,res)=>{
    const {id}=req.params;
    User.destroy({ where: {id:id} })
      .then(users => {
        const usersString = JSON.stringify(users);
        const usersObject = JSON.parse(usersString);
          if (usersObject == 1){
              res.json({success: true});
          } else{
              res.json({status: 'Not delete'});
          }
    })
    .catch(err => {
      res.json({status: err});
    })
  };

module.exports = userController;
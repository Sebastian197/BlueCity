const Sequelize = require('sequelize');
const sequelize = require('./database');

/**
 * MODEL
 */
//Sync Database
/*
sequelize.sync({force: false}).then(()=> {
 
    console.log('Correct! Database is OK')
 
}).catch((err)=> {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});*/

const Sequelizemeta = sequelize.define('sequelizemeta', {
    //attributes
    name: {
        type: Sequelize.STRING(255),
        primaryKey: true,
    },
    
    //options
    //freezeTableName: true,
    //timestamps: false
});

module.exports = Sequelizemeta;
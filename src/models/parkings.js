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

const Parking = sequelize.define('parkings', {
    //attributes
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement : true
    },

    lat: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    long: {
        type: Sequelize.STRING(255),
        allowNull: false
    }, 

    address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },

    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    
    //options
    //freezeTableName: true,
    //timestamps: false
});

module.exports = Parking;
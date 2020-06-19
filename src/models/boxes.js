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

const Box = sequelize.define('boxes', {
    //attributes
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement : true,
    },

    occupied: {
        type: Sequelize.TINYINT(1),
        allowNull: false
    },

    userId: {
        type: Sequelize.INTEGER(11),
        references: {
            model: 'users',
            key: 'id'
        }
        /*references: 'users',
        referencesKey: 'id'*/
    },

    parkingId: {
        type: Sequelize.INTEGER(11),
        references: {
            model: 'parkings',
            key: 'id'
        }
        /*references: 'parkings',
        referencesKey: 'id'*/
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

module.exports = Box;
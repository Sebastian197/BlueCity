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

const User = sequelize.define('users', {
    //attributes
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement : true
    },

    password: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    }, 

    username: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    isAdmin: {
        type: Sequelize.TINYINT(1),
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
module.exports = User;
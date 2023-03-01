const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Supplier = sequelize.define('supplier',{
    supplier_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName:{
        type: Sequelize.STRING(50),
        allowNull: false
    }, 
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    address:{
        type: Sequelize.STRING(250),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(250),
        allowNull: false
    },
    phone:{
        type: Sequelize.INTEGER,
    }
});
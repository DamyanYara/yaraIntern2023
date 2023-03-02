const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Warehouse = sequelize.define('warehouse',{
    warehouse_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type:Sequelize.STRING(50),
        allowNull: false,
    },
    location:{
        type: Sequelize.STRING(250),
        allowNull: false,
    },
});

module.exports = Warehouse;
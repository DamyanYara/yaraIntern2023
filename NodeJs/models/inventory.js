const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = require('./product');
const Warehouse = require('./warehouse')

const Inventory = sequelize.define('inventory', {
    inventory_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    product_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key:'product_id'
        }
    },
    
    warehouse_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Warehouse,
            key: 'warehouse_id'
        }
    },

    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }

});

module.exports = Inventory;
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Supplier = require('./supplier');
const Warehouse = require('./warehouse')


const Product = sequelize.define('product', {
    product_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    supplier_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:Supplier,
            key: 'supplier_id'
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
    productName:{
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    description:{
        type: Sequelize.TEXT
    },
    price:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    }

});

module.exports = Product;
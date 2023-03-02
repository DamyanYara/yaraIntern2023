const Inventory = require('../models/inventory');

module.exports = async(product_id,warehouse_id,quantity) =>{
    await Inventory.create({
       product_id:product_id,
       warehouse_id:warehouse_id,
       quantity:quantity
    })
};
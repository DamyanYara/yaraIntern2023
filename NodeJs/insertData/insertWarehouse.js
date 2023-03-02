const Warehouse = require('../models/warehouse');

module.exports = async(name, location) =>{
    await Warehouse.create({
       name:name,
       location:location,
    })
};
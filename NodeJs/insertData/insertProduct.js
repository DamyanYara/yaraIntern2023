const Product = require('../models/product');

module.exports = async(supplier_id,warehouse_id,productName,description, price) =>{
    await Product.create({
       supplier_id:supplier_id,
       warehouse_id:warehouse_id,
       productName:productName,
       description:description,
       price:price
    })
};
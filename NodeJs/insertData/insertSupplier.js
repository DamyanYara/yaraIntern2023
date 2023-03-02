const Supplier = require('../models/supplier');


module.exports = async(firstName, lastName, address, email, phone) =>{
    await Supplier.create({
        firstName: firstName,
        lastName: lastName,
        address: address,
        email: email,
        phone:phone 
    })
};
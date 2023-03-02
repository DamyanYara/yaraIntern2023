const Supplier = require('../models/supplier');

exports.addSupplier = (req, res) =>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    Supplier.create({
        firstName: firstName,
        lastName: lastName,
        address: address,
        email: email,
        phone:phone 
    }).then(result =>{
        console.log('Created Supplier');
    }).catch(err =>{
        console.log(err);
    });
};
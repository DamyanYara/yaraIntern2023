// Insert Values for User:
const User = require('../models/user');

module.exports = async(email, password) => {
    await User.create({
        email:email,
        password:password,
    })
};
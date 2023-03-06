
const Sequelize = require('sequelize');

const sequelize = require('../util/database');



const User = sequelize.define('user',{
    user_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
     email:{
        type: Sequelize.TEXT,
        allowNull: false
     },
     password:{
        type:Sequelize.TEXT,
        allowNull: false
     },
});


module.exports = User;

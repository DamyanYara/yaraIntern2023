const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeJs', 'postgres', 'rindSaussage1', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});



module.exports = sequelize;
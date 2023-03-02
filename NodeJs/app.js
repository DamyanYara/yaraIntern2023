const http = require('http');
const bodyParser = require('body-parser');

const Supplier = require('./models/supplier');
const Warehouse = require('./models/warehouse');
const Product = require('./models/product');
const Inventory = require('./models/inventory');

const express = require('express');

const app = express();

const sequelize = require('./util/database');

const adminRoutes = require('./routes/admin');

const CreateSupplier = require('./insertData/insertSupplier');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/', (req, res, next) => {
    res.redirect('/')
});

sequelize.sync({alter:true}).then(async (result) =>{
    await CreateSupplier('Ginka', 'Petrova', 'ulica8', 'g.petrova@gmail.com',089444888);
    app.listen(3000);

})
.catch(err => {
    console.log(err)
});



//create Server Callback



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


app.use(bodyParser.urlencoded({extended:false}));

app.use('/', (req, res, next) => {
    res.redirect('/')
});

sequelize.sync({alter:true}).then(result =>{
   // console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err)
});

//create Server Callback



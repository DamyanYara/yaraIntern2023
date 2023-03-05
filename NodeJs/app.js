const http = require('http');
const bodyParser = require('body-parser');

const Supplier = require('./models/supplier');
const Warehouse = require('./models/warehouse');
const Product = require('./models/product');
const Inventory = require('./models/inventory');
//const User = require('./models/user');

const express = require('express');

const app = express();

const sequelize = require('./util/database');

const adminRoutes = require('./routes/admin');

//const createDistributor = require('./distributionMethods/createDistribution');


const CreateSupplier = require('./insertData/insertSupplier');
const CreateWarehouse = require('./insertData/insertWarehouse');
const CreateProduct = require('./insertData/insertProduct');
const CreateInventory = require('./insertData/insertInventory');
const CreateUser = require('./insertData/insertUser');
const User = require('./models/user');
//const User = require('./models/user');



app.use(bodyParser.urlencoded({extended:false}));

app.use('/', (req, res, next) => {
    res.redirect('/')
});

sequelize.sync({alter:true}).then(async (result) =>{

    await CreateUser('petar.iliev@gmail.com', ';kljsfshf4');
   
    //const supplier = Supplier.findOne({where: {email: 'g.petrova@gmail.com'}});
    //if (!supplier){
    //await CreateSupplier('Ginka', 'Petrova', 'ulica8', 'blabla',089444888);
    //}
    /*
    const warehouse = Warehouse.findOne({where: { name: 'warehouse10'}});
    if(!warehouse) {
        await CreateWarehouse('warehouse10', 'location10');
    }
    const product = Product.findOne({where: {name: 'Toy10'}});
    if(!product){
        await CreateProduct(10,10,'Toy10', 'Some Toy 10', 200.10);
    }
    const inventory = Inventory.findOne({where: {product_id: 5, warehouse_id: 8}});
    if(!inventory){
        await CreateInventory(5,8,169);
    }
    **/
    app.listen(3000);

})
.catch(err => {
    console.log(err)
});



//create Server Callback



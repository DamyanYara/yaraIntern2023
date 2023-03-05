/*
const CreateSupplier = require('../insertData/insertSupplier');
const CreateWarehouse = require('./insertData/insertWarehouse');
const CreateProduct = require('./insertData/insertProduct');
const CreateInventory = require('./insertData/insertInventory');
const CreateUser = require('../insertData/insertUser');

//returns an array containing the command-line arguments passed when the Node.js process was launched
const[method, ...args] = process.argv.slice(2);

if(method === 'createSupplier'){
   CreateSupplier();

}else if (method === 'createWarehouse'){
    CreateWarehouse();

}else if(method === 'createProdduct'){
    CreateProduct();

}else if(method === 'createInventory'){
    CreateInventory();

}else if(method === 'createUser'){
    CreateUser();
}else{
    console.error(`Invalid method: ${method}`);
    process.exit(1);
}

module.exports = createDistributor;

**/

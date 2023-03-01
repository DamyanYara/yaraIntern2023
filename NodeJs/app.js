const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const sequelize = require('./util/database');

const adminRoutes = require('./routes/admin');


app.use(bodyParser.urlencoded({extended:false}));

app.use('/', (req, res, next) => {
    res.redirect('/')
});

sequelize.authenticate().then(console.log);

//create Server Callback
app.listen(3000);


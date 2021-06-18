'use strict';

const express = require('express');
 

const app = express();
const router = express.Router();


const index = require('./routes/index');
const productRoute = require('./routes/produto-route');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', index);
app.use('/products', productRoute);


module.exports = app;
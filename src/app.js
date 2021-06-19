'use strict';

const express = require('express');
 

const app = express();
const router = express.Router();


const mongoose = require("mongoose")

const mongoString = "mongodb://fabiano:321@cluster0-shard-00-00.xtvoy.mongodb.net:27017,cluster0-shard-00-01.xtvoy.mongodb.net:27017,cluster0-shard-00-02.xtvoy.mongodb.net:27017/loja?ssl=true&replicaSet=atlas-vaovlw-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(mongoString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})


//modelos
const Product = require('./Models/product');

//rotas
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
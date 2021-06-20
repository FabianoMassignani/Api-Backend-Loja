
'use string';

//banco
const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');


exports.create = async(data) => {
    var cliente = new Cliente(data); 
    await cliente.save();
} 
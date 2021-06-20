
'use string';

//banco
const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

exports.get = async() => {
    const res = await Pedido.find({});
    return res;
}


exports.create = async(data) => {
    var pedido = new Pedido(data); 
    await pedido.save();
} 
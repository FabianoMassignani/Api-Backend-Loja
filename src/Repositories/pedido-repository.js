
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

exports.update = async(id, data) => {

    await Pedido.findOneAndUpdate(id,
        { $set: {  
         
            'Pedido.$.descricao': data.descricao,
            'Pedido.$.quantidade': data.quantidade,
            'Pedido.$.preco': data.preco       
         }
    })
     
}

exports.delete = async(id) => {
    await Pedido
    .findOneAndRemove(id)

}
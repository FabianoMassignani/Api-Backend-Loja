
'use string';

//banco
const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

exports.get = async() => {
    const res = await Pedido
    .find({}, 'cliente produtos')
    return res;
}

exports.create = async(data) => {
    var pedido = new Pedido(data); 
    await pedido.save();
    data._id = pedido.id;
    return data;
} 

exports.update = async(id, data) => {
    await Pedido.findOneAndUpdate(id,
        { $set: {
            'Pedido.$.cliente': data.cliente,
            'Pedido.$.produtos': data.produtos     
         }
    })
    const Getdata = await Pedido.findById(id,{});
    data.dataAtualizacao = Getdata.dataAtualizacao;
    return data;
}

exports.delete = async(id) => {
    await Pedido
    .findOneAndRemove(id)

}
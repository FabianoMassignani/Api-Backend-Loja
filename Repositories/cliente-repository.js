
'use string';

//banco
const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');


exports.get = async() => {
    const res = await Cliente
    .find({}, 'nome dataNascimento')
    return res;
}

exports.getByName = async(nome) => {
    const res = await Cliente
    .find({
        nome: nome
    }, {nome: nome})
    return res;
}

exports.getAll = async() => {
    const res = await Cliente
    .find({}, 'nome dataNascimento')
    return res;
}

exports.create = async(data) => {
    var cliente = new Cliente(data); 
    await cliente.save( function(err,room) {
    var _id = cliente.id;});
    data._id = cliente.id;
    return data;
} 

exports.update = async(id, data) => {

    await Cliente.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            dataNascimento: data.dataNascimento

        }
    })
    const Getdata = await Cliente.findById(id,{});
    data.dataAtualizacao = Getdata.dataAtualizacao;
    return data;
}

exports.delete = async(id) => {

    await Cliente
    .findOneAndRemove(id)

}
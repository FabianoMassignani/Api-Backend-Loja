
'use string';

//banco
const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');



exports.get = async() => {
    const res = await Cliente
    .find({}, 'nome dataNascimento')
    return res;
}

exports.getByName = async(nomee) => {
    const res = await Cliente
    .find({
        nome: nomee

    }, 'nome dataNascimento')
    return res;
}

exports.create = async(data) => {
    var cliente = new Cliente(data); 
    await cliente.save();
} 

exports.update = async(id, data) => {

    await Cliente.findOneAndUpdate(id, {
        $set: {
            nome: data.nome,
            dataNascimento: data.dataNascimento

        }
    })


}

exports.delete = async(id) => {

    await Cliente
    .findOneAndRemove(id)

}
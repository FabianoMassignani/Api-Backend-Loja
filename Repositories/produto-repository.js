'use string';

//banco
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
 

exports.get = async() => {
    const res = await Product
    .find({}, 'descricao preco')
    return res;
}

exports.getByDescricao = async(descricao) => {
     res = await Product
    .find({
        descricao: descricao
    }, {descricao: descricao})
    return res;
}

exports.getAll = async() => {
    const res = await Product
    .find({}, 'descricao preco')
    return res;
}

exports.create = async(data) => {
    var product = new Product(data);
    await product.save(function(err,room) {
        var _id = product.id;
     });
     data._id = product.id;
     return data;
} 

exports.update = async(id, data) => {

    await Product.findByIdAndUpdate(id, {
        $set: {
            descricao: data.descricao,
            preco: data.preco

        }
    })

}

exports.delete = async(id) => {
    await Product.findByIdAndDelete(id)
    
}
'use string';

//banco
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product
    .find({}, 'descricao preco')
    return res;
}

exports.create = async(data) => {
    var product = new Product(data); 
    await product.save();
} 

exports.update = async(id, data) => {

    await Product.findOneAndUpdate(id, {
        $set: {
            descricao: data.descricao,
            preco: data.preco

        }
    })


}

exports.delete = async(id) => {

    await Product
    .findOneAndRemove(id)

}
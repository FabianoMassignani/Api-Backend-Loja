'use string';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({}, 'descricao preco')
}


exports.create = (data) => {

    var product = new Product(data); 
    return product.save();

} 


exports.update = (id, data) => {

    return Product.findOneAndUpdate(id, {
        $set: {
            descricao: data.descricao,
            preco: data.preco

        }
    })


}


exports.delete = (id) => {

    return Product
    .findOneAndRemove(id)

}
'use string';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');



exports.post = (req, res, next) => {
    var product = new Product(req.body); 
    product.save().then(x => { 
        res.status(201).send({message: 'produto cadastrado com sucesso'});
    }).catch(e => {
        res.status(400).send({message: 'falha cadastrado produto', data: e
        });
    });
    
};

exports.put = (req, res, next) => {
    Product.findOneAndUpdate(req.params.id, {
        $set: {
            descricao: req.body.descricao,
            preco: req.body.preco

        }
    }).then(x => {
        res.status(200).send({
            message: 'Produto atualizado'
        });
     
    }).catch(e => {
        res.status(400).send({
            message: 'Produto nao atualizado',
            data: e
        });
     });
};

        
    


exports.delete = (req, res, next) => {
    Product.findOneAndRemove(req.body.id).
    then(x => {
        res.status(200).send({
            message: 'Produto   deletado'
        });

    }).catch(e => {
        res.status(400).send({
            message: 'Produto nao deletado',
            data: e
        });
     });
};
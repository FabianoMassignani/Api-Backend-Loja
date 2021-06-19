'use string';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const ValidationContract = require('../validators/validator');
const repository = require('../Repositories/produto-repository');

exports.get = (req, res, next) => {
    repository.get()
        .then(data => {
                 res.status(200).send(data);
        }).catch(e => {
                 res.status(400).send(e);
     });
};

exports.post = (req, res, next) => {
   
    let contract = new ValidationContract();
    contract.isRequired(req.body.descricao,'o produto deve ter um descricao');
    contract.isRequired(req.body.preco,'o produto deve ter um preco ');

    //se forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    repository.create(req.body)
    .then(x => { 
        res.status(201).send({message: 'produto cadastrado com sucesso'});
    }).catch(e => {
        res.status(400).send({message: 'falha cadastrado produto', data: e
        });
    });
    
};

exports.put = (req, res, next) => {
    repository
    .update(req.params.id, req.body)
    .then(x => {
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
    repository
    .delete(req.body.id)
    .then(x => {
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
'use string';

//banco
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const ValidationContract = require('../validators/validator');
const repository = require('../Repositories/produto-repository');


exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    }catch (e){
        res.status(500).send({
            message: 'falha requisicao'
        });

    }
};

exports.post = async(req, res, next) => {
   
    let contract = new ValidationContract();
    contract.isRequired(req.body.descricao,'o produto deve ter um descricao');
    contract.isRequired(req.body.preco,'o produto deve ter um preco ');

    //se forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create(req.body);
        res.status(201).send({
            message: 'produto cadastrado com sucesso'}
        );
    }catch (e){
            res.status(500).send({
                message: 'falha requisicao'
            });
        }
    
};

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado'
        });}
    catch (e){
            res.status(500).send({
            message: 'falha requisicao'
            });
    }
     
};

exports.delete = async(req, res, next) => {
    try{await repository.delete(req.body.id);
        res.status(200).send({
            message: 'Produto deletado'
        });}
    catch (e){
            res.status(500).send({
            message: 'falha requisicao'
            });
    }

     
};
'use string';

//banco
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

const ValidationContract = require('../validators/validator');

const repository = require('../Repositories/produto-repository');


exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(201).send(data);
    }catch (e){
        res.status(500).send({
            message: 'falha requisicao'
        });

    }
};

exports.getByDescricao = async(req, res, next) => {
    try{
        const data = await repository.getByDescricao(req.query.descricao);
        res.status(200).send({
            descricao: req.query.descricao
        });
    }catch (e){
        res.status(500).send({
            message: 'Falha na requisicao'
        });

    }
};

exports.getAll = async(req, res, next) => {
    try{
        const data = await repository.getAll();
        res.status(200).send(data);
        
    }catch (e){
        res.status(500).send({
            message: 'Falha na requisicao'
        });
    }
};

exports.post = async(req, res, next) => {
   
    if((req.body.descricao)==''){
        res.status(400).send({ message: 'Descrição Produto é obrigatório' }).end();
        return;
    }
     
    try{
        const data = await repository.create(req.body);
        res.status(201).send({
            retorno:{
                descricao: req.body.descricao,
                preco: req.body.preco,
                _id: data._id
        }}
        
        );
       
    }catch (e){
            res.status(500).send({
                message: 'falha requisicao'
            });
        }
    
};

exports.put = async(req, res, next) => {
    
    if(!req.body._id){
        res.status(401).send({ message: 'Id não foi informado' }).end();
        return;
    }

    try{
        await repository.update(req.body._id,req.body);
        res.status(200).send({
            retorno:{
                descricao: req.body.descricao,
                preco: req.body.preco,
                
            }
        });
    }
    catch (e){
            res.status(500).send({
            message: 'falha requisicao'
            });
    }
};

exports.delete = async(req, res, next) => {
    try{await repository.delete(req.body._id);
        res.status(201).send({
            message: 'Produto deletado'
        });}
    catch (e){
            res.status(500).send({
            message: 'falha requisicao'
            });
    }

     
};
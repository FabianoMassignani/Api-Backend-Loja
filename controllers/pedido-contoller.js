'use string';


const ValidationContract = require('../validators/validator');
const repository = require('../Repositories/pedido-repository');


exports.get = async(req, res, next) => {
    try{
        const data = await repository.get();
        res.status(200).send({
            message: 'Sucesso',
            lista: data
        });
    }catch (e){
        res.status(500).send({
            message: 'falha requisição'
        });

    }
};

exports.post = async(req, res, next) => {

    if(!req.body.cliente){
        res.status(401).send({ message: 'Cliente é obrigatório' }).end();
        return;
    }

    try{
        const data = await repository.create({
            cliente: req.body.cliente,
            produtos: req.body.produtos
        });
        
        res.status(201).send({
            retorno:{
                cliente: req.body.cliente,
                produtos: req.body.produtos,
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

    try{
       const data = await repository.update(req.body._id, req.body);
        res.status(200).send({
            retorno:{
                dataAtualizacao: data.dataAtualizacao,
                cliente: req.body.cliente
            }
        });
    }
    catch (e){
            res.status(500).send({
            message: 'falha a requisicao'
        });
    }
    
};

exports.delete = async(req, res, next) => {
    try{await repository.delete(req.body.id);
        res.status(201).send({
            message: 'Pedido deletado'
        });}
    catch (e){
            res.status(500).send({
            message: 'falha requisicao'
            });
    }

     
};
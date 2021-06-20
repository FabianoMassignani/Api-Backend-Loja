'use string';


const ValidationContract = require('../validators/validator');
const repository = require('../Repositories/pedido-repository');

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

    try{
        await repository.create({
            cliente: req.body.cliente,
            produtos: req.body.produtos
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso'}
        );
    }catch (e){
            res.status(500).send({
                message: 'falha requisicao'
            });
        }
    
};
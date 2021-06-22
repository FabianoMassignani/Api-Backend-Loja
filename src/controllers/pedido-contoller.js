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

    let contract = new ValidationContract();
    contract.isRequired(req.body.produtos,'o pedido deve ter pelo menos um produto');

    //se forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

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

exports.put = async(req, res, next) => {

    let contract = new ValidationContract();
    contract.isRequired(req.body.produtos,'o pedido deve ter pelo menos um produto');

    //se forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Pedido atualizado'
        });}
    catch (e){
            res.status(500).send({
            message: 'falha a requisicao'
        });
    }
    
};

exports.delete = async(req, res, next) => {
    try{await repository.delete(req.body.id);
        res.status(200).send({
            message: 'Pedido deletado'
        });}
    catch (e){
            res.status(500).send({
            message: 'falha requisicao'
            });
    }

     
};
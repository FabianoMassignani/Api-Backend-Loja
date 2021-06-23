'use string';


const ValidationContract = require('../validators/validator');
const repository = require('../Repositories/cliente-repository');


exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(201).send(data);
    }catch (e){
        res.status(500).send({
            message: 'Falha na requisicao'
        });

    }
};

exports.getByName = async(req, res, next) => {
    try{
        const data = await repository.getByName(req.params.nome);
        res.status(201).send(data);
    }catch (e){
        res.status(500).send({
            message: 'Falha na requisicao'
        });

    }
};

exports.post = async(req, res, next) => {
   
    let contract = new ValidationContract();
    contract.isRequired(req.body.nome,'Nome Cliente é obrigatório');
    contract.isRequired(req.body.dataNascimento,'o cliente deve ter uma data de nascimento');

    //se forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create(req.body);
        res.status(201).send({
            message: 'Cliente '+req.body.nome+' criado com sucesso'}
        );
    }catch (e){
            res.status(500).send({
                message: 'Falha na requisicao'
            });
        }
    
};

exports.put = async(req, res, next) => {

    let contract = new ValidationContract();
    contract.isRequired(req.params.id,'Id não foi informado para alteracção');
    contract.isRequired(req.body.nome,'o cliente deve ter um nome');
    contract.isRequired(req.body.dataNascimento,'o cliente deve ter uma data de nascimento');

    //se forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Cliente atualizado'
        });}
    catch (e){
            res.status(500).send({
            message: 'Falha na requisicao'
            });
    }
     
};

exports.delete = async(req, res, next) => {
    try{await repository.delete(req.body.id);
        res.status(200).send({
            message: 'Cliente deletado'
        });}
    catch (e){
            res.status(500).send({
            message: 'Falha na requisicao'
            });
    }

     
};



'use string';


const ValidationContract = require('../validators/validator');
const repository = require('../Repositories/cliente-repository');


exports.post = async(req, res, next) => {
   
    let contract = new ValidationContract();
    contract.isRequired(req.body.nome,'o cliente deve ter um nome');
    contract.isRequired(req.body.dataNascimento,'o cliente deve ter uma data de nascimento');

    //se forem invalidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create(req.body);
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso'}
        );
    }catch (e){
            res.status(500).send({
                message: 'falha requisicao'
            });
        }
    
};
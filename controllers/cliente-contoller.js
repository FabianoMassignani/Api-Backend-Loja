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
        const data = await repository.getByName(req.query.nome);
        res.status(200).send({
            nome: req.query.nome
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
   
    if((req.body.nome)==''){
        res.status(400).send({ message: 'Nome Cliente é obrigatório' }).end();
        return;
    }

    try{
        const data = await repository.create(req.body);
        res.status(201).send({
                retorno:{
                nome: req.body.nome,
                dataNascimento: req.body.dataNascimento,
                _id: data._id
            }}
        );
    }catch (e){
            res.status(500).send({
                message: 'Falha na requisicao'
            });
        }
    
};

exports.put = async(req, res, next) => {

    if(!req.body._id){
        res.status(401).send({ message: 'Id não foi informado' }).end();
        return;
    }
    try{
       const data = await repository.update(req.body._id,req.body);
        res.status(200).send({
            retorno:{
                nome: req.body.nome,
                dataNascimento: req.body.dataNascimento,
                dataAtualizacao: data.dataAtualizacao
        }
        });}
    catch (e){
            res.status(500).send({
            message: 'Falha na requisicao'
            });
    }
     
};

exports.delete = async(req, res, next) => {
    try{await repository.delete(req.body._id);
        res.status(201).send({
            message: 'Cliente deletado'
        });}
    catch (e){
            res.status(500).send({
            message: 'Falha na requisicao'
            });
    }

     
};



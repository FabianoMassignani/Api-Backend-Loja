'use strict';


const mongoose = require('mongoose');
 

const Schema = mongoose.Schema;
 

const schema = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cliente'
        
    },
    dataCadastro : {
        type: Date,
        required: true,
        default: Date.now
    },
    produtos:[{
        idProduto:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        },
        descricao:{
            type: String,
            require: true,
        },
        quantidade:{
            type: Number,
            require: true,
            default: 1
        },
        preco:{
            type: Number,
            require: true,
        }
    }]

    },
    {
        timestamps: {  updatedAt: 'dataAtualizacao' }
    });

    //cliente, dataCadastro e dataAtualizacao e 
    //produtos[{idProduto, descricao, quantidade, preco}].

module.exports = mongoose.model('Pedido', schema);
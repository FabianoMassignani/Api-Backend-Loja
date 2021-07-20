'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const schema = new Schema({
    
    
    
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
    },
    {
    timestamps: { createdAt: 'dataCadastro', updatedAt: 'dataAtualizacao' }
    });

module.exports = mongoose.model('Product', schema);
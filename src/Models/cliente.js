'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    }
    },
    {
    timestamps: { createdAt: 'dataCadastro', updatedAt: 'dataAtualizacao' }
    });

module.exports = mongoose.model('Cliente', schema);
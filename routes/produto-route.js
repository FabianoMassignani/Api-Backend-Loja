'use strict' ;

const express = require('express');
const router = express.Router();
const controlle = require('../controllers/produto-contoller');


//rotas produtos

router.get('/', controlle.get);
router.get('/getByDescricao', controlle.getByDescricao);
router.get('/getAll', controlle.getAll);
router.post('/', controlle.post);
router.put('/', controlle.put);
router.delete('/', controlle.delete);

module.exports = router;
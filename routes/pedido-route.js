'use strict' ;

const express = require('express');
const router = express.Router();
const controlle = require('../controllers/pedido-contoller');


//rotas clientes

router.get('/', controlle.get);
router.post('/', controlle.post);
router.put('/', controlle.put);
router.delete('/', controlle.delete);

module.exports = router;
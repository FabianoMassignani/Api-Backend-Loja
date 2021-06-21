'use strict' ;

const express = require('express');
const router = express.Router();
const controlle = require('../controllers/cliente-contoller');


//rotas clientes

router.get('/', controlle.get);
router.get('/getByName/:nome', controlle.getByName);
router.post('/', controlle.post);
router.put('/:id', controlle.put);
router.delete('/', controlle.delete);

module.exports = router;
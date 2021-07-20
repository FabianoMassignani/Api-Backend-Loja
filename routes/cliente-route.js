'use strict' ;

const express = require('express');
const router = express.Router();
const controlle = require('../controllers/cliente-contoller');


//rotas clientes

router.get('/', controlle.get);
router.get('/getByName', controlle.getByName);
router.get('/getAll', controlle.getAll);
router.post('/', controlle.post);
router.put('/', controlle.put);
router.delete('/', controlle.delete);

module.exports = router;
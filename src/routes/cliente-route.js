'use strict' ;

const express = require('express');
const router = express.Router();
const controlle = require('../controllers/cliente-contoller');


//rotas clientes

router.post('/', controlle.post);


module.exports = router;
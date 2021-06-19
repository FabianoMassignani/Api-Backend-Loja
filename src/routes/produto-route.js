'use strict' ;

const express = require('express');
const router = express.Router();
const controlle = require('../controllers/produto-contoller');


//rotas produtos

router.get('/', controlle.get);
router.post('/', controlle.post);
router.put('/:id', controlle.put);
router.delete('/', controlle.delete);


module.exports = router;
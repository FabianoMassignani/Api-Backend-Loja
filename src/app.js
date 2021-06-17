'use strict';

const express = require('express');
 

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


const route = router.get('/', (req, res, next) => {
    res.status(201).send({

        title: "node store"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(200).send(req.body);

});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);

});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;
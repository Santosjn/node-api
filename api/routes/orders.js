const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched!'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.id,
        quantity: req.body.quantity
    };

    res.status(201).json({
        message: 'Orders was created!',
        order: order
    });
});

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details...',
        id: req.params.id
    });
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Orders deleted'       
    });
});


module.exports = router;
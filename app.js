
const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It Works!!!'
//     });
// });

app.use(morgan('dev'));

// Routes description
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found...');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();



//Import Routes
const productsRoute = require('./routes/products');
const orderRouter = require('./routes/orders');


//Use Routes
app.use('/api/products',productsRoute);
app.use('/api/orders', orderRouter);




app.use(cors({
    origin:"*",
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders:'Content-Type,Authorization,Origin,X-Requested-With,Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());



module.exports = app;

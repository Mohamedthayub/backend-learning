const express = require('express');
const path = require('path');
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path:path.join(__dirname,"config",'config.env')});

app.use(express.json());
const products  = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT, ()=>{
    console.log(`server listening to PORT ${process.env.PORT} in ${process.env.NODE_ENV}`);
});


const express = require('express');
const app = express();
const connectDatabase = require('./config/connectDb');
const  userRoutes = require('./routes/userRoutes');
connectDatabase();

app.use(express.json());
app.use("/api",userRoutes);

app.listen(4000,() => {
    console.log('http://localhost:4000');
})
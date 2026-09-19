const express = require('express');
const app = express();
const connectDatabase = require('./connectDB');
// const userModel = require('./model/userModel');
const userRoutes = require("./routes/userRoutes");

connectDatabase();



app.use(express.json());
app.use('/api/',userRoutes);

app.listen(2000,() => {
    console.log("http://localhost:2000");
})
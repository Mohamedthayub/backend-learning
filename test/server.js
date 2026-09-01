const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const db = require("./db");

app.use(express.json());

app.use('/api/users/',userRoutes);

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
})

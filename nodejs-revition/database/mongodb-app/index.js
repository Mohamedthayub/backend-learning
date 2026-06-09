const express = require('express');
const db = require('./db.js');
const app = express();
const userRoutes = require('./routes/users');

app.use(express.json());
app.use("/api/users", userRoutes);


app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});
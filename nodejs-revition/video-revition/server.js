const express = require('express');
const db = require('./db.js');
const app = express();
const userRoutes = require('./routes/users.js');

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("The Server is listening http://localhost:3000");
});
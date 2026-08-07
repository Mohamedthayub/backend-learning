const express = require('express');
const app = express();
const db = require('./db.js');
const userRoutes  = require('./routes/user.js');

app.use(express.json());
app.use('/api/users',userRoutes);


app.listen(3000,() => {
    console.log("the server is listening: http://localhost:3000");
})
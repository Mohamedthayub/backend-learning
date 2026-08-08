const express = require('express');
const app = express();
const db = require('./db');
const userRoutes = require('./router/user.js')
const PORT = 4000

app.use(express.json());
app.use('/api/users', userRoutes);


app.listen(PORT,() => {
    console.log('http://localhost:4000');
});
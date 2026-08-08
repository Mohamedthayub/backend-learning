const express  = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDatabase = require('./config/connectDatabase');
PORT = 3000;

connectDatabase();

app.use(express.json());

const users = require('./routes/userRoutes');
const allUsers = require('./routes/userRoutes');

app.use('/api/',users);
app.use('/api/',allUsers);



app.listen(PORT,() => {
    console.log("http://localhost:3000");
});

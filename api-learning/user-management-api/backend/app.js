const express  = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDatabase = require('./config/connectDatabase');
PORT = 3000;

connectDatabase();

app.use(express.json());

const users = require('./routes/userRoutes');
const allUsers = require('./routes/userRoutes');
const singleUser = require('./routes/userRoutes');
const updateUser = require('./routes/userRoutes');
const deleteUser = require('./routes/userRoutes');

app.use('/api/',users);
app.use('/api/',allUsers);
app.use('/api/',singleUser);
app.use('/api/',updateUser);
app.use('/api/',deleteUser);


app.listen(PORT,() => {
    console.log("http://localhost:3000");
});

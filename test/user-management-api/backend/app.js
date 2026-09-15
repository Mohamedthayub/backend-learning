const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDatabase  = require('./config/connectDatabase');

connectDatabase();

app.use(express.json());
app.use('/api/v1',userRoutes);

app.listen(4000, () => {
    console.log("http://localhost:4000");
})
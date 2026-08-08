const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userdb3')
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log('Databse connection',err);
})

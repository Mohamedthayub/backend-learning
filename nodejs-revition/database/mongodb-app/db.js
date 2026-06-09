const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userdb3')
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log("Database connection  error:", err);
})
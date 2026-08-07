const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userdb2')
.then(() => {
    console.log("Database Connected")
})
.catch((err) => {
    console.log("Database connection error",err);
})
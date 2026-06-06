const express = require('express');
const app = express();
// middleware runs between every request and response 
app.use((req,res,next) => {
    console.log("This is a MiddleWare Function");
    next();
})
app.get("/",(req,res) => {
    res.status(200).send("This is Get Request");
})

app.post("/",(req,res) => {
    res.status(200).send("This is Post Request");
})

app.use((req,res) => {
    res.status(404).send("404 Page Not Found");
})

app.listen(3000, () => {
    console.log("the server is running http://nodejs-learning:3000");
})
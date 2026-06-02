const http  = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type' : 'text/plain'});
    // res.end(`{"name" : "logesh"}`); //  here  we send  json data;
    res.end("Hello From Node js Server");
});

server.listen(5000,() => { 
    console.log("Server listening http://localhost:5000");
})
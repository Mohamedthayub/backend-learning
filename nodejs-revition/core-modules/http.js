const http  = require('http');

const server = http.createServer((req,res) => {
    // res.writeHead(200,{'content-type' : 'text/plain'});
    // // res.end(`{"name" : "logesh"}`); //  here  we send  json data;
    // res.end("Hello From Node js Server")
    if(req.url == "/"){
        res.writeHead(200,{'content-type' : 'text/plain'});
        res.end("Home Page")
    } 
    else if (req.url == "/about"){
        res.writeHead(200,{'content-type' : 'text/plain'});
        res.end("About Page")
    }
    else if(req.url == "/contact") {
        res.writeHead(200,{'content-type' : 'text/plain'});
        res.end("Contact Page")
    }
    else{
        res.writeHead(404,{'content-type' : 'text/plain'});
        res.end("Page Not Found");
    }
});

// this is how we do server routing with every request 

server.listen(5000,() => { 
    console.log("Server listening http://localhost:5000");
})
// const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req.url == '/'){
//         res.writeHead(404,{'content-type':'application/json'});
//         res.end(`{name:'Thayub'}`);
//     }
//     if
// });

// server.listen(5000, ()=>{
//     console.log("server is listening in port 5000");
// })

const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("This is Get Url");
    } 
    else if (req.url =='/about'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("This is About url");
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("Page Not Found");
    }
})
server.listen(3000,() => {
    console.log("Server is listening on port 3000");
})
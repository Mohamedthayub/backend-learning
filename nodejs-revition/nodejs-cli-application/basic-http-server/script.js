const http = require('http');

const PORT = 3000;
const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("Welcome to Basic HTTP Server");
    }
    else if(req.url == '/about'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("This server is built using Node.js HTTP Module.")
    }
    else if (req.url == "/contact"){
        res.writeHead(200,{'content-type':'application/json'});
        const user = {
            email:"admin@gmail.com",
            phone:8220726040
        }
        res.end(JSON.stringify(user));
    }        
    else if(req.url == "/users"){
        const users  = [
    {
        "id":1,
        "name":"Alice"
    },
    {
        "id":2,
        "name":"Bob"
    }];
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(users));
    }
    else if(req.url.startsWith("/users/")){
    const users  = [
    {
        "id":1,
        "name":"Alice"
    },
    {
        "id":2,
        "name":"Bob"
    }];
        const id  = Number(req.url.split("/")[2]);
        const user =  users.find(u => u.id === id);
        if(user){
            res.writeHead(200,{'content-type':'application/json'});
            res.end(JSON.stringify(user));
        }
        else{
            res.writeHead(404,{'content-type':'text/plain'});
            res.end("User Not Found");
        }
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end("Page Not Found");      
    } 
    
});


server.listen(PORT,() => {
    console.log("server is listening in port 3000");
})
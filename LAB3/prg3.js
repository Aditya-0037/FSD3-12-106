import http from 'http';

const server = http.createServer((req, res)=>{
    console.log("server hit by clint");
    res.write("<h1>hello clint</h1>");
    res.end();
});

server.listen(3003, () => {
    console.log("Server is running ...");
});
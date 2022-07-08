const http= require("http");
const data =require('./data.js');
const fs = require('fs');
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3002);
// to start the server run 'npm start' command
// const input =process.argv;
// fs.writeFileSync(input[2],input[3]);
fs.writeFileSync('apple.txt', 'This is best tutorial on apple')



// to start the server run 'npm start' command
const http = require("http");
// const data = require('./data.js');
const fs = require('fs');
const path =require('path');

// const input =process.argv;//process.argv returns array containg cmd inputs as elements(in string format).
// creating and deleting files using command line--
/*
if (input[2]=='add') {
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{console.log('invalid input')}
*/
// fs.writeFileSync('apple.txt', 'welcome to apple')

// --create files in loop
for (i=0; i<4; i++){
    fs.writeFileSync(__dirname+'/files/'+'sample'+i+'.txt', 'files created in loop')
}
// read all files in a directory
// fs.readdir(__dirname+'/files', (err, files)=>{
//     console.log(files);
// })

// CRUD operations in node
const dirPath=path.join(__dirname,'/crud');
const filePath = path.join(__dirname, '/crud/apple.txt');
// fs.writeFileSync(filePath,'Apple products Handbook');
// read a file
fs.readFile(filePath,'utf-8',(err,content)=>{
    console.log(content)
})
// update a file
// fs.appendFile(filePath,'\n Get all guidlines and info about apple watch, iphones', (err)=>{if (!err) {
//     console.log('file Updated!')
// }})
// fs.unlinkSync(`${dirPath}/apple.txt`);
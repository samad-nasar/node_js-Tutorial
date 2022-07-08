
const http = require("../http");
// const data = require('./data.js');
const fs = require('../fs');
// to start the server run 'npm start' command

const input =process.argv;//process.argv returns array containg cmd inputs as elements(in string format).
// creating and deleting files using command line--
if (input[2]=='add') {
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{console.log('invalid input')}
// fs.writeFileSync('apple.txt', 'welcome to apple')
// console.log(input)
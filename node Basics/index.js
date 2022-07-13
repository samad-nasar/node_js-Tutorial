/*
    --CORE MODULES IN NODE--
    1.core module are the language built in modules/methods.
    -+Core modules are of two types+-
    a) Global Core modules. e.g console.
    b) Non-global modules e.g fs (file system), http
    Non-global modules require to be first imported using require().
*/
// --creatin basic server--
const http = require("http");
// const data = require('./data.js');
const fs = require('fs');
const path= require('path');
// to start the server run 'npm start' command
console.log(__dirname,'/files');
console.log('samad');
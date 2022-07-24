const express = require('express');
const path = require('path');
const publicPath=path.join(__dirname,'public');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'))// to load static html,css,js by express,the content(js,css) must be inside another folder inside public folder

app.get('/', (req, res)=>{
    res.render('tutorials');//pass file name (without extension)
})
app.get('/mongoDB',(req,res)=>{
    res.render('mongoDB_tut')
})

app.listen(400, ()=>console.log('port 400 running...'))
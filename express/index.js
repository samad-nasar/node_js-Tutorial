const express=require('express');
const path =require('path');

const app=express();
const publicPath=path.join(__dirname,'public');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/profile', (req, res) => {
    const user={
        name:'samad',email:'samad@gmail.com',
        skills:['php', 'javascript', 'java', 'swift', 'react']
    }
    res.render('profile', {user});
})
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
})
/*
app.get('/about', (req, res) => {
    res.send(`
    <input type="text" value='${req.query.name}'>
    <textarea cols="" rows= "15"> </textarea>
    <a href='/'>Go to Home Page</a>`);
})
*/
app.listen(400, ()=>console.log('port 400 running...'))
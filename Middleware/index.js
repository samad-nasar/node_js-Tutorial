const express =require('express');
const reqFilter=require('./middleware');
const app=express();
const route=express.Router();

// middleware is used to filter/check request (to check if condition is pulfilled), before sending the full data or giving full access to the user. it is used inbetween request and response.


// app.use(reqFilter);//this will apply middleware over all the routes. this is called application level middleware.
app.get('/', (req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})
// use middleware between the path paramater and arrow func, to filter just a specific route (/users in this case)
app.get('/users',reqFilter, (req, res) => {
    res.sendFile(`${__dirname}/users.html`)
})

// Using midlle ware on group of routes
route.use(reqFilter);
route.get('/contact-us', (req,res)=>{
    res.sendFile(`${__dirname}/contact-us.html`)
})
// use route at the beginnig where ever you want to apply middleware
app.use( '/',route)
app.listen(4000, ()=>console.log('port 4000 running'))
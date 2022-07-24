const express=require('express');
const app=express();
const dbConnect=require('./mongodb');

const main= async ()=>{
    let data=await dbConnect();
    data= await data.find().toArray();
    console.log(data);
}
main()

app.listen(300,console.log('port 300 running..'))

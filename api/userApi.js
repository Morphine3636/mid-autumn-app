const express=require('express'),
    app=express();

app.get('/userList',(req,res)=>{
    console.log(req,res)
})
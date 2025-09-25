// middleware refers to functions that sit in the middle of the request-response cycle. They can process requests, modify responses, or end the cycle entirely. Think of them as checkpoints or filters that run before your final route handler


const express = require('express')

const app= express()
const {products}= require('./data.js')

app.get('/',(req,res)=>{
    res.json(products);
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')


})


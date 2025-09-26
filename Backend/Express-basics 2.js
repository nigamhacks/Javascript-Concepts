// middleware refers to functions that sit in the middle of the request-response cycle. They can process requests, modify responses, or end the cycle entirely. Think of them as checkpoints or filters that run before your final route handler


const express = require('express')

const app= express()
const {products}= require('./data.js')

app.get('/',(req,res)=>{
    res.send('<h1> Home Page</h1><a href= "/api/products">products</a>');
})

app.get('/api/products/:productID',(req,res)=>{
    // const newProducts = products.map((products)=>{
    //     const {id,name}= products;
    //     // const id = products.id;     line 15 is same a this code, don't uncomment 
    //     //const name = products.name;   line 15 is same a this code, don't uncomment 
    //     return {id, name}
        

    // })

    //for particular product id 
    // console.log(req);
    // console.log(req.params);
    // const singleProduct= products.find((products)=>
    //     products.id===1
    // )

    //for mutliple product id 

    //const {productID} = req.params >> it is taking the number that user inputs on URL 
    const {productID} = req.params
    //In line 35, we are validating that the products is available or not 
    const singleProduct= products.find((products)=>products.id===Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product do not exist');
        }
        return res.json(singleProduct);
        })

//complex example

app.get('/api/products/:ProductID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.status(200).send('Hello World')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')


})


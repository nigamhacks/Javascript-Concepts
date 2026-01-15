const express = require('express')
const app = express().Router()


app.post('/login',(req,res)=>{
    const {name} =req.body
    if(name){
        return res.status(200).send(`Welcome' ${name}`)
    }
})  


module.exports = router;
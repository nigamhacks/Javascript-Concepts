const express = require('express')
const app = express()
const { products } = require('./data')
const logger = require('./logger')
const authorize  = require('./authorize')
const morgan = require('morgan')

// Apply logger middleware globally

// app.use(logger,authorize)

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/contactus', (req, res) => {
    res.send('Contact us')
})

app.get('/api/items', (req, res) => {
    res.send(req.user)
})

app.listen(5000, () => {
    console.log('server is active')
})
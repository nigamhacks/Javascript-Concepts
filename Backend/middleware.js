const express = require('express')
const app = express()
const { products } = require('./data')
const logger = require('./logger')

// Apply logger middleware globally
app.use(logger)

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/contactus', (req, res) => {
    res.send('Contact us')
})

app.listen(5000, () => {
    console.log('server is active')
})
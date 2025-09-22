const express  = require('express');
const path = require('path');
const app = express();
//Static files syntax

// app.use(express.static('./public'))               ./public is the path of the static folder 
// Serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './beautiful_homepage.html'));
});

// Handle all other routes
app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found');
});

// Start server
app.listen(5000, () => {
    console.log('Server is listening on Port 5000');
});

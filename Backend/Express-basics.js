const express = require('express'); // Importing the Express module

const app = express(); // Creating an Express application instance

// Route definitions:
// app.get    >> Read Data (GET requests)
// app.post   >> Insert Data (POST requests) 
// app.put    >> Update Data (PUT requests)
// app.delete >> Delete Data (DELETE requests)
// app.all    >> Handle all HTTP methods
// app.use    >> Middleware
// app.listen >> Start the server

// Home page route
app.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

// About page route
app.get('/about', (req, res) => {
    res.status(200).send('About page');
});

// 404 handler - this should be the last route
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
});

// Start the server
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
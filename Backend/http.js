const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our server');
    } else if (req.url === '/about') {
        res.end('This is the about');
    } else {
        res.end(`<h1>OOPS!</h1>
                 <p>Unable to find the page you're looking for</p>
                 <a href="/">back home</a>`);
    }
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});
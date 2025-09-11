
// below commented code is the analogy of request Event 
//Note It will not run

// const restaurant = require('pizza-place');
// const phoneSystem = restaurant.createServer();  // Set up phone system

// When phone rings (request comes in), take the order
// phoneSystem.on('incoming-call', (customerInfo, orderDetails) => {
//     orderDetails.end('Your pizza will arrive in 30 minutes!'); // Send response
// });

// phoneSystem.startAnswering('555-PIZZA'); // Start taking calls at this number


// Working code 

const http = require('http');                   
const server = http.createServer();           

server.on('request', (req, res) => {            
    res.end('Your pizza will arrive in 30 minutes!');
});

server.listen(9000); 
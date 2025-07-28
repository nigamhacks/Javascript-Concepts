
console.log("First request on call stack");

setTimeout(function(){
    console.log("After 1000ms this will get into task queue and there it'll wait for call stack to get empty");
}, 1000);

console.log("This request gets into call stack because the above function is Non-Blocking");

/* Output : 
First request on call stack
This request gets into call stack because the above function is Non-Blocking
After 1000ms this will get into task queue and there it'll wait for call stack to get empty
*/


// Concurrency in JavaScript refers to the ability to manage and execute multiple tasks or operations seemingly at the same time, even though JavaScript itself is fundamentally single-threaded. This means that while only one piece of code is truly executing at any given moment, JavaScript can handle multiple tasks by switching between them efficiently.
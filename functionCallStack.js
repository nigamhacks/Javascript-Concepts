// // let greet= function(){
// //     console.log("Hello Everybody");
// // }

// greet();




function greeting(greet, name){
    console.log('Hello', name);
    greet();
}

function greet(){
    console.log('Greetings!!');
}

greeting(greet, 'Sachin !!!');

//return function inside function 

function multi(number){
   return function(number){
        return number*number;
    }
}

multi(8)(8);

// At first glance, you might expect multi(8) to somehow square 8—but here’s the twist:
// - multi(8) returns a function, not a number.
// - That returned function has its own parameter named number, which shadows the outer number.
// - So, the 8 you passed in is ignored by the inner function unless you call it with another value.
// In short, the output o
 

// So basically there is another explaination of the code



// function multi(number){
//    return function(number){
//         return number*number;
//     }
// }

let ans= multi(8);

//will be ignored because the we are returning the function right!

//let ans= multi >> will give nothing on console



//In ans, inner fucntion stored 
//this ans behave like the function 

//check below: 

let finalAnswer =ans(10);

console.log(finalAnswer);




// function  print(m, t){
//     console.log();
// };



// we can save fucntion in variable
let x= console.log;

x(5);


function print (x){
    x+=10;
    return x;
}

console.log(print(10));
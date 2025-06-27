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


function greet(name){
    console.log('Hello ' + name);
}

greet('sachin');

//lets create clean code 

function square(number){
    return number*number;
}

const a= square(2);

console.log(a);

//another way writing it 

console.log(square(9));



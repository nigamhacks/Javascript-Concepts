//tell my name 

tellMyName('Sachin Nigam');
function tellMyName(finalName){
    console.log(finalName);
}

//As we can see when we call the function before the function definition it still runs and no errors at all 

//Reson >> Hoisting >> It moves the function at the top of the scope 

//In variable hoisting 
//Vairable goes to top of the scope but It does not copy the value, here is an example 

console.log(finalName);

var finalName = 'Sachin Nigam'


//It is showing undefined because of the reason mentioned above in var hoisting 



console.log(num);
let num= 1;

//for let >> No Hoisting 

console.log(rate);
const rate= 1;

//for cons >> No Hoisting 

sayHello();
//Function expression 
let sayHello=function(){
    console.log("Hello everyone");
}

// This Error will come in which Hoisting is not applicable :

// Uncaught ReferenceError: sayHello is not defined
  
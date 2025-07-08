//global scope
var age =15;

console.log(age);

{
    console.log(age);
}


if(true){
    console.log(age);
}

for(let i=0; i<2; i++){
    console.log(age);
}

function sayHello(){
    console.log('hello', age);
}

sayHello();



function sayHello1(){
    const fullName ='earth';
    console.log('hello', fullName);

}

// console.log(fullName);
// sayHello1();

//we can access the var outside the block 

//ex:

{
    var city1='NOIDA';
    var city2= 'bangalore';

}

//we cannot access the const & let outside the block 

//ex:


{
    let city3='NOIDA';
    let city4= 'Ahmedabad';

}

console.log(city3); 



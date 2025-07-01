//Creating objects
//Factories and Constructors
//Primittive and Refernce Types 
//Working with Properties 
//Private Properties
//Getter / Setters


// const circle = {
// radius: 1,
// location:{
//     x:1,
//     y:1
// },
// draw: function(){
//     console.log('draw');
// }
// };

// circle.draw();

//This is a Factory fucntion 

function createCircle(radius) {
    return {
        radius, // in ES6 : radius : radius if key value is same use it as shown
        draw: function () {
            console.log('draw')
        }
    };
}
const circle = createCircle(1);
circle.draw();


//Constructor Function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);
//new operator create an "Empty Object like this>>{}"
// In a broswer Window is the global object
//every objects has a constructor property that refercnces the fucntion we used to create that object
//when we run the code under the hood, new keyword will an Circle.call({}, 1); and const another =new Circle(1) are same


// Primitves are copied by their Value
// Objects are copied by their refernce

let number=10;
function increase(number){
    number++;
}

increase(number);
console.log(number);

let obj= {value:10};

function increases(obj){
    obj.value++;
}

increases(obj);
console.log(obj.value);



//Adding value the property to an object [. or [] notation]

// circle.location={x:1};
//we don't use dot notation when dealing with - or space b/w the property name ex-{Center Locaton} 

//this loop is used to enumerate the function
for (let key in circle){
    if(typeof circle[key] != 'function'){
        console.log(key, circle[key]);
    }
}

//this is used to find all the keys in the objects
const keys= Object.keys(another);
console.log(keys);

//this is used to find the property
if('radius' in another)
{
    console.log('Circle has a radius')
}

//basically we know how we mark promises from line 3 to 6

// let firstPromise =new Promise((resolve, reject)=>{
//     console.log('Hi there this is Sachin');
// }
// );

let asy = new Promise((resolve, reject)=>
{
    setTimeout(function myName(){
        console.log("Hello! I'm promise in async")
    },15000);
    resolve(1);
});


let promise1 =new Promise((resolve, reject)=> {
    let success=false;
    if(success){
        resolve('Promise is fullfilled');
    }
    else{ reject('Promise is rejected');}
});
// we use then when promise is fullfilled 
promise1.then((message)=>{
    console.log('then message is ' + message);
// we use catch we promise is rejected 
})
.catch((error)=>{
    console.log('Error: '+ error);
})
.finally((message)=>{
    console.log('I am the final block');
})


let p1= new Promise((resolve, reject)=>{
    setTimeout(resolve,1000, 'first');
})

let p2= new Promise((resolve, reject)=>{
    setTimeout(resolve,2000, 'second');
})
let p3= new Promise((resolve, reject)=>{
    setTimeout(resolve,3000, 'third');
})

Promise.all((p1, p2, p3)).then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.error('Error: ', error);
})


// Promises in JavaScript provide a structured and manageable way to handle asynchronous operations.
//  They represent the eventual completion or failure of an asynchronous operation and allow you to associate handlers with its eventual success value or failure reason.
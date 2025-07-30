//  await is usually used to unwrap promises by passing a Promise as the expression.
//  Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected).
//  When execution resumes, the value of the await expression becomes that of the fulfilled promise.

// async   function getData(){
//     setTimeout(function(){
//         console.log('I am inside set Timeout Block')},3000);
//     }

//     getData();

  
// await 

async function getData1() {

    //get request - async 
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //parse JSON - async

    let data1= await response.json();
    console.log(data1);
}
getData1();



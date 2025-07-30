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



const myHeaders = new Headers(); 
myHeaders.append("Content-Type", "application/json");

const url="'https://dummyjson.com/posts'";
const options = {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  headers: myHeaders,
};

async function getData2(){
    //line 40 will give error because site is not maintaining the post data 
    const url="https://dummyjson.com/posts/252";
     const response1 =await fetch(url);
     let data = await response1.json();
     console.log('Get Data Response: ', data);
}

async function postData2() {
    const response1 =await fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Sachin -> is in love with someone.',
    userId: 8,
    /* other post data */
  })
})
    let data = await response1.json();
    console.log('Post Data Response: ', data);
}

async function processData() {
    await postData2();
    await getData2();

}

processData();







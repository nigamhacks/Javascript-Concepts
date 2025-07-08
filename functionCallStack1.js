const arr=[
    function (a,b){
        return a+b;
    }, 
    function (a,b){
        return a-b;
    }, 
    function (a,b){
        return a*b;
    }
]

let first = arr[1];
//it will contain the second element of array 

let ans = first (10, 5);
console.log(ans);

let obj={
    age:26, 
    wt:90, 
    ht:190,

    //we can also define function in the object 
    greet: () =>{
        console.log("Hello Sachin");
    } 

}

obj.greet();


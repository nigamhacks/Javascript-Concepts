let obj ={
    age:18,
    weight:50,
    ht:180
};

console.log(obj);
obj.age=19;


//Object cloning methods 

//By using spread operator '...'

let clone={...obj};
console.log(clone);

//assign method 

//destination=object.assign
let src ={
    age:20,
    weight:53,
    ht:160
};

let dest=Object.assign({},src);
console.log(dest);

let src2={
    value:'Computer',
    name:'sachin'
};

//iteraion

let des= {};

for(let key in src2){
    let newKey=key;
    let newValue=src2[key];
    des[newKey]=newValue;
}

console.log(des);
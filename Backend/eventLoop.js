const {readFile} = require ('fs');

console.log('started the first task');

readFile('./first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed the first task');

})

console.log('starting the new task');
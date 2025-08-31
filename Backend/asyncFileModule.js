//Async

const{readFile, writeFile} =require('fs');

console.log('start')
//reading the first file
readFile('./first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }

    const first = result;
//reading the second file 
    readFile('./second.txt/', 'utf8',(err,result)=>{
 if(err){
        console.log(err);
        return;
    }

    const second = result;

    writeFile('./result-async.txt',`here is the result of async ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            // console.log(result)
            console.log('done with this task');
        }
    )

    })


  })

  console.log('starting next task');
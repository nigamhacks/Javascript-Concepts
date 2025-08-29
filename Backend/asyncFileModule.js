//Async

const{readFile, writeFile} =require('fs');

readFile('./first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }

    const first = result;

    readFile('./second.txt/', 'utf8',(err,result)=>{
 if(err){
        console.log(err);
        return;
    }

    const second = result;

    writeFile('./result-async.txt',`here is the result of async ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.lof(err);
                return;
            }
            console.log(result)
        }
    )

    })


  })
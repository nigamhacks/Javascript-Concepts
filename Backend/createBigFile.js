const {writeFileSync} =require('fs');

for(let i = 0; i<20000; i++){
   writeFileSync(`./bigtext.txt`, `hello world ${i}\n`, {flag:'a'})
}

//Note: clear bigtext.txt file before running this code 
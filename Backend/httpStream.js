var http =require('http');
var fs= require('fs');

http

.createServer(function(req,res){
    // const text = fs.readFileSync('./bigtext.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./bigtext.txt','utf8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res);
    })

    fileStream.on('error', (err)=>{
        res.end(err);
        })
})

.listen(5000);
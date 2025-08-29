// sync

const {readFileSync, writeFileSync, read}= require('fs');

const first = readFileSync('./first.txt', 'utf8');


const second = readFileSync('./second.txt', 'utf8');

console.log(first,  second);

writeFileSync('./third.txt', `hello this is the third text file: ${first}, ${second}`, { flag:'a'} ); 



// sync

const {readFileSync, writeFileSync, read}= require('fs');
console.log('start');

const first = readFileSync('./first.txt', 'utf8');


const second = readFileSync('./second.txt', 'utf8');

console.log(first,  second);

writeFileSync('./third.txt', `hello this is the third text file: ${first}, ${second}`, { flag:'a'} ); 

console.log('done with this task');

console.log('starting with the next one ')



//on - listen for an event 

//emit - emit an event
const EvenEmitter = require('events');

const customEmitter = new EvenEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`data received ${name}, with id ${id}` );
})

customEmitter.on('response', ()=>{
    console.log(`some other logic`);
})

customEmitter.emit(`response`, `john`, 34);


//Modules -Encapsulated Code(only share minimum)
//CommonJS , every file is mdoule (by default)

const sayHi= require('./sayHi');
const names= require('./firstModule');
const data = require('./alternativeFlavor');


console.log(sayHi);
console.log(names);
sayHi(names.john);
console.log(data);
require('./mindGrenade');

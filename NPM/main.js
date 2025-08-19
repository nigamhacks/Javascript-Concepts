// there is probel when running this file in the browser to overcome that problem 

// with the help of broswerfiy >> We have bundled the main.js to bundle.js and then moment is working fine 
// browserify main.js -o bundle.js 

var moment = require("moment");
var myDate = new Date();
var formattedDate = moment(myDate).format("LL");
console.log(formattedDate);



var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));


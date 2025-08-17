
var moment = require("moment");
var myDate = new Date();
var formattedDate = moment(myDate).format("LL");
console.log(formattedDate);
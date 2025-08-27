const path= require('path');

console.log('this is a path separator for Windows' ,path.sep);

const filePath =path.join('/contents', 'subfolder', 'app.js')

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute =path.resolve(__dirname, 'content', 'subfolder', 'app.js');

console.log('It is an absolute path', absolute);
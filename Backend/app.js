const { readFile, writeFile } = require("fs").promises;
// const util = require('util');
// const readFilePromise= util.promisify(readFile);

// const writeFilePromise= util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./first.txt", 'utf8');
    const second = await readFile("./second.txt", 'utf8');
    //first two promises to read file 
    await writeFile('./data.txt', `This is awesome : ${first} ${second}`);
    //this promise is used to write the data.txt file with contents of first and second text file
    console.log(first, second);

  } catch (error) {
    console.log(error);
  }
};
start();

//Note => while running this module please clear data.txt file 

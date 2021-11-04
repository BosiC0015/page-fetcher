// It should take two command line arguments:
// 1. a URL
// 2. a local file path
const request = require('request');
const fs = require('fs');

function getFilesizeInBytes(filename) {
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

const writeContentsOfPage = function(url, done) { 
  console.log('breedDetailsFromFile: Calling readFile...');
  request(url, 'utf8', (error, body) => {
    console.log("it has the data.");
    if (!error) done(body);
  });
};

const writeInFiles = (content) => {
  fs.writeFile('./index.html', content, err => {
    if (err) {
      console.error(err)
      return
    }
  const filesize = getFilesizeInBytes('./index.html')
  console.log(`Downloaded and saved ${filesize} bytes to ./index.html`) // => print out details correctly.
  })
}

writeContentsOfPage('http://www.example.edu/', writeInFiles);




// Edge cases : 1. the local file already exists?
// 2. the local file path given is invalid?
// 3. the URL results in an error or non-200 result?
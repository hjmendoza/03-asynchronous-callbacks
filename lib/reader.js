'use strict';

const fs = require('fs');

// Wrap the fs.readFile method with our interface so that we can properly test it modularly.

const read = function (file, callback) {
  fs.readFile(file, (err, data) => {
    if (err) {
      callback(err);
    }
  });
};
 
module.exports = read;
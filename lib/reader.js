'use strict';

const fs = require('fs');

const read = function (paths, callback) {
  for(let i = 0; i < paths.length; i++){
    fs.readFile(paths[i], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(undefined, data.toString().trim());
      }
    });
  }
};
 
module.exports = read;
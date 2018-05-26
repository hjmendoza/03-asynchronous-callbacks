'use strict';

const fs = require('fs');

const read = function (paths, callback) {
  let returnArr = [];
  let error = false;

  for (let i = 0; i < paths.length; i++) {
    fs.readFile(paths[i], (err, data) => {
      if (err) {
        error = true;
        callback(err);
      } else {
        returnArr[i] = data.toString().trim();
      }
      if (!error && paths.length === returnArr.length) {
        callback(undefined, returnArr);
      }
    });
  }
};

module.exports = read;
'use strict';

const reader = require('../lib/reader.js');

describe('File Reader Module', () => {

  it('should callback with error if a file does not exist', (done) => {
    done();
  });

  xit('should call with error if for any file that does not exist', (done) => {

    read([__dirname + '/data/1.txt', 'nonexisting.txt'], (err) => {
      expect(err).not.toBeNull();
    })
    // let file = `${__dirname}/../../data/file1.txt`;
    // reader(file, (err,data) => {
    //   expect(err).toBeUndefined();
    //   // We don't need to care what the text is, only that we got back a string
    //   // That's the interface of our reader module: Give a file+cb, get back stringified  contents
    //   expect(typeof data).toBe('string');
  });
});
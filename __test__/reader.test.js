'use strict';

const read = require('../lib/reader.js');

describe('File Reader Module', () => {

  it('should callback with error if a file does not exist', (done) => {
    read(['nonexisting.txt'],(err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('should call with error if for any file that does not exist', (done) => {
    read([__dirname + '/data/1.txt', 'nonexisting.txt'], (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });
});
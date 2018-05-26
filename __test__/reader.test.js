'use strict';

const read = require('../lib/reader.js');

describe('File Reader Module', () => {
  it('should callback with error if a file does not exist', (done) => {
    read(['nonexisting.txt'],(err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('should callback with error if any file does not exist', (done) => {
    read([__dirname + '/data/1.txt', 'nonexisting.txt'], (err) => {
      expect(err).not.toBeNull();
      done();
    });
  });

  it('should return data from a file', (done) => {
    read([__dirname + '/../data/1.txt'], (err, data) => {
      expect(err).toBeUndefined();
      expect(data.toString()).toBe('first file.');
      done();
    });
  });

  it('should return data for all files', (done) => {
    let files = [];
    for (let items of ['1', '2', '3']) {
      files.push(__dirname + '/../data/' + items + '.txt');
    }
    read(files, (err, data) => {
      expect(err).toBeUndefined();
      expect(data[0]).toBe('first file.');
      expect((data[1]).startsWith('second.')).toBe(true);
      expect((data[2]).startsWith('Third text.')).toBe(true);
      done();
    });
  });
});
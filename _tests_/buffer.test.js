'use strict';

const fs = require('fs');

describe('buffer program', () => {

  it('generates the target string', (done) => {
    fs.readFile(__dirname+'/../files/loop.js', function(err, data){
      if (err){throw err;}
      let expected = '["Adam Eivy","Ilya Eivy","Lena Eivy"].forEach(name=>{console.log(name);});';
      let result = data.toString();
      expect(result).toEqual(expected);
      done();
    });
  });
});

describe('pair-programming program', () => {

  it('produces html text', () => {
    fs.readFile(__dirname+'../files/pair-programming.html', function(err, data){
      let expected = '<article><h2>6 Reasons for Pair Programming</h2><li>Iterative loops.</li>';
      let result = data.toString().substring(0,expected.length);
      expect(result).toEqual(expected);
    });
  });
});
'use strict';

const fs = require('fs');
let program = '["Adam Eivy","Ilya Eivy","Lena Eivy"].forEach(name=>{console.log(name);});';

function makeBuffer(str){
  let buffer = new Buffer.from('');
  for(let i = 0; i < str.length; i++){
    buffer += new Buffer.from(str[i]);
  }
  return buffer;
}


function makeFile(filePath, myBuffer){
  console.log('calling make file');
  fs.writeFile(filePath, myBuffer, (err) => {
    if(err) {throw err;}
  });
}

let buffer = makeBuffer(program);
makeFile('./files/loop.js', buffer);


////////////////////the solution//////////
// class CodeGenerator{
//   constructor(code) {
//     this.code = code;
//     this.buffer = Buffer.from('');
  
//   }

//   addCharacter(char) {
//     let newBuffer = Buffer.from(char);
//     this.buffer = Buffer.concat([this.buffer, newBuffer]);
//   }

//   generate() {
//     this.code.split('').forEach(char => {
//       this.addCharacter(char);
//     });
//   }
// }
// let code = new CodeGenerator(program);
// code.generate();

// fs.writeFile('./loop.js', code.buffer, (err,data)=> {
//   if(err) {throw err;}
//   console.log('Crated loop.js');
// });

/// other solutions
// measure the length and create a buffer of total length and fill will gibberish and then going node by node and put in the right thing based on char code

//created the buffer of the total length and fill with the raw code string

//split string, for each - .push with buffer.value then in fs write, value.join


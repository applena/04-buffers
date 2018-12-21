'use strict';

const fs = require('fs');
let program = '["Adam Eivy","Ilya Eivy","Lena Eivy"].forEach(name=>{console.log(name);});';

function makeHexString(str){
  let hexString = '';
  for(let i = 0; i < str.length; i++){
    hexString += (hexString.length?' ':'')+str.charCodeAt(i).toString(16);
  }
  return hexString;
}

let hex = makeHexString(program);
let buffer = Buffer.alloc(hex.length, hex, 'utf8');

function makeFile(filePath, myBuffer){
  fs.writeFile(filePath, myBuffer, (err) => {
    if(err) {throw err;}
  });
}

makeFile('./files/loop.js', buffer);


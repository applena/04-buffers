'use strict';

const fs = require ('fs');

fs.readFile(__dirname+'/pair-programming.txt', function(err, buffer){
  if(err) {throw err;}
  console.log(buffer.length);
  for(let i = 0; i<buffer.length; i++){
    //convert each numbered section to h3 tags
    if((buffer[i]+buffer[i+1] === test(/[30-39](2e)/)
  };
});
'use strict';

const fs = require ('fs');

fs.readFile(__dirname+'/pair-programming.txt', function(err, buffer){
  if(err) {throw err;}
  console.log(buffer.length);
  let content = new Buffer.from('<article><h2>');

  let h2Closed = false;
  let h3Closed = true;
  let numberRegex = (/(49|(5[0-7]))46/);

  for(let i = 0; i<buffer.length; i++){
    //convert each numbered section to h3 tags

    // numbered section (e.g. "1. content" => "<h3>1. content</h3>")
    if(numberRegex.test(buffer[i]+''+buffer[i+1])){
      content += new Buffer.from('<h3>');
      content += new Buffer.from([buffer[i]]);
      h3Closed = false;
      // continue iterating until we get to the newline
    }else if(buffer[i]===10){
      content += new Buffer.from([10]);
      if(!h3Closed){
        content += new Buffer.from('</h3>');
        h3Closed = true;
      }
      // newline
      if(!h2Closed){
        content += new Buffer.from('</h2><li>');
        h2Closed = true;
      } else if (buffer[i] === 10 && buffer[i+1] === 10) {
        content += new Buffer.from('<li>');
      }
    }else if(buffer[i] === 46 && !(numberRegex.test(buffer[i-1]+''+buffer[i]))){
      // closing of a sentance (not numbered)
      content += new Buffer.from([buffer[i]]);
      content += new Buffer.from('</li>');
      if(!(buffer[i+1]===10 && buffer[i+2]===10)){
        // not new section
        content += new Buffer.from('<li>');
      }
    }else{
      content += new Buffer.from([buffer[i]]);
    }
    
  }
  //content += buffer;
  content += new Buffer.from('</article>');

  fs.writeFile(__dirname+'/pair-programming.html', content, (err) => {
    if(err){throw err;}
    console.log('file saved');
  });

});
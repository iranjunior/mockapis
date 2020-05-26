const path = require('path');
const fs = require('fs');

module.exports = () => {
 const response = {};
  const files =  fs.readdirSync(path.resolve(__dirname, 'responses'));
  for(let i = 1; i < files.length; i+= 1){
    const value = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'responses', files[i])));
    
    Object.assign(response, Object.defineProperty({}, files[i].split('.')[0], {value, enumerable: true}));
  }

  return response
}
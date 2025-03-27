var forge = require('node-forge');
var inputText = 'The quick brown fox jumps over the lazy dog';
console.log('Input Text: ' + inputText);

var md = forge.md.md5.create();
md.update(inputText);
console.log('MD5: ' + md.hash().toHex());

var md = forge.md1.md5.create();
md.update(inputText);
let result = md.digest();
console.log(result);
console.log('MD5: ' + forge.util.bytesToHex(result));

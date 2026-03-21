const fs = require('fs');
let js = fs.readFileSync('main.js', 'utf8');
js = js.replace('"./bubble.png"', '"./1.svg"');
js = js.replace('"./bubble-1.png"', '"./2 (3).svg"');
js = js.replace('"./bubble-2.png"', '"./3.svg"');
fs.writeFileSync('main.js', js);
console.log('patched');

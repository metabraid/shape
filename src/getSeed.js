const fs = require('fs');
let seedObj = JSON.parse(fs.readFileSync('defaultseed.json', 'utf-8'));
console.log(JSON.stringify(seedObj));
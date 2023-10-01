const path = require("path")
const pathParse = path.parse("C:\Users\Shahul\OneDrive\Documents\Trends\Node Js\NodeJS_Basics\PathModule\Path.js")
//console.log(pathParse)
console.log(pathParse.base);
console.log(pathParse.root);
console.log(pathParse.ext);
console.log(pathParse.name);

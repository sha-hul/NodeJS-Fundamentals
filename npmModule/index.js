
//Module Wrapper function 
(function(exports, require, module,_filename,_dirname){
const val = require("validator")

//Validator Depencency is used for form validation purpose
console.log(val.isAlphanumeric("Ibdshb@do21"));
console.log(val.isEmail("shahul712@gamsil.com"))
})

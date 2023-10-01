
//User defined Methods in own Modules 
const sub =(a,b)=>{
return a-b;
}
const add =(a,b)=>{
    return a+b
}
const multi =(a,b)=>{
    return a*b
}

//User defined variable in own Modules 
const name ="Shahul";

//In Node JS ever file are private scope to make them global scope. It's required to perform the Export Module activity
//for simple one
//module.exports = add; 

//If we have more methods/properites we can export in  two methods we can use

//1) Method 1 assign a property to methods
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// module.exports.name = name;

//2) Method 2  as an array
module.exports = {add,sub,multi,name};
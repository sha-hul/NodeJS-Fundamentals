const empDetails = {
    name : "Shahul",
    employeeID : "52028486",
    baseloc:"Chennai-AMB",
    role : "Developer"
}
//Convert Object to JSON
// var convert2Json = JSON.stringify(empDetails)
// var convert2Obj = JSON.parse(convert2Json)
// console.log(convert2Obj)

//challenge

//1) convert to json 
const Biojson = JSON.stringify(empDetails)
//console.log(Biojson)
//2)Add this data to another file
const fs = require("fs")

fs.writeFile("Bio.json",Biojson,(err)=>{
// console.log(err);
})
//3)Read the file
fs.readFile("Bio.json","utf-8",(err,data)=>{
    console.log(data)
    console.log(err)
})
//4)Convert back to object
const bioObj = JSON.parse(Biojson)
//print
console.log(bioObj)
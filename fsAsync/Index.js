const fs = require("fs")
const os= require("os")
//Async file handling 

//To Create the file and add text

// fs.writeFile('read.txt','Hi I am created using the async File handling',(err)=>{
//  console.log("File has been created")
//  console.log(err)
// })

//To read the read.txt file 'UTF-8' req
//Two arg must be shown one for error and other for data

//Async 

// fs.readFile('read.txt','utf-8',(err,res)=>{
//     console.log(res)
//     console.log(err)
// })
// console.log("Hi I'm a small work")

//sync 

// let data = fs.readFileSync('read.txt','utf-8')
// console.log(data);
// console.log("Hi I'm a small work")\


//Challenge on Async File Handling
//1)Create a folder named as Handbook
// fs.mkdir('Handbook',(err)=>{
// console.log(err);
// })
//2)Create a file Bio and data into it
// fs.writeFile('Handbook/Bio.txt',' Name : Shahul \n Age : 24 \n Designation : Software Engineer ',(err)=>{
//     console.log(err)
// })
//3)Add more data into the file at the end of the existing data
// fs.appendFile('Handbook/Bio.txt','\n Phone num : 7826927252',(err,data)=>{
//     console.log(data)
//     console.log(err)
// })

//4)Read the data without getting the buffer data at first

// fs.readFile('Handbook/Bio.txt','utf-8',(err, data)=>{
//     console.log(data)
//     console.log(err)
// })

//5)Rename the file to the MyBio.txt

// fs.rename('Handbook/Bio.txt','Handbook/myBio.txt',(err)=>{
//     console.log(err)
// })

//6)Delete both the file and the folder

// fs.unlink('Handbook/myBio.txt',(err)=>{
//     console.log(err)
// })

// fs.rmdir('Handbook',(err)=>{
// console.log(err)
// })


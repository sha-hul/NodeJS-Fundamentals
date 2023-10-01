//Node JS Core Modules 
//File Handling

const fs = require('fs');  // to give a variable name to a module 'fs' 
//require() - is like the import or using

//Sync - to perform only one task at a time.
//Async - to perform multiple task at a time. 

//To Create the file and add text
//fs.writeFileSync('readtext.txt','Hello bro this is my first file');

//To Overwrite the file
//fs.writeFileSync('readtext.txt',"Node JS is just WOW")

//To Append New Sentance in file
//fs.appendFileSync('readtext.txt',"Let's go and research more on this")

//To Read the file in Node JS
//const Buf_Read=fs.readFileSync('readtext.txt')
//console.log(Buf_Read)

//So by default it will give to buffer value while reading the text.
//<Buffer 4e 6f 64 65 20 4a 53 20 69 73 20 6a 75 73 74 20 57 4f 57 4c 65 74 27 73 20 67 6f 20 61 6e 64 20 72 65 73 65 61 72 63 68 20 6d 6f 72 65 20 6f 6e 20 74 ... 3 more bytes>

//Buffer is not in JS but in Node JS to avoid this we will proceed for Conversion.

//const Orginal_Text = fs.readFileSync('readtext.txt').toString()
//console.log(Orginal_Text)

//To Rename the file

//fs.renameSync('FileHandlingDemo.txt','Z.txt')

//File Handling Challenge

//1)Create a folder in Name as FileChallenge 

//fs.mkdirSync("FileChallenge")

//2)Create a file name Bio.txt and data into it

// fs.writeFileSync('FileChallenge/Bio.txt',' Name : Shahul \n Age : 24 \n Designation : Software Engineer ')

//3)Add more data into the file at the end of the existing data

// fs.appendFileSync('FileChallenge/Bio.txt',' Phone num : 7826927252')

//4)Read the data without getting the buffer data at first

//const read_Bio = fs.readFileSync('FileChallenge/Bio.txt').toString()
// or
//const read_Bio = fs.readFileSync('FileChallenge/Bio.txt','utf-8')
//console.log(read_Bio)

//5)Rename the file to the MyBio.txt

//fs.renameSync('FileChallenge/Bio.txt','FileChallenge/Mybio.txt')

//6)Delete both the file and the folder

// fs.unlinkSync('FileChallenge/Mybio.txt')
//fs.rmdirSync('FileChallenge')

fs.renameSync('fsAsyn.js','fsAsync.js')
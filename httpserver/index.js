//module used for creating server

// const http = require("http")
// const server = http.createServer((req, res)=>{
//     res.end("Hello I'm first JS running from Server side")
// })

// server.listen("8080","127.0.0.1",(err)=>{
// console.log(err)
// console.log("Hi JS Server side ready to rock ")
// })


//Http Handling

//1) require the module 'http'

const http = require("http")
const server = http.createServer((req,res)=>{
    if (req.url == "/") {
        res.end("Hi I'm the home Page")        
    }
    else if (req.url == "/contact") {
        res.end("Hi I'm the Contact Page")        
    }
    else if (req.url == "/about") {
        res.end("Hi I'm the about Page")        
    }
    else if (req.url == "/admin") {
        res.write("<h1>Hi Only admin have access</h1>")
        res.end()        
    }
    else {
        res.writeHead(404,{"Content" :"typetext/html"})
        res.end("404 No page found")        
    }
})

server.listen("8080","127.0.0.1",()=>{
    console.log("Server Created Successfully")
})
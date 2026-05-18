const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {   
    res.end("Hello from server again")   
})

myServer.listen(8000, () => console.log("server is running"))
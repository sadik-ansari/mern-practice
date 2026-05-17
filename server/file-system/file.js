const fs = require('fs');

fs.writeFile("./test.txt", "Hello there", (error, data) => {
    if(error) {
        console.log(error)
    }
})

fs.readFile("./test.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

console.log("run")
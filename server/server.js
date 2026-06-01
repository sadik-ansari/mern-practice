import express from 'express';
import users from './MOCK_DATA.js'
import fs from 'fs'
const app = express()

//middleware
app.use(express.json())


app.get('/users', (req, res) => {
    console.log(users)
    res.send(users)
})

app.post('/user', (req, res) => {
    const user = req.body
    users.push({...user, id: users.length + 1})
    fs.writeFile('./MOCK_DATA.js', `let users = ${JSON.stringify(users)}; export default users`, (error, result) => {
        if(error) {
            res.send(error)
        } else {
            res.send({message: 'succes', id: user.length})
        }
    })
})


app.listen(3000, () => console.log(`server is running on http://localhost:3000`))
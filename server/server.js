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
    users.push({ ...user, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.js', `let users = ${JSON.stringify(users)}; export default users`, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send({ message: 'succes', id: user.length })
        }
    })
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    let user = users.find((user) => user.id === id)

    if (user) {
        res.send({ message: 'success', user: user })
    } else {
        res.send({ message: 'user not found' })
    }
})

app.patch('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const updatedUserData = req.body
    const update = users.map((user) => user.id === id ? { ...user, ...updatedUserData, id } : user)

    fs.writeFile('./MOCK_DATA.js',`let users = ${JSON.stringify(update)}; export default users`, (error) => {
        console.log(error)
    })
    res.send({data: users[users.length - 1]})
})

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const filteredUsers = users.filter((user) => user.id !== id)

    fs.writeFile('./MOCK_DATA.js', `let users = ${JSON.stringify(filteredUsers)}; export default users`, (error) => {
        console.log(error)
    })

    res.send(users)
})


app.listen(3000, () => console.log(`server is running on http://localhost:3000`))
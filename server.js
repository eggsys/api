const express = require('express')
const app = express()
app.use(express.json())
var usersRouter = require('./routes/users');
var AuthenRouter = require('./routes/Authenticate')

var auth = require('./middleware/auth')
const authorization = require('./middleware/authorization')


//app.use('/login', AuthenRouter)
app.use('/posts', usersRouter)







app.listen(3000)
const express = require('express')
const app = express()
app.use(express.json())
var usersRouter = require('./routes/users');
var mocksRouter = require('./routes/mockup');
var AuthenRouter = require('./routes/Authenticate')
const CommentRouter = require('./routes/Comments')

var auth = require('./middleware/auth')
const authorization = require('./middleware/authorization')


//app.use('/login', AuthenRouter)
app.use('/posts', usersRouter)
app.use('/mocks', mocksRouter)
app.use('/comments', CommentRouter)







app.listen(3000)
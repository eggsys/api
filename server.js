const express = require('express')
const app = express()
app.use(express.json())
var usersRouter = require('./routes/users');
var mocksRouter = require('./routes/mockup');
var AuthenRouter = require('./routes/Authenticate')
const CommentRouter = require('./routes/Comments')
const UploadRouter = require('./routes/upload')

var auth = require('./middleware/auth')
const authorization = require('./middleware/authorization')


//app.use('/login', AuthenRouter)
app.use('/posts', usersRouter)
app.use('/mocks', mocksRouter)
app.use('/comments', CommentRouter)
app.use('/upload',UploadRouter)







app.listen(3000)
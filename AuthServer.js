const express = require('express')
const app = express()
app.use(express.json())

var AuthenRouter = require('./routes/Authenticate')
var ReToken = require('./routes/reToken')

app.use('/login', AuthenRouter)

app.use('/token', ReToken)








app.listen(4000)
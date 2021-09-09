const express = require('express')
const app = express()
app.use(express.json())

var AuthenRouter = require('./routes/Authenticate')


app.use('/login', AuthenRouter)








app.listen(4000)
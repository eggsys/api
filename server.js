const express = require('express')
const app = express()
app.use(express.json())
var usersRouter = require('./routes/users');
var Authen = require('./routes/Authenticate')

var auth = require('./middleware/auth')


//app.use('/users', usersRouter);


app.use('/login', auth, Authen)


/*
app.post('/login3',auth,(req, res, next) =>{
    console.log(req.body.username)
    console.log("DONE")
    res.send("3 pass")
})
*/


app.listen(3000)
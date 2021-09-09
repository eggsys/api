var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config()

var saveToken = require('../middleware/throwToken')

const log = (v, tick) => console.log(`${v} Elapsed: ${Date.now() - tick} ms`)

const posts = [
    {
        username: 'rungkrit',
        title: 'My Developer Story2'
    }
]

let refreshTokens = []

router.post('/', async function (req,res,next)  {
    const tick = Date.now()
    const usr = req.body.username  ? req.body.username : null
    const pwd = req.body.password ? req.body.password : null
    const email = req.body.email ? req.body.email : null

    const result = await Promise.all([usr, pwd, email])
    console.log(result)
    
    //const accessToken = jwt.sign({usr,pwd,email}, process.env.ACCESS_TOKEN_SECRET)
    const accessToken = generateAccessToken(usr,pwd,email)
    const refreshToken = generateRefreshToken(usr,pwd,email)

    try {
        saveToken.save_token(refreshToken)
    } catch (error) {
        console.log("Save Token : "+ error)
    }

    
    
    refreshTokens.push(refreshToken)
    res.json({ accessToken : accessToken, refreshToken : refreshToken})
    //res.send("Done " + usr )
    log('Authentication', tick)
    console.log("result :" + result)
})


function get_refreshToken() {
    return refreshTokens
}



function generateAccessToken(usr, pwd, email) {
    return jwt.sign({usr,pwd,email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30'})
}

function generateRefreshToken(usr, pwd, email) {
    return jwt.sign({usr,pwd,email}, process.env.REFRESH_TOKEN_SECRET)
}






module.exports = router;
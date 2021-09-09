const express = require('express')
const app = express()
var router = express.Router();


function auth(req, res, next){
    console.log("auth auth auth auth auth ")
    console.log(req.body.username)
    if(req.body.username != 'hack'){
       
        console.log("AUTH PASS")
        next()
    }else{
        res.send('No auth')
    }
}


module.exports = router;
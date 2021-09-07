const express = require('express')
const app = express()
var router = express.Router();


function auth(req, res, next){
    console.log(req.body.username)
    if(req.body.username != 'hack'){
        next()
        console.log("AUTH PASS")
    }else{
        res.send('No auth')
    }
}


module.exports = router;
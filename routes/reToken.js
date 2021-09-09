var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config()
const authorization = require('../middleware/throwToken')

const log = (v, tick) => console.log(`${v} Elapsed: ${Date.now() - tick} ms`)




router.post('/', (req,res,next) => {
    //const result =  authorization.add(5,5)
    //const take = authorization.save_token('newtoken')
    const result = authorization.getRefreshToken()
    console.log(result)
    res.json({"Result" : result[0]})
    
    
})







module.exports = router;
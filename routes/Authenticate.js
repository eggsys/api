var express = require('express');
var router = express.Router();

const log = (v, tick) => console.log(`${v} Elapsed: ${Date.now() - tick} ms`)

const posts = [
    {
        username: 'rungkrit',
        title: 'My Developer Story2'
    }
]

router.post('/', async function (req,res,next)  {
    const tick = Date.now()
    const usr = req.body.username  ? req.body.username : null
    const pwd = req.body.password ? req.body.password : null
    const email = req.body.email ? req.body.email : null

    const result = await Promise.all([usr, pwd, email])
    
    res.send("Done " + usr )
    log('Authentication', tick)
    console.log("result :" + result)
})





module.exports = router;
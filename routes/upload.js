const { json } = require('express');
const express = require('express');
const router = express.Router();

const mymulter = require('../middleware/multer')




router.post('/profile', mymulter.uploads.single('avatar'), function (req, res, next) {
    //console.log(req.body)
    console.log(req.file)
    console.log("original : ", req.file.originalname)
    console.log("Body :  ", req.body)
    //const uploadImg = multer({storage: storage}).single('avatar');
    console.log("call strorage")
    
    
    
    //res.send({ "status ": "200" })
    res.sendStatus(200);
})



module.exports = router;
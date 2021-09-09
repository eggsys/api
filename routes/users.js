var express = require('express');
var router = express.Router();
const app = express();
const authorization = require('../middleware/authorization')


const posts = [
    {
        username: 'rungkrit',
        title: 'My Developer Story'
    }
]


router.post('/', authorization, (req, res, next) =>{
    
    console.log(req.headers['authorization'])
    console.log('route users')
    res.json(posts);
} )




module.exports = router;
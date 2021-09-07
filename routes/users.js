var express = require('express');
var router = express.Router();


const posts = [
    {
        username: 'rungkrit',
        title: 'My Developer Story'
    }
]



router.get('/', function (req, res, next) {
    res.json(posts);
});


router.get('', function (req, res, next) {
    res.json(posts);
});

module.exports = router;
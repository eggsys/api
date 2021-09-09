const jwt = require('jsonwebtoken');


/*
module.exports = (req, res, next) => {
    try {
        console.log(" AUTHORIZATION AUTHORIZATION AUTHORIZATION AUTHORIZATION")
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]        
        console.log(token)
        const decoded = jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};

*/



function authorization(req, res, next) {
    try {
        
        console.log(" AUTHORIZATION for  : " + req.body['user'])
        const authHeader = req.headers['authorization']
        console.log("*********************sss*")
        const token = authHeader && authHeader.split(' ')[1]        
        console.log("Token :: "+authHeader)

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};


module.exports = authorization;
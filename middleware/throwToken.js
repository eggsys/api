
function add(x, y) {
    return x + y;
    
}

access_token = []


function save_token(token) {
    access_token.push(token)
    
}


function getRefreshToken() {
    token = access_token
    return token;
    
}

module.exports = {add, save_token, getRefreshToken};
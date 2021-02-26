const jwt = require('jsonwebtoken');
var key = process.env.JWT_SECRET_KEY;


tokenVerify = async function authenticateToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    var bearerToken = ''
    var decodedValue = '';
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        bearerToken = bearer[1];
    } else {
        return res.send({ status: 401, message: "Token Null!" });
    }
    await jwt.verify(bearerToken, key, (err, user) => {
        if (err) return res.send({ status: 403, message: "Token Invalid!" });
        if (!user) return res.send({ status: 403, message: "Token Invalid!" });
        decodedValue = user;
    });
    return decodedValue;
}

module.exports = tokenVerify;
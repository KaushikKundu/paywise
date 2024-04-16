const jwt = require('jsonwebtoken');
const config = require('./config');
const authMiddleware = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({message:'No token provided'});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decodedToken = jwt.verify(token,config.JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    }
    catch(err){
        return res.status(403).json({});
    }
}
module.exports = {
    authMiddleware
}



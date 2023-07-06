const jwt = require('jsonwebtoken');
const {secretKey}=require('../config/config');
// ('jwtprivatkey')
module.exports = function (req, res, next) {

        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
      
        if (!token) {
          return res.sendStatus(401); // Unauthorized
        }
      
        jwt.verify(token,secretKey, (err, user) => {
          if (err) {
            return res.sendStatus(403); // Forbidden
          }
      
          req.user = user;
          next();
        });
      }
    

    

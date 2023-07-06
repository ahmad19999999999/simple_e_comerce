const UserRoles = require('../config/userroles');

module.exports=  (req, res,next) => {

  if (req.user && req.user.type_user === UserRoles.ADMIN) {
    res.status(200);
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
  
};
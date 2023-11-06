const jwt = require('jsonwebtoken');
const config = require('../config/config-secret');
const db = require('../models');

 function authorize(allowedRoles, allowedPermissions) {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).send('Unauthorized');
      }

      const token = authHeader.split(' ')[1];
      const decodedToken = jwt.decode(token, config.secretKey);
      const userId = decodedToken.userId;

      const userRoles = await db.models.UserRoles.findAll({
        where: { UserId:userId},
      });

      const userPermissions = await db.models.UserPermisions.findAll({
        where: { UserId:userId},
      });

      // Extract Role and Permission IDs from userRoles and userPermissions
      const roleIds = userRoles.map(userRole => userRole.RoleId);
      const permissionIds = userPermissions.map(userPermission => userPermission.PermisionId);

      const role=await db.models.Roles.findAll({where:{id:roleIds},attributes:['name']});
      const permi=await db.models.Permision.findAll({where:{id:permissionIds},attributes:['name']});

     
      const roleMatches = allowedRoles.every(allowedRole =>
        role.some(userRole => userRole.name === allowedRole)
      );
      
      const permissionMatches = allowedPermissions.every(allowedPermission =>
        permi.some(userPermission => userPermission.name === allowedPermission)
      );
      
      if (!roleMatches || !permissionMatches) {
        return res.status(403).send('Access denied. You do not have the required role(s) and permission(s) to access this resource.');
      }
      
      

      req.user =userId;

      next();
    } catch (error) {
      console.error(error);
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).send('Unauthorized');
      } else {
        return res.status(500).send('Internal Server Error');
      }
    }
  };
}

module.exports = authorize;

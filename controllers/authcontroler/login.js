const { models: { User, user_roles, user_permision } } = require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../../config/config-secret');


module.exports = {
  login: async (req, res) => {
    try {
      const user = await User.findOne({ where:{ username:req.body.username } });

      if (!user) {
        return res.status(400).send('Invalid username or password');
      }

      const validPassword = bcrypt.compare(req.body.password,user.password);

      if (!validPassword) {
        return res.status(400).send('Invalid username or password');
      }

    

      const token = jwt.sign(
        {
          userId:user.id,
        },
        config.secretKey,
        { expiresIn: '1h' }
      );
      // console.log(userRoles);
      // console.log( userPermissions);

      res.send({ user, token });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to login',
      });
    }
  },
};

const { models: { User } } = require('../../models');

const { sendResetEmail} = require('../../utils/email');
const generateToken=require('../../utils/tokengeneret')

module.exports = {
forgetpassword:  async (req, res) => {
    try {
      const { email } = req.body;

      // Find the user by email
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Generate a password reset token
      const token = generateToken.generateToken();
  
      // Update the user's reset token and expiration date in the database
      // user.resetToken = token;
      // user.resetTokenExpiresAt = Date.now() + 3600000; // Token expires in 1 hour
      // await user.save();
  
      // Send the password reset email
      await sendResetEmail(user.email, token);
  
      return res.json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  
}
}

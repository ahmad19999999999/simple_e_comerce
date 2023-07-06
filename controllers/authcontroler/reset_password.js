

const { models: { User } } = require('../../models');
module.exports = {
reset_password:  async (req, res) => {

try {
    const { token, password } = req.body;

    // Find the user by the reset token and check if it's valid
    const user = await User.findOne({
      where: {
        resetToken: token,
       // resetTokenExpiresAt: { $gt: Date.now() }, // Check if the token has not expired
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'Invalid or expired token' });
    }

    // Update the user's password only if the token is valid
    user.password = password;
    resetToken = null;
    resetTokenExpiresAt = null;
    await user.save();

    return res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }

}
}
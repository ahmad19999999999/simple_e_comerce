
module.exports = {
  logout: async (req, res) => {
    try {
      // Remove the token from the request headers
     delete req.headers['Authorization'];
   
      // Send a response indicating successful logout
      res.status(204).send('deleted');
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Failed to logout',
      });
    }
  },
};
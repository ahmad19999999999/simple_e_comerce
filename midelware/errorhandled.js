


function errorHandler(err, req, res, next) {
  // Default error status and message
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  // Log the error (you can customize this part based on your needs)
  console.error(err);

  // Send the error response to the client
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
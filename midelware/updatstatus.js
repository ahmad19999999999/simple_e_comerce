
function getNextStatus(req, res, next) {
  const   {status}  = req.body; // Assuming the current status is provided in the request body

  // Implement your logic here
  // Example: If the statuses are stored in an array, find the index of the current status and return the next index
  const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered'];
  const currentIndex = statuses.indexOf(status);
  if (currentIndex !== -1 && currentIndex < statuses.length - 1) {
     req.nextStatus = statuses[currentIndex + 1];
     
    next();
  } else {
    res.status(400).json({ message: 'Cannot proceed to the next status' });
  }
}
module.exports=getNextStatus;

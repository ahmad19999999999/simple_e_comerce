let lastOrderNumber = 0;

function generateOrderNumber() {
  lastOrderNumber++;
  return `ORD${lastOrderNumber.toString().padStart(6, '0')}`;
}



module.exports=generateOrderNumber;
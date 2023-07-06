
const Joi=require('joi');
module.exports = {
    
Schema :Joi.object().keys({ 
 
    price: Joi.number().required().min(5).precision(2),
    quantity:Joi.number().integer().required(),
   })
   
}

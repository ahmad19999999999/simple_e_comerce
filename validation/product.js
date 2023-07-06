
const Joi=require('joi');
module.exports = {
Schema :Joi.object().keys({ 
 
    name: Joi.string().min(5).max(50).required(),
    slug: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(1024).required(),
    quantity:  Joi.number().integer().required(),     
    price: Joi.number().required().min(5).precision(2),
    image: Joi.string().min(5).max(1024).required(),
    status: Joi.boolean().required(),
   })
}

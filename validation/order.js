const Joi = require('joi');

const  validationSchema= Joi.object({
  order_number: Joi.number().integer(),
  order_total: Joi.number(),
  order_note: Joi.string().required(),
  type_delivery: Joi.string().required(),
  delivery_charge: Joi.number().required(),
  status: Joi.string().required(),
  products: Joi.array().required(),
   couponcode:Joi.required(),
  client: Joi.object({
    firstname: Joi.string().min(5).max(20).required(),
    lastname: Joi.string().min(5).max(20).required(),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone: Joi.string().trim().pattern(/^\d{10}$/).required(),
    adress_one: Joi.string().min(5).max(20).required(),
    adress_two: Joi.string().min(5).max(20).required(),
    status: Joi.boolean(),
  })
  
});
const validate = (data) => {
    return validationSchema.validate(data);
  };
  
  module.exports = {
    validationSchema,
    validate
  };


const Joi=require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);

const validationSchema = Joi.object({
 
    username: Joi.string().min(5).max(20).required(),
    password: joiPassword.string().minOfSpecialCharacters(2).minOfLowercase(2).minOfUppercase(2).minOfNumeric(2).required(),
    phone: Joi.string().trim().pattern(/^\d{10}$/).required(),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),     
    type_user:  Joi.number().integer().required(),
    status: Joi.boolean().required(),
   });
   const validate = (data) => {
    return validationSchema.validate(data);
  };
  
  module.exports = {
    validationSchema,
    validate
  };

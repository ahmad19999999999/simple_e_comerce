
const Joi = require('joi');

const validationSchema = Joi.object({
  firstname: Joi.string().min(5).max(20).required(),
  lastname: Joi.string().min(5).max(20).required(),
  email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  phone: Joi.string().trim().pattern(/^\d{10}$/).required(),
  adress_one: Joi.string().min(5).max(20).required(),
  adress_two: Joi.string().min(5).max(20).required(),
  status: Joi.boolean().required(),
});

const validate = (data) => {
  return validationSchema.validate(data);
};

module.exports = {
  validationSchema,
  validate
};
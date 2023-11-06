const Joi = require('joi');

const validationSchema = Joi.object({
  name: Joi.string().min(5).max(15).required(),
  slug: Joi.string().required(),
  description: Joi.string().required(),
  quantity: Joi.number().integer().min(0).required(),
  price: Joi.number().min(0).required(),
  status: Joi.boolean().required(),
  categoryIds:Joi.number().integer().required(),
});

const validate=(data) => {
  return validationSchema.validate(data);
};

module.exports = {
  validationSchema,
  validate
};
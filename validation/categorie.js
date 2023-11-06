
const Joi=require('joi');


  const validationSchema = Joi.object({

            name: Joi.string().min(5).max(50),
          slug: Joi.string().min(5).max(50),
           image: Joi.object({
             size: Joi.number().max(5 * 1024 * 1024) // Max size of 5MB
             }),
           status: Joi.boolean(),
          });
          
const validate = (data) => {
  return validationSchema.validate(data);
};

module.exports = {
  validationSchema,
  validate
};




        
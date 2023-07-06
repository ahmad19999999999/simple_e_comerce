
const Joi=require('joi');
module.exports={

Schema :Joi.object().keys({

            name: Joi.string().min(5).max(50),
          slug: Joi.string().min(5).max(50),
           image: Joi.object({
             size: Joi.number().max(5 * 1024 * 1024) // Max size of 5MB
             }),
           status: Joi.boolean(),
          }),




        }
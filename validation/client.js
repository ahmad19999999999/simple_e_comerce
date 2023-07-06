

const Joi=require('joi');
module.exports = {

    
        
          Schema : Joi.object().keys({ 
 
            firstname: Joi.string().min(5).max(20).required(),
            lastname: Joi.string().min(5).max(20).required(),
            email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),     
            phone: Joi.string().trim().pattern(/^\d{10}$/).required(),
            address_one: Joi.string().min(5).max(20).required(),
            address_two: Joi.string().min(5).max(20).required(),
            status: Joi.boolean().required(),
           }),

        }
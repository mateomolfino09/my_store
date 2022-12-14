const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(30);
const phone = Joi.string();
const userId = Joi.number().integer();
const userPsw = Joi.string();
const userMail = Joi.string().email();

const createCustomerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: Joi.object({
        email: userMail.required(),
        password: userPsw.required()
    })

});

const updateCustomerSchema = Joi.object({
    name: name,
    lastName: lastName,
    phone: phone,
    userId: userId
});

const getCustomerSchema = Joi.object({
    id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }

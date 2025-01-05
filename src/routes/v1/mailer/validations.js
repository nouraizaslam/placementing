const Joi = require("joi");

module.exports = {
  authV: Joi.object({
    server: Joi.string().required(),
    port: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),
  sendV: Joi.object({
    server: Joi.string().required(),
    port: Joi.number().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    from: Joi.string().email().required(),
    to: Joi.string().email().required(),
    subject: Joi.string().required(),
    body: Joi.string().required(),
    cc: Joi.array().items(Joi.string().required()).unique(),
    bcc: Joi.array().items(Joi.string().required()).unique()
  })
};

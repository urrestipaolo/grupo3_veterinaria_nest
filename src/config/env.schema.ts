import Joi from 'joi';

export const envSchema = Joi.object({
  DATABASE_URL: Joi.string()
    .uri({ scheme: ['postgres', 'postgresql'] })
    .required(),
  JWT_SECRET: Joi.string().min(10).required(),
  PORT: Joi.number().integer().min(1).max(65535).default(3000),
}).prefs({ abortEarly: false, allowUnknown: true });

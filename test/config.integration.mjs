import assert from 'node:assert/strict';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envSchema } from '../dist/src/config/env.schema.js';
import { AuthService } from '../dist/src/auth/auth.service.js';
import { JwtAuthGuard } from '../dist/src/auth/guards/jwt-auth.guard.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const valid = {
  DATABASE_URL: 'postgresql://test:test@localhost:5432/veterinaria',
  JWT_SECRET: 'test-only-secret-for-validation',
};
const options = { abortEarly: false, allowUnknown: true };
assert.equal(envSchema.validate(valid, options).value.PORT, 3000);
assert.equal(
  envSchema.validate({ ...valid, PORT: '4123', PATH: 'system' }, options).value
    .PORT,
  4123,
);
for (const [values, field] of [
  [{ ...valid, DATABASE_URL: undefined }, 'DATABASE_URL'],
  [{ ...valid, DATABASE_URL: 'not-a-url' }, 'DATABASE_URL'],
  [{ ...valid, JWT_SECRET: undefined }, 'JWT_SECRET'],
  [{ ...valid, JWT_SECRET: 'short' }, 'JWT_SECRET'],
  ...['abc', '0', '65536', '3.5'].map((PORT) => [{ ...valid, PORT }, 'PORT']),
]) {
  const result = envSchema.validate(values, options);
  assert.ok(
    result.error?.details.some((detail) => detail.path[0] === field),
    field,
  );
}
await assert.rejects(
  ConfigModule.forRoot({
    ignoreEnvFile: true,
    ignoreEnvVars: true,
    validationSchema: envSchema,
    validationOptions: options,
  }),
  /DATABASE_URL.*required/,
);
const config = new ConfigService({ ...valid, PORT: 4123 });
const user = {
  id: 1,
  email: 'test@example.com',
  nombre: 'Prueba',
  rol: 'RECEPCIONISTA',
  password: await bcrypt.hash('Prueba123456', 4),
};
const auth = new AuthService({ findByEmail: async () => user }, config);
const { token } = await auth.login({
  email: user.email,
  password: 'Prueba123456',
});
assert.equal(jwt.verify(token, valid.JWT_SECRET).id, 1);
const guard = new JwtAuthGuard(config);
const request = { headers: { authorization: `Bearer ${token}` } };
const context = { switchToHttp: () => ({ getRequest: () => request }) };
assert.equal(guard.canActivate(context), true);
assert.equal(request.user.id, 1);
request.headers.authorization = 'Bearer invalid';
assert.throws(() => guard.canActivate(context), /Token/);
console.log(
  'OK: esquema, valores requeridos, URL, puerto, rechazo al configurar Nest, login y Guard con ConfigService. Persistencia simulada.',
);

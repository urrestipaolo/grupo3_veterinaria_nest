# Validación de variables de entorno — Dario

El esquema compartido está en `src/config/env.schema.ts` y ConfigModule lo aplica globalmente al arrancar. Valida todas las variables que usa el código del equipo:

| Variable | Regla | Consumidores |
| --- | --- | --- |
| DATABASE_URL | URL PostgreSQL obligatoria | PrismaService (todos los módulos de datos) |
| JWT_SECRET | Obligatoria, mínimo 10 caracteres | AuthService y JwtAuthGuard (todos los controllers protegidos) |
| PORT | Entero entre 1 y 65535; valor predeterminado 3000 | main.ts |

Copia `env.example` a `.env` y reemplaza los valores de ejemplo. ConfigService funciona también con variables inyectadas por el entorno; no exige un archivo físico. Las variables del proceso tienen prioridad. No subir `.env` ni secretos reales.

Al faltar una variable requerida, la aplicación rechaza el arranque con `Config validation error`. Se reportan todos los errores y se permiten otras variables del sistema operativo. Los Guards se conservan como providers y se aplican por clase para recibir ConfigService mediante inyección.

La CLI de Prisma mantiene su carga independiente de dotenv en `prisma7.config.ts`, porque se ejecuta fuera de Nest. Los archivos de Prisma generados no se editan. Los valores de ejemplo de Observe no son variables de entorno del equipo y no se añaden requisitos nuevos para ese servicio.

Verificación: `npm run test:config`. Incluye validación del esquema y pruebas de login/Guard con ConfigService y persistencia simulada.

Para comprobarlo manualmente: quitar JWT_SECRET y arrancar debe fallar; restaurarlo permite autenticarse; cambiar PORT y reiniciar cambia el puerto HTTP.

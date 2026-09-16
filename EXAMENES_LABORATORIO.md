# Exámenes de laboratorio — Dario

Rama: `feature/dario-examenes-laboratorio`.
Base: `451d435` de `urrestipaolo/grupo3_veterinaria_nest`.

## Alcance

Implementa el módulo de exámenes con controlador, servicio, DTOs, validación y persistencia PostgreSQL mediante Prisma. Agrega el proveedor compartido de Prisma y registra el módulo en AppModule. No implementa CRUD de usuarios, mascotas, dueños o atenciones; necesita registros existentes de esos módulos.

Se conserva el esquema y los nombres acordados por el grupo, incluido `LaboratoristaId`. La única modificación de base de datos es hacer opcional `fechaResultado` y quitar su valor predeterminado. La nueva migración también limpia esa fecha en exámenes pendientes o cancelados existentes; conserva las fechas de los completados. No modifica la migración inicial ni elimina exámenes.

El cliente Prisma sigue generándose en `generated/prisma`. La compilación incluye esa carpeta, por lo que el inicio de producción apunta a `dist/src/main.js`.

## Preparación y ejecución (PowerShell)

Requiere Node.js compatible con el proyecto (verificado con Node 24), npm y PostgreSQL.

```powershell
npm ci
Copy-Item env.example .env
# Editar DATABASE_URL en .env con una base local/de desarrollo.
npm run prisma:generate
npm run prisma:validate
npm run prisma:migrate
npm run start:dev
```

`prisma:migrate` aplica las migraciones pendientes; no crea la base PostgreSQL. El archivo `.env` está ignorado por Git. No sobrescribir un `.env` ya configurado.

Para producción local:

```powershell
npm run build
npm run start:prod
```

La configuración de Prisma se llama `prisma7.config.ts`; los scripts incluyen explícitamente ese nombre.

## Rutas

Base: `http://localhost:3000/examenes-laboratorio`.

| Método | Ruta                                   | Operación                        |
| ------ | -------------------------------------- | -------------------------------- |
| POST   | `/examenes-laboratorio`                | Solicitar un examen              |
| GET    | `/examenes-laboratorio`                | Listar con filtros y paginación  |
| GET    | `/examenes-laboratorio/:id`            | Consultar un examen              |
| PATCH  | `/examenes-laboratorio/:id`            | Editar un examen pendiente       |
| PATCH  | `/examenes-laboratorio/:id/resultados` | Registrar resultados y completar |
| PATCH  | `/examenes-laboratorio/:id/cancelar`   | Cancelar un pendiente            |

Crear, usando IDs que existan en la base:

```json
{
  "atencionId": 1,
  "tipoExamen": "HEMOGRAMA",
  "solicitadoPorId": 2,
  "LaboratoristaId": 3,
  "observaciones": "Examen solicitado durante la consulta"
}
```

Tipos admitidos: `HEMOGRAMA`, `RAYOS_X`, `ECOGRAFICA`.

Edición: admite `tipoExamen`, `LaboratoristaId` y `observaciones`; debe incluir al menos uno. No permite cambiar la atención, el solicitante, el estado ni la fecha por esta ruta.

Registrar resultados:

```json
{ "resultados": "Descripción del resultado del examen" }
```

Cancelar no necesita cuerpo. Se conserva el registro para mantener el historial.

Filtros de ejemplo:

```text
/examenes-laboratorio?estado=PENDIENTE&atencionId=1&LaboratoristaId=3&page=1&limit=20
```

La respuesta del listado es un arreglo, ordenado por ID descendente. `page` comienza en 1; `limit` predeterminado es 20 y máximo 100.

## Reglas implementadas y coordinación con el grupo

- El examen se crea pendiente y sin fecha de resultado.
- La atención debe existir y no estar dada de alta.
- El solicitante debe existir y tener rol VETERINARIO; el asignado debe ser LABORATORISTA.
- El laboratorista se asigna desde la creación, tal como exige el esquema original.
- Solo los pendientes se pueden editar, completar o cancelar.
- Completar exige resultados con contenido y establece la fecha automáticamente.
- Los cambios se ejecutan en transacciones serializables; un conflicto concurrente devuelve 409 para que el cliente reintente.
- 400 indica datos inválidos, 404 una referencia inexistente y 409 un conflicto de estado.
- No se incluyen contraseñas de los usuarios relacionados en las respuestas.

Estas reglas se deducen del esquema existente; contrastarlas con el enunciado del curso. El módulo no cambia automáticamente el estado de la atención, porque esa lógica pertenece al módulo compartido de atenciones.

El proyecto base todavía no tiene autenticación. Verificar los roles de los IDs relacionados no autentica a quien envía la petición. Cuando el grupo integre login y guards, el solicitante deberá obtenerse de la sesión y deberá restringirse quién puede registrar resultados o cancelar.

## Pruebas del módulo

Usar una base dedicada cuyo nombre termine en `_test`, con las migraciones aplicadas. Las pruebas crean y eliminan únicamente sus propios registros.

```powershell
$env:DATABASE_URL = 'postgresql://postgres:TU_CLAVE@localhost:5432/veterinaria_examenes_test'
npm run prisma:migrate
$env:TEST_DATABASE_URL = $env:DATABASE_URL
npm run test:examenes
Remove-Item Env:DATABASE_URL
Remove-Item Env:TEST_DATABASE_URL
```

La suite usa Node Test Runner, Supertest y la aplicación compilada con sus metadatos reales de Nest. Comprueba creación, consultas, filtros, paginación, DTOs, referencias, roles, estados, fecha de resultado, cancelación, errores y concurrencia contra PostgreSQL real.

## Verificación realizada

- Compilación Nest y generación del cliente Prisma correctas.
- Esquema validado por Prisma.
- Lint de TypeScript aprobado sin advertencias.
- SQL de ambas migraciones ejecutado mediante psql en un servidor PostgreSQL 18 temporal, separado de la base del grupo.
- Nueve pruebas de integración del módulo aprobadas.
- La ejecución de Prisma migrate desde este entorno tuvo un bloqueo de creación de subprocesos (EPERM); el SQL se verificó directamente con psql.
- La suite original de Vitest también encontró restricciones de subprocesos en el entorno. No confundir las nueve pruebas específicas aprobadas con la suite general del proyecto.

No se aplicaron migraciones a la base del grupo ni se publicó la rama en GitHub.

## Usar la rama en tu carpeta original

Esta copia se creó porque Windows bloqueó la escritura en `.git` de la carpeta de OneDrive. El código fuente de esa carpeta original permanece sin cambios.

Puedes trabajar directamente en esta copia. Para llevar la rama a la carpeta original, abre allí tu propia terminal de PowerShell y ejecuta:

```powershell
git fetch "C:/Users/Dario/Documents/Codex/2026-09-16/https-github-com-kevindandrew-nest-first/outputs/dario-examenes.bundle" feature/dario-examenes-laboratorio:feature/dario-examenes-laboratorio
git switch feature/dario-examenes-laboratorio
```

El archivo bundle contiene la rama y su historial; no depende de mantener abierta esta tarea. Después sigue la preparación de dependencias y base de datos descrita arriba.

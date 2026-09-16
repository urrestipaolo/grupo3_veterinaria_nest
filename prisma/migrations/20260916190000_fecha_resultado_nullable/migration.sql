-- Un examen pendiente o cancelado todavía no tiene fecha de resultado.
ALTER TABLE "examenes_laboratorio"
  ALTER COLUMN "fecha_Resultado" DROP NOT NULL,
  ALTER COLUMN "fecha_Resultado" DROP DEFAULT;

UPDATE "examenes_laboratorio"
SET "fecha_Resultado" = NULL
WHERE "estado" IN ('PENDIENTE', 'CANCELADO');

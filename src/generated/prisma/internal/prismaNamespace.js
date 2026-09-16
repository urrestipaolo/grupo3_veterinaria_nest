import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Usuario: 'Usuario',
    Dueño: 'Dueño',
    Mascota: 'Mascota',
    AtencionMedica: 'AtencionMedica',
    ExamenLaboratorio: 'ExamenLaboratorio'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UsuarioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rol: 'rol',
    createdAt: 'createdAt'
};
export const DueñoScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion'
};
export const MascotaScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    especie: 'especie',
    raza: 'raza',
    peso: 'peso',
    edadAproximada: 'edadAproximada',
    dueñoId: 'dueñoId'
};
export const AtencionMedicaScalarFieldEnum = {
    id: 'id',
    mascotaId: 'mascotaId',
    veterinarioId: 'veterinarioId',
    abiertaPorId: 'abiertaPorId',
    motivoConsulta: 'motivoConsulta',
    diagnosticoPreliminar: 'diagnosticoPreliminar',
    tratamiento: 'tratamiento',
    estado: 'estado',
    fechaIngreso: 'fechaIngreso',
    fechaAlta: 'fechaAlta'
};
export const ExamenLaboratorioScalarFieldEnum = {
    id: 'id',
    atencionId: 'atencionId',
    tipoExamen: 'tipoExamen',
    solicitadoPorId: 'solicitadoPorId',
    LaboratoristaId: 'LaboratoristaId',
    resultados: 'resultados',
    observaciones: 'observaciones',
    estado: 'estado',
    fechaResultado: 'fechaResultado'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
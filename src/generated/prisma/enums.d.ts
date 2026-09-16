export declare const Role: {
    readonly RECEPCIONISTA: "RECEPCIONISTA";
    readonly VETERINARIO: "VETERINARIO";
    readonly LABORATORISTA: "LABORATORISTA";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const Especie: {
    readonly PERRO: "PERRO";
    readonly GATO: "GATO";
};
export type Especie = (typeof Especie)[keyof typeof Especie];
export declare const EstadoAtencion: {
    readonly EN_CONSULTA: "EN_CONSULTA";
    readonly EN_ESPERA_EXAMENES: "EN_ESPERA_EXAMENES";
    readonly DADA_DE_ALTA: "DADA_DE_ALTA";
};
export type EstadoAtencion = (typeof EstadoAtencion)[keyof typeof EstadoAtencion];
export declare const TipoExamen: {
    readonly HEMOGRAMA: "HEMOGRAMA";
    readonly RAYOS_X: "RAYOS_X";
    readonly ECOGRAFICA: "ECOGRAFICA";
};
export type TipoExamen = (typeof TipoExamen)[keyof typeof TipoExamen];
export declare const EstadoExamen: {
    readonly PENDIENTE: "PENDIENTE";
    readonly CANCELADO: "CANCELADO";
    readonly COMPLETADO: "COMPLETADO";
};
export type EstadoExamen = (typeof EstadoExamen)[keyof typeof EstadoExamen];

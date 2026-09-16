import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AtencionMedicaModel = runtime.Types.Result.DefaultSelection<Prisma.$AtencionMedicaPayload>;
export type AggregateAtencionMedica = {
    _count: AtencionMedicaCountAggregateOutputType | null;
    _avg: AtencionMedicaAvgAggregateOutputType | null;
    _sum: AtencionMedicaSumAggregateOutputType | null;
    _min: AtencionMedicaMinAggregateOutputType | null;
    _max: AtencionMedicaMaxAggregateOutputType | null;
};
export type AtencionMedicaAvgAggregateOutputType = {
    id: number | null;
    mascotaId: number | null;
    veterinarioId: number | null;
    abiertaPorId: number | null;
};
export type AtencionMedicaSumAggregateOutputType = {
    id: number | null;
    mascotaId: number | null;
    veterinarioId: number | null;
    abiertaPorId: number | null;
};
export type AtencionMedicaMinAggregateOutputType = {
    id: number | null;
    mascotaId: number | null;
    veterinarioId: number | null;
    abiertaPorId: number | null;
    motivoConsulta: string | null;
    diagnosticoPreliminar: string | null;
    tratamiento: string | null;
    estado: $Enums.EstadoAtencion | null;
    fechaIngreso: Date | null;
    fechaAlta: Date | null;
};
export type AtencionMedicaMaxAggregateOutputType = {
    id: number | null;
    mascotaId: number | null;
    veterinarioId: number | null;
    abiertaPorId: number | null;
    motivoConsulta: string | null;
    diagnosticoPreliminar: string | null;
    tratamiento: string | null;
    estado: $Enums.EstadoAtencion | null;
    fechaIngreso: Date | null;
    fechaAlta: Date | null;
};
export type AtencionMedicaCountAggregateOutputType = {
    id: number;
    mascotaId: number;
    veterinarioId: number;
    abiertaPorId: number;
    motivoConsulta: number;
    diagnosticoPreliminar: number;
    tratamiento: number;
    estado: number;
    fechaIngreso: number;
    fechaAlta: number;
    _all: number;
};
export type AtencionMedicaAvgAggregateInputType = {
    id?: true;
    mascotaId?: true;
    veterinarioId?: true;
    abiertaPorId?: true;
};
export type AtencionMedicaSumAggregateInputType = {
    id?: true;
    mascotaId?: true;
    veterinarioId?: true;
    abiertaPorId?: true;
};
export type AtencionMedicaMinAggregateInputType = {
    id?: true;
    mascotaId?: true;
    veterinarioId?: true;
    abiertaPorId?: true;
    motivoConsulta?: true;
    diagnosticoPreliminar?: true;
    tratamiento?: true;
    estado?: true;
    fechaIngreso?: true;
    fechaAlta?: true;
};
export type AtencionMedicaMaxAggregateInputType = {
    id?: true;
    mascotaId?: true;
    veterinarioId?: true;
    abiertaPorId?: true;
    motivoConsulta?: true;
    diagnosticoPreliminar?: true;
    tratamiento?: true;
    estado?: true;
    fechaIngreso?: true;
    fechaAlta?: true;
};
export type AtencionMedicaCountAggregateInputType = {
    id?: true;
    mascotaId?: true;
    veterinarioId?: true;
    abiertaPorId?: true;
    motivoConsulta?: true;
    diagnosticoPreliminar?: true;
    tratamiento?: true;
    estado?: true;
    fechaIngreso?: true;
    fechaAlta?: true;
    _all?: true;
};
export type AtencionMedicaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtencionMedicaWhereInput;
    orderBy?: Prisma.AtencionMedicaOrderByWithRelationInput | Prisma.AtencionMedicaOrderByWithRelationInput[];
    cursor?: Prisma.AtencionMedicaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AtencionMedicaCountAggregateInputType;
    _avg?: AtencionMedicaAvgAggregateInputType;
    _sum?: AtencionMedicaSumAggregateInputType;
    _min?: AtencionMedicaMinAggregateInputType;
    _max?: AtencionMedicaMaxAggregateInputType;
};
export type GetAtencionMedicaAggregateType<T extends AtencionMedicaAggregateArgs> = {
    [P in keyof T & keyof AggregateAtencionMedica]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAtencionMedica[P]> : Prisma.GetScalarType<T[P], AggregateAtencionMedica[P]>;
};
export type AtencionMedicaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtencionMedicaWhereInput;
    orderBy?: Prisma.AtencionMedicaOrderByWithAggregationInput | Prisma.AtencionMedicaOrderByWithAggregationInput[];
    by: Prisma.AtencionMedicaScalarFieldEnum[] | Prisma.AtencionMedicaScalarFieldEnum;
    having?: Prisma.AtencionMedicaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AtencionMedicaCountAggregateInputType | true;
    _avg?: AtencionMedicaAvgAggregateInputType;
    _sum?: AtencionMedicaSumAggregateInputType;
    _min?: AtencionMedicaMinAggregateInputType;
    _max?: AtencionMedicaMaxAggregateInputType;
};
export type AtencionMedicaGroupByOutputType = {
    id: number;
    mascotaId: number;
    veterinarioId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar: string | null;
    tratamiento: string | null;
    estado: $Enums.EstadoAtencion;
    fechaIngreso: Date;
    fechaAlta: Date | null;
    _count: AtencionMedicaCountAggregateOutputType | null;
    _avg: AtencionMedicaAvgAggregateOutputType | null;
    _sum: AtencionMedicaSumAggregateOutputType | null;
    _min: AtencionMedicaMinAggregateOutputType | null;
    _max: AtencionMedicaMaxAggregateOutputType | null;
};
export type GetAtencionMedicaGroupByPayload<T extends AtencionMedicaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AtencionMedicaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AtencionMedicaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AtencionMedicaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AtencionMedicaGroupByOutputType[P]>;
}>>;
export type AtencionMedicaWhereInput = {
    AND?: Prisma.AtencionMedicaWhereInput | Prisma.AtencionMedicaWhereInput[];
    OR?: Prisma.AtencionMedicaWhereInput[];
    NOT?: Prisma.AtencionMedicaWhereInput | Prisma.AtencionMedicaWhereInput[];
    id?: Prisma.IntFilter<"AtencionMedica"> | number;
    mascotaId?: Prisma.IntFilter<"AtencionMedica"> | number;
    veterinarioId?: Prisma.IntFilter<"AtencionMedica"> | number;
    abiertaPorId?: Prisma.IntFilter<"AtencionMedica"> | number;
    motivoConsulta?: Prisma.StringFilter<"AtencionMedica"> | string;
    diagnosticoPreliminar?: Prisma.StringNullableFilter<"AtencionMedica"> | string | null;
    tratamiento?: Prisma.StringNullableFilter<"AtencionMedica"> | string | null;
    estado?: Prisma.EnumEstadoAtencionFilter<"AtencionMedica"> | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFilter<"AtencionMedica"> | Date | string;
    fechaAlta?: Prisma.DateTimeNullableFilter<"AtencionMedica"> | Date | string | null;
    mascota?: Prisma.XOR<Prisma.MascotaScalarRelationFilter, Prisma.MascotaWhereInput>;
    veterinario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    abiertaPor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    examen?: Prisma.ExamenLaboratorioListRelationFilter;
};
export type AtencionMedicaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mascotaId?: Prisma.SortOrder;
    veterinarioId?: Prisma.SortOrder;
    abiertaPorId?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    diagnosticoPreliminar?: Prisma.SortOrderInput | Prisma.SortOrder;
    tratamiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaIngreso?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrderInput | Prisma.SortOrder;
    mascota?: Prisma.MascotaOrderByWithRelationInput;
    veterinario?: Prisma.UsuarioOrderByWithRelationInput;
    abiertaPor?: Prisma.UsuarioOrderByWithRelationInput;
    examen?: Prisma.ExamenLaboratorioOrderByRelationAggregateInput;
};
export type AtencionMedicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AtencionMedicaWhereInput | Prisma.AtencionMedicaWhereInput[];
    OR?: Prisma.AtencionMedicaWhereInput[];
    NOT?: Prisma.AtencionMedicaWhereInput | Prisma.AtencionMedicaWhereInput[];
    mascotaId?: Prisma.IntFilter<"AtencionMedica"> | number;
    veterinarioId?: Prisma.IntFilter<"AtencionMedica"> | number;
    abiertaPorId?: Prisma.IntFilter<"AtencionMedica"> | number;
    motivoConsulta?: Prisma.StringFilter<"AtencionMedica"> | string;
    diagnosticoPreliminar?: Prisma.StringNullableFilter<"AtencionMedica"> | string | null;
    tratamiento?: Prisma.StringNullableFilter<"AtencionMedica"> | string | null;
    estado?: Prisma.EnumEstadoAtencionFilter<"AtencionMedica"> | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFilter<"AtencionMedica"> | Date | string;
    fechaAlta?: Prisma.DateTimeNullableFilter<"AtencionMedica"> | Date | string | null;
    mascota?: Prisma.XOR<Prisma.MascotaScalarRelationFilter, Prisma.MascotaWhereInput>;
    veterinario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    abiertaPor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    examen?: Prisma.ExamenLaboratorioListRelationFilter;
}, "id">;
export type AtencionMedicaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mascotaId?: Prisma.SortOrder;
    veterinarioId?: Prisma.SortOrder;
    abiertaPorId?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    diagnosticoPreliminar?: Prisma.SortOrderInput | Prisma.SortOrder;
    tratamiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaIngreso?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AtencionMedicaCountOrderByAggregateInput;
    _avg?: Prisma.AtencionMedicaAvgOrderByAggregateInput;
    _max?: Prisma.AtencionMedicaMaxOrderByAggregateInput;
    _min?: Prisma.AtencionMedicaMinOrderByAggregateInput;
    _sum?: Prisma.AtencionMedicaSumOrderByAggregateInput;
};
export type AtencionMedicaScalarWhereWithAggregatesInput = {
    AND?: Prisma.AtencionMedicaScalarWhereWithAggregatesInput | Prisma.AtencionMedicaScalarWhereWithAggregatesInput[];
    OR?: Prisma.AtencionMedicaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AtencionMedicaScalarWhereWithAggregatesInput | Prisma.AtencionMedicaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AtencionMedica"> | number;
    mascotaId?: Prisma.IntWithAggregatesFilter<"AtencionMedica"> | number;
    veterinarioId?: Prisma.IntWithAggregatesFilter<"AtencionMedica"> | number;
    abiertaPorId?: Prisma.IntWithAggregatesFilter<"AtencionMedica"> | number;
    motivoConsulta?: Prisma.StringWithAggregatesFilter<"AtencionMedica"> | string;
    diagnosticoPreliminar?: Prisma.StringNullableWithAggregatesFilter<"AtencionMedica"> | string | null;
    tratamiento?: Prisma.StringNullableWithAggregatesFilter<"AtencionMedica"> | string | null;
    estado?: Prisma.EnumEstadoAtencionWithAggregatesFilter<"AtencionMedica"> | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeWithAggregatesFilter<"AtencionMedica"> | Date | string;
    fechaAlta?: Prisma.DateTimeNullableWithAggregatesFilter<"AtencionMedica"> | Date | string | null;
};
export type AtencionMedicaCreateInput = {
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    mascota: Prisma.MascotaCreateNestedOneWithoutAtencionesInput;
    veterinario: Prisma.UsuarioCreateNestedOneWithoutAtencioneComoVeterinarioInput;
    abiertaPor: Prisma.UsuarioCreateNestedOneWithoutAtencionesAbiertaInput;
    examen?: Prisma.ExamenLaboratorioCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaUncheckedCreateInput = {
    id?: number;
    mascotaId: number;
    veterinarioId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaUpdateInput = {
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    mascota?: Prisma.MascotaUpdateOneRequiredWithoutAtencionesNestedInput;
    veterinario?: Prisma.UsuarioUpdateOneRequiredWithoutAtencioneComoVeterinarioNestedInput;
    abiertaPor?: Prisma.UsuarioUpdateOneRequiredWithoutAtencionesAbiertaNestedInput;
    examen?: Prisma.ExamenLaboratorioUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mascotaId?: Prisma.IntFieldUpdateOperationsInput | number;
    veterinarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    abiertaPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaCreateManyInput = {
    id?: number;
    mascotaId: number;
    veterinarioId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
};
export type AtencionMedicaUpdateManyMutationInput = {
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AtencionMedicaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mascotaId?: Prisma.IntFieldUpdateOperationsInput | number;
    veterinarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    abiertaPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AtencionMedicaListRelationFilter = {
    every?: Prisma.AtencionMedicaWhereInput;
    some?: Prisma.AtencionMedicaWhereInput;
    none?: Prisma.AtencionMedicaWhereInput;
};
export type AtencionMedicaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AtencionMedicaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mascotaId?: Prisma.SortOrder;
    veterinarioId?: Prisma.SortOrder;
    abiertaPorId?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    diagnosticoPreliminar?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaIngreso?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
};
export type AtencionMedicaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mascotaId?: Prisma.SortOrder;
    veterinarioId?: Prisma.SortOrder;
    abiertaPorId?: Prisma.SortOrder;
};
export type AtencionMedicaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mascotaId?: Prisma.SortOrder;
    veterinarioId?: Prisma.SortOrder;
    abiertaPorId?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    diagnosticoPreliminar?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaIngreso?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
};
export type AtencionMedicaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mascotaId?: Prisma.SortOrder;
    veterinarioId?: Prisma.SortOrder;
    abiertaPorId?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    diagnosticoPreliminar?: Prisma.SortOrder;
    tratamiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaIngreso?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
};
export type AtencionMedicaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mascotaId?: Prisma.SortOrder;
    veterinarioId?: Prisma.SortOrder;
    abiertaPorId?: Prisma.SortOrder;
};
export type AtencionMedicaScalarRelationFilter = {
    is?: Prisma.AtencionMedicaWhereInput;
    isNot?: Prisma.AtencionMedicaWhereInput;
};
export type AtencionMedicaCreateNestedManyWithoutVeterinarioInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput> | Prisma.AtencionMedicaCreateWithoutVeterinarioInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput | Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput[];
    createMany?: Prisma.AtencionMedicaCreateManyVeterinarioInputEnvelope;
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
};
export type AtencionMedicaCreateNestedManyWithoutAbiertaPorInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput> | Prisma.AtencionMedicaCreateWithoutAbiertaPorInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput | Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput[];
    createMany?: Prisma.AtencionMedicaCreateManyAbiertaPorInputEnvelope;
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
};
export type AtencionMedicaUncheckedCreateNestedManyWithoutVeterinarioInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput> | Prisma.AtencionMedicaCreateWithoutVeterinarioInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput | Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput[];
    createMany?: Prisma.AtencionMedicaCreateManyVeterinarioInputEnvelope;
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
};
export type AtencionMedicaUncheckedCreateNestedManyWithoutAbiertaPorInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput> | Prisma.AtencionMedicaCreateWithoutAbiertaPorInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput | Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput[];
    createMany?: Prisma.AtencionMedicaCreateManyAbiertaPorInputEnvelope;
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
};
export type AtencionMedicaUpdateManyWithoutVeterinarioNestedInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput> | Prisma.AtencionMedicaCreateWithoutVeterinarioInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput | Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput[];
    upsert?: Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutVeterinarioInput | Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutVeterinarioInput[];
    createMany?: Prisma.AtencionMedicaCreateManyVeterinarioInputEnvelope;
    set?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    disconnect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    delete?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    update?: Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutVeterinarioInput | Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutVeterinarioInput[];
    updateMany?: Prisma.AtencionMedicaUpdateManyWithWhereWithoutVeterinarioInput | Prisma.AtencionMedicaUpdateManyWithWhereWithoutVeterinarioInput[];
    deleteMany?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
};
export type AtencionMedicaUpdateManyWithoutAbiertaPorNestedInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput> | Prisma.AtencionMedicaCreateWithoutAbiertaPorInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput | Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput[];
    upsert?: Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutAbiertaPorInput | Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutAbiertaPorInput[];
    createMany?: Prisma.AtencionMedicaCreateManyAbiertaPorInputEnvelope;
    set?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    disconnect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    delete?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    update?: Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutAbiertaPorInput | Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutAbiertaPorInput[];
    updateMany?: Prisma.AtencionMedicaUpdateManyWithWhereWithoutAbiertaPorInput | Prisma.AtencionMedicaUpdateManyWithWhereWithoutAbiertaPorInput[];
    deleteMany?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
};
export type AtencionMedicaUncheckedUpdateManyWithoutVeterinarioNestedInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput> | Prisma.AtencionMedicaCreateWithoutVeterinarioInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput | Prisma.AtencionMedicaCreateOrConnectWithoutVeterinarioInput[];
    upsert?: Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutVeterinarioInput | Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutVeterinarioInput[];
    createMany?: Prisma.AtencionMedicaCreateManyVeterinarioInputEnvelope;
    set?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    disconnect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    delete?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    update?: Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutVeterinarioInput | Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutVeterinarioInput[];
    updateMany?: Prisma.AtencionMedicaUpdateManyWithWhereWithoutVeterinarioInput | Prisma.AtencionMedicaUpdateManyWithWhereWithoutVeterinarioInput[];
    deleteMany?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
};
export type AtencionMedicaUncheckedUpdateManyWithoutAbiertaPorNestedInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput> | Prisma.AtencionMedicaCreateWithoutAbiertaPorInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput | Prisma.AtencionMedicaCreateOrConnectWithoutAbiertaPorInput[];
    upsert?: Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutAbiertaPorInput | Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutAbiertaPorInput[];
    createMany?: Prisma.AtencionMedicaCreateManyAbiertaPorInputEnvelope;
    set?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    disconnect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    delete?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    update?: Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutAbiertaPorInput | Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutAbiertaPorInput[];
    updateMany?: Prisma.AtencionMedicaUpdateManyWithWhereWithoutAbiertaPorInput | Prisma.AtencionMedicaUpdateManyWithWhereWithoutAbiertaPorInput[];
    deleteMany?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
};
export type AtencionMedicaCreateNestedManyWithoutMascotaInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput> | Prisma.AtencionMedicaCreateWithoutMascotaInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput | Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput[];
    createMany?: Prisma.AtencionMedicaCreateManyMascotaInputEnvelope;
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
};
export type AtencionMedicaUncheckedCreateNestedManyWithoutMascotaInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput> | Prisma.AtencionMedicaCreateWithoutMascotaInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput | Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput[];
    createMany?: Prisma.AtencionMedicaCreateManyMascotaInputEnvelope;
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
};
export type AtencionMedicaUpdateManyWithoutMascotaNestedInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput> | Prisma.AtencionMedicaCreateWithoutMascotaInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput | Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput[];
    upsert?: Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutMascotaInput | Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutMascotaInput[];
    createMany?: Prisma.AtencionMedicaCreateManyMascotaInputEnvelope;
    set?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    disconnect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    delete?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    update?: Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutMascotaInput | Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutMascotaInput[];
    updateMany?: Prisma.AtencionMedicaUpdateManyWithWhereWithoutMascotaInput | Prisma.AtencionMedicaUpdateManyWithWhereWithoutMascotaInput[];
    deleteMany?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
};
export type AtencionMedicaUncheckedUpdateManyWithoutMascotaNestedInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput> | Prisma.AtencionMedicaCreateWithoutMascotaInput[] | Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput[];
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput | Prisma.AtencionMedicaCreateOrConnectWithoutMascotaInput[];
    upsert?: Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutMascotaInput | Prisma.AtencionMedicaUpsertWithWhereUniqueWithoutMascotaInput[];
    createMany?: Prisma.AtencionMedicaCreateManyMascotaInputEnvelope;
    set?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    disconnect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    delete?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    connect?: Prisma.AtencionMedicaWhereUniqueInput | Prisma.AtencionMedicaWhereUniqueInput[];
    update?: Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutMascotaInput | Prisma.AtencionMedicaUpdateWithWhereUniqueWithoutMascotaInput[];
    updateMany?: Prisma.AtencionMedicaUpdateManyWithWhereWithoutMascotaInput | Prisma.AtencionMedicaUpdateManyWithWhereWithoutMascotaInput[];
    deleteMany?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
};
export type EnumEstadoAtencionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoAtencion;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type AtencionMedicaCreateNestedOneWithoutExamenInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutExamenInput, Prisma.AtencionMedicaUncheckedCreateWithoutExamenInput>;
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutExamenInput;
    connect?: Prisma.AtencionMedicaWhereUniqueInput;
};
export type AtencionMedicaUpdateOneRequiredWithoutExamenNestedInput = {
    create?: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutExamenInput, Prisma.AtencionMedicaUncheckedCreateWithoutExamenInput>;
    connectOrCreate?: Prisma.AtencionMedicaCreateOrConnectWithoutExamenInput;
    upsert?: Prisma.AtencionMedicaUpsertWithoutExamenInput;
    connect?: Prisma.AtencionMedicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AtencionMedicaUpdateToOneWithWhereWithoutExamenInput, Prisma.AtencionMedicaUpdateWithoutExamenInput>, Prisma.AtencionMedicaUncheckedUpdateWithoutExamenInput>;
};
export type AtencionMedicaCreateWithoutVeterinarioInput = {
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    mascota: Prisma.MascotaCreateNestedOneWithoutAtencionesInput;
    abiertaPor: Prisma.UsuarioCreateNestedOneWithoutAtencionesAbiertaInput;
    examen?: Prisma.ExamenLaboratorioCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaUncheckedCreateWithoutVeterinarioInput = {
    id?: number;
    mascotaId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaCreateOrConnectWithoutVeterinarioInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput>;
};
export type AtencionMedicaCreateManyVeterinarioInputEnvelope = {
    data: Prisma.AtencionMedicaCreateManyVeterinarioInput | Prisma.AtencionMedicaCreateManyVeterinarioInput[];
    skipDuplicates?: boolean;
};
export type AtencionMedicaCreateWithoutAbiertaPorInput = {
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    mascota: Prisma.MascotaCreateNestedOneWithoutAtencionesInput;
    veterinario: Prisma.UsuarioCreateNestedOneWithoutAtencioneComoVeterinarioInput;
    examen?: Prisma.ExamenLaboratorioCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaUncheckedCreateWithoutAbiertaPorInput = {
    id?: number;
    mascotaId: number;
    veterinarioId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaCreateOrConnectWithoutAbiertaPorInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput>;
};
export type AtencionMedicaCreateManyAbiertaPorInputEnvelope = {
    data: Prisma.AtencionMedicaCreateManyAbiertaPorInput | Prisma.AtencionMedicaCreateManyAbiertaPorInput[];
    skipDuplicates?: boolean;
};
export type AtencionMedicaUpsertWithWhereUniqueWithoutVeterinarioInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedUpdateWithoutVeterinarioInput>;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedCreateWithoutVeterinarioInput>;
};
export type AtencionMedicaUpdateWithWhereUniqueWithoutVeterinarioInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutVeterinarioInput, Prisma.AtencionMedicaUncheckedUpdateWithoutVeterinarioInput>;
};
export type AtencionMedicaUpdateManyWithWhereWithoutVeterinarioInput = {
    where: Prisma.AtencionMedicaScalarWhereInput;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateManyMutationInput, Prisma.AtencionMedicaUncheckedUpdateManyWithoutVeterinarioInput>;
};
export type AtencionMedicaScalarWhereInput = {
    AND?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
    OR?: Prisma.AtencionMedicaScalarWhereInput[];
    NOT?: Prisma.AtencionMedicaScalarWhereInput | Prisma.AtencionMedicaScalarWhereInput[];
    id?: Prisma.IntFilter<"AtencionMedica"> | number;
    mascotaId?: Prisma.IntFilter<"AtencionMedica"> | number;
    veterinarioId?: Prisma.IntFilter<"AtencionMedica"> | number;
    abiertaPorId?: Prisma.IntFilter<"AtencionMedica"> | number;
    motivoConsulta?: Prisma.StringFilter<"AtencionMedica"> | string;
    diagnosticoPreliminar?: Prisma.StringNullableFilter<"AtencionMedica"> | string | null;
    tratamiento?: Prisma.StringNullableFilter<"AtencionMedica"> | string | null;
    estado?: Prisma.EnumEstadoAtencionFilter<"AtencionMedica"> | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFilter<"AtencionMedica"> | Date | string;
    fechaAlta?: Prisma.DateTimeNullableFilter<"AtencionMedica"> | Date | string | null;
};
export type AtencionMedicaUpsertWithWhereUniqueWithoutAbiertaPorInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedUpdateWithoutAbiertaPorInput>;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedCreateWithoutAbiertaPorInput>;
};
export type AtencionMedicaUpdateWithWhereUniqueWithoutAbiertaPorInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutAbiertaPorInput, Prisma.AtencionMedicaUncheckedUpdateWithoutAbiertaPorInput>;
};
export type AtencionMedicaUpdateManyWithWhereWithoutAbiertaPorInput = {
    where: Prisma.AtencionMedicaScalarWhereInput;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateManyMutationInput, Prisma.AtencionMedicaUncheckedUpdateManyWithoutAbiertaPorInput>;
};
export type AtencionMedicaCreateWithoutMascotaInput = {
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    veterinario: Prisma.UsuarioCreateNestedOneWithoutAtencioneComoVeterinarioInput;
    abiertaPor: Prisma.UsuarioCreateNestedOneWithoutAtencionesAbiertaInput;
    examen?: Prisma.ExamenLaboratorioCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaUncheckedCreateWithoutMascotaInput = {
    id?: number;
    veterinarioId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutAtencionInput;
};
export type AtencionMedicaCreateOrConnectWithoutMascotaInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput>;
};
export type AtencionMedicaCreateManyMascotaInputEnvelope = {
    data: Prisma.AtencionMedicaCreateManyMascotaInput | Prisma.AtencionMedicaCreateManyMascotaInput[];
    skipDuplicates?: boolean;
};
export type AtencionMedicaUpsertWithWhereUniqueWithoutMascotaInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    update: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedUpdateWithoutMascotaInput>;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedCreateWithoutMascotaInput>;
};
export type AtencionMedicaUpdateWithWhereUniqueWithoutMascotaInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutMascotaInput, Prisma.AtencionMedicaUncheckedUpdateWithoutMascotaInput>;
};
export type AtencionMedicaUpdateManyWithWhereWithoutMascotaInput = {
    where: Prisma.AtencionMedicaScalarWhereInput;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateManyMutationInput, Prisma.AtencionMedicaUncheckedUpdateManyWithoutMascotaInput>;
};
export type AtencionMedicaCreateWithoutExamenInput = {
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
    mascota: Prisma.MascotaCreateNestedOneWithoutAtencionesInput;
    veterinario: Prisma.UsuarioCreateNestedOneWithoutAtencioneComoVeterinarioInput;
    abiertaPor: Prisma.UsuarioCreateNestedOneWithoutAtencionesAbiertaInput;
};
export type AtencionMedicaUncheckedCreateWithoutExamenInput = {
    id?: number;
    mascotaId: number;
    veterinarioId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
};
export type AtencionMedicaCreateOrConnectWithoutExamenInput = {
    where: Prisma.AtencionMedicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutExamenInput, Prisma.AtencionMedicaUncheckedCreateWithoutExamenInput>;
};
export type AtencionMedicaUpsertWithoutExamenInput = {
    update: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutExamenInput, Prisma.AtencionMedicaUncheckedUpdateWithoutExamenInput>;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateWithoutExamenInput, Prisma.AtencionMedicaUncheckedCreateWithoutExamenInput>;
    where?: Prisma.AtencionMedicaWhereInput;
};
export type AtencionMedicaUpdateToOneWithWhereWithoutExamenInput = {
    where?: Prisma.AtencionMedicaWhereInput;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateWithoutExamenInput, Prisma.AtencionMedicaUncheckedUpdateWithoutExamenInput>;
};
export type AtencionMedicaUpdateWithoutExamenInput = {
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    mascota?: Prisma.MascotaUpdateOneRequiredWithoutAtencionesNestedInput;
    veterinario?: Prisma.UsuarioUpdateOneRequiredWithoutAtencioneComoVeterinarioNestedInput;
    abiertaPor?: Prisma.UsuarioUpdateOneRequiredWithoutAtencionesAbiertaNestedInput;
};
export type AtencionMedicaUncheckedUpdateWithoutExamenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mascotaId?: Prisma.IntFieldUpdateOperationsInput | number;
    veterinarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    abiertaPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AtencionMedicaCreateManyVeterinarioInput = {
    id?: number;
    mascotaId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
};
export type AtencionMedicaCreateManyAbiertaPorInput = {
    id?: number;
    mascotaId: number;
    veterinarioId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
};
export type AtencionMedicaUpdateWithoutVeterinarioInput = {
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    mascota?: Prisma.MascotaUpdateOneRequiredWithoutAtencionesNestedInput;
    abiertaPor?: Prisma.UsuarioUpdateOneRequiredWithoutAtencionesAbiertaNestedInput;
    examen?: Prisma.ExamenLaboratorioUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaUncheckedUpdateWithoutVeterinarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mascotaId?: Prisma.IntFieldUpdateOperationsInput | number;
    abiertaPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaUncheckedUpdateManyWithoutVeterinarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mascotaId?: Prisma.IntFieldUpdateOperationsInput | number;
    abiertaPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AtencionMedicaUpdateWithoutAbiertaPorInput = {
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    mascota?: Prisma.MascotaUpdateOneRequiredWithoutAtencionesNestedInput;
    veterinario?: Prisma.UsuarioUpdateOneRequiredWithoutAtencioneComoVeterinarioNestedInput;
    examen?: Prisma.ExamenLaboratorioUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaUncheckedUpdateWithoutAbiertaPorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mascotaId?: Prisma.IntFieldUpdateOperationsInput | number;
    veterinarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaUncheckedUpdateManyWithoutAbiertaPorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mascotaId?: Prisma.IntFieldUpdateOperationsInput | number;
    veterinarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AtencionMedicaCreateManyMascotaInput = {
    id?: number;
    veterinarioId: number;
    abiertaPorId: number;
    motivoConsulta: string;
    diagnosticoPreliminar?: string | null;
    tratamiento?: string | null;
    estado?: $Enums.EstadoAtencion;
    fechaIngreso?: Date | string;
    fechaAlta?: Date | string | null;
};
export type AtencionMedicaUpdateWithoutMascotaInput = {
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    veterinario?: Prisma.UsuarioUpdateOneRequiredWithoutAtencioneComoVeterinarioNestedInput;
    abiertaPor?: Prisma.UsuarioUpdateOneRequiredWithoutAtencionesAbiertaNestedInput;
    examen?: Prisma.ExamenLaboratorioUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaUncheckedUpdateWithoutMascotaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    veterinarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    abiertaPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    examen?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutAtencionNestedInput;
};
export type AtencionMedicaUncheckedUpdateManyWithoutMascotaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    veterinarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    abiertaPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    diagnosticoPreliminar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratamiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoAtencionFieldUpdateOperationsInput | $Enums.EstadoAtencion;
    fechaIngreso?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaAlta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AtencionMedicaCountOutputType = {
    examen: number;
};
export type AtencionMedicaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examen?: boolean | AtencionMedicaCountOutputTypeCountExamenArgs;
};
export type AtencionMedicaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaCountOutputTypeSelect<ExtArgs> | null;
};
export type AtencionMedicaCountOutputTypeCountExamenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamenLaboratorioWhereInput;
};
export type AtencionMedicaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mascotaId?: boolean;
    veterinarioId?: boolean;
    abiertaPorId?: boolean;
    motivoConsulta?: boolean;
    diagnosticoPreliminar?: boolean;
    tratamiento?: boolean;
    estado?: boolean;
    fechaIngreso?: boolean;
    fechaAlta?: boolean;
    mascota?: boolean | Prisma.MascotaDefaultArgs<ExtArgs>;
    veterinario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    abiertaPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    examen?: boolean | Prisma.AtencionMedica$examenArgs<ExtArgs>;
    _count?: boolean | Prisma.AtencionMedicaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["atencionMedica"]>;
export type AtencionMedicaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mascotaId?: boolean;
    veterinarioId?: boolean;
    abiertaPorId?: boolean;
    motivoConsulta?: boolean;
    diagnosticoPreliminar?: boolean;
    tratamiento?: boolean;
    estado?: boolean;
    fechaIngreso?: boolean;
    fechaAlta?: boolean;
    mascota?: boolean | Prisma.MascotaDefaultArgs<ExtArgs>;
    veterinario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    abiertaPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["atencionMedica"]>;
export type AtencionMedicaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mascotaId?: boolean;
    veterinarioId?: boolean;
    abiertaPorId?: boolean;
    motivoConsulta?: boolean;
    diagnosticoPreliminar?: boolean;
    tratamiento?: boolean;
    estado?: boolean;
    fechaIngreso?: boolean;
    fechaAlta?: boolean;
    mascota?: boolean | Prisma.MascotaDefaultArgs<ExtArgs>;
    veterinario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    abiertaPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["atencionMedica"]>;
export type AtencionMedicaSelectScalar = {
    id?: boolean;
    mascotaId?: boolean;
    veterinarioId?: boolean;
    abiertaPorId?: boolean;
    motivoConsulta?: boolean;
    diagnosticoPreliminar?: boolean;
    tratamiento?: boolean;
    estado?: boolean;
    fechaIngreso?: boolean;
    fechaAlta?: boolean;
};
export type AtencionMedicaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mascotaId" | "veterinarioId" | "abiertaPorId" | "motivoConsulta" | "diagnosticoPreliminar" | "tratamiento" | "estado" | "fechaIngreso" | "fechaAlta", ExtArgs["result"]["atencionMedica"]>;
export type AtencionMedicaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mascota?: boolean | Prisma.MascotaDefaultArgs<ExtArgs>;
    veterinario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    abiertaPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    examen?: boolean | Prisma.AtencionMedica$examenArgs<ExtArgs>;
    _count?: boolean | Prisma.AtencionMedicaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AtencionMedicaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mascota?: boolean | Prisma.MascotaDefaultArgs<ExtArgs>;
    veterinario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    abiertaPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type AtencionMedicaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mascota?: boolean | Prisma.MascotaDefaultArgs<ExtArgs>;
    veterinario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    abiertaPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $AtencionMedicaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AtencionMedica";
    objects: {
        mascota: Prisma.$MascotaPayload<ExtArgs>;
        veterinario: Prisma.$UsuarioPayload<ExtArgs>;
        abiertaPor: Prisma.$UsuarioPayload<ExtArgs>;
        examen: Prisma.$ExamenLaboratorioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        mascotaId: number;
        veterinarioId: number;
        abiertaPorId: number;
        motivoConsulta: string;
        diagnosticoPreliminar: string | null;
        tratamiento: string | null;
        estado: $Enums.EstadoAtencion;
        fechaIngreso: Date;
        fechaAlta: Date | null;
    }, ExtArgs["result"]["atencionMedica"]>;
    composites: {};
};
export type AtencionMedicaGetPayload<S extends boolean | null | undefined | AtencionMedicaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload, S>;
export type AtencionMedicaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AtencionMedicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AtencionMedicaCountAggregateInputType | true;
};
export interface AtencionMedicaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AtencionMedica'];
        meta: {
            name: 'AtencionMedica';
        };
    };
    findUnique<T extends AtencionMedicaFindUniqueArgs>(args: Prisma.SelectSubset<T, AtencionMedicaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AtencionMedicaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AtencionMedicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AtencionMedicaFindFirstArgs>(args?: Prisma.SelectSubset<T, AtencionMedicaFindFirstArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AtencionMedicaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AtencionMedicaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AtencionMedicaFindManyArgs>(args?: Prisma.SelectSubset<T, AtencionMedicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AtencionMedicaCreateArgs>(args: Prisma.SelectSubset<T, AtencionMedicaCreateArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AtencionMedicaCreateManyArgs>(args?: Prisma.SelectSubset<T, AtencionMedicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AtencionMedicaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AtencionMedicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AtencionMedicaDeleteArgs>(args: Prisma.SelectSubset<T, AtencionMedicaDeleteArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AtencionMedicaUpdateArgs>(args: Prisma.SelectSubset<T, AtencionMedicaUpdateArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AtencionMedicaDeleteManyArgs>(args?: Prisma.SelectSubset<T, AtencionMedicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AtencionMedicaUpdateManyArgs>(args: Prisma.SelectSubset<T, AtencionMedicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AtencionMedicaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AtencionMedicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AtencionMedicaUpsertArgs>(args: Prisma.SelectSubset<T, AtencionMedicaUpsertArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AtencionMedicaCountArgs>(args?: Prisma.Subset<T, AtencionMedicaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AtencionMedicaCountAggregateOutputType> : number>;
    aggregate<T extends AtencionMedicaAggregateArgs>(args: Prisma.Subset<T, AtencionMedicaAggregateArgs>): Prisma.PrismaPromise<GetAtencionMedicaAggregateType<T>>;
    groupBy<T extends AtencionMedicaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AtencionMedicaGroupByArgs['orderBy'];
    } : {
        orderBy?: AtencionMedicaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AtencionMedicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtencionMedicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AtencionMedicaFieldRefs;
}
export interface Prisma__AtencionMedicaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    mascota<T extends Prisma.MascotaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MascotaDefaultArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    veterinario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    abiertaPor<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    examen<T extends Prisma.AtencionMedica$examenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AtencionMedica$examenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AtencionMedicaFieldRefs {
    readonly id: Prisma.FieldRef<"AtencionMedica", 'Int'>;
    readonly mascotaId: Prisma.FieldRef<"AtencionMedica", 'Int'>;
    readonly veterinarioId: Prisma.FieldRef<"AtencionMedica", 'Int'>;
    readonly abiertaPorId: Prisma.FieldRef<"AtencionMedica", 'Int'>;
    readonly motivoConsulta: Prisma.FieldRef<"AtencionMedica", 'String'>;
    readonly diagnosticoPreliminar: Prisma.FieldRef<"AtencionMedica", 'String'>;
    readonly tratamiento: Prisma.FieldRef<"AtencionMedica", 'String'>;
    readonly estado: Prisma.FieldRef<"AtencionMedica", 'EstadoAtencion'>;
    readonly fechaIngreso: Prisma.FieldRef<"AtencionMedica", 'DateTime'>;
    readonly fechaAlta: Prisma.FieldRef<"AtencionMedica", 'DateTime'>;
}
export type AtencionMedicaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    where: Prisma.AtencionMedicaWhereUniqueInput;
};
export type AtencionMedicaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    where: Prisma.AtencionMedicaWhereUniqueInput;
};
export type AtencionMedicaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    where?: Prisma.AtencionMedicaWhereInput;
    orderBy?: Prisma.AtencionMedicaOrderByWithRelationInput | Prisma.AtencionMedicaOrderByWithRelationInput[];
    cursor?: Prisma.AtencionMedicaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AtencionMedicaScalarFieldEnum | Prisma.AtencionMedicaScalarFieldEnum[];
};
export type AtencionMedicaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    where?: Prisma.AtencionMedicaWhereInput;
    orderBy?: Prisma.AtencionMedicaOrderByWithRelationInput | Prisma.AtencionMedicaOrderByWithRelationInput[];
    cursor?: Prisma.AtencionMedicaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AtencionMedicaScalarFieldEnum | Prisma.AtencionMedicaScalarFieldEnum[];
};
export type AtencionMedicaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    where?: Prisma.AtencionMedicaWhereInput;
    orderBy?: Prisma.AtencionMedicaOrderByWithRelationInput | Prisma.AtencionMedicaOrderByWithRelationInput[];
    cursor?: Prisma.AtencionMedicaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AtencionMedicaScalarFieldEnum | Prisma.AtencionMedicaScalarFieldEnum[];
};
export type AtencionMedicaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AtencionMedicaCreateInput, Prisma.AtencionMedicaUncheckedCreateInput>;
};
export type AtencionMedicaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AtencionMedicaCreateManyInput | Prisma.AtencionMedicaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AtencionMedicaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    data: Prisma.AtencionMedicaCreateManyInput | Prisma.AtencionMedicaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AtencionMedicaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AtencionMedicaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateInput, Prisma.AtencionMedicaUncheckedUpdateInput>;
    where: Prisma.AtencionMedicaWhereUniqueInput;
};
export type AtencionMedicaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateManyMutationInput, Prisma.AtencionMedicaUncheckedUpdateManyInput>;
    where?: Prisma.AtencionMedicaWhereInput;
    limit?: number;
};
export type AtencionMedicaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AtencionMedicaUpdateManyMutationInput, Prisma.AtencionMedicaUncheckedUpdateManyInput>;
    where?: Prisma.AtencionMedicaWhereInput;
    limit?: number;
    include?: Prisma.AtencionMedicaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AtencionMedicaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    where: Prisma.AtencionMedicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AtencionMedicaCreateInput, Prisma.AtencionMedicaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AtencionMedicaUpdateInput, Prisma.AtencionMedicaUncheckedUpdateInput>;
};
export type AtencionMedicaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
    where: Prisma.AtencionMedicaWhereUniqueInput;
};
export type AtencionMedicaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtencionMedicaWhereInput;
    limit?: number;
};
export type AtencionMedica$examenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
    where?: Prisma.ExamenLaboratorioWhereInput;
    orderBy?: Prisma.ExamenLaboratorioOrderByWithRelationInput | Prisma.ExamenLaboratorioOrderByWithRelationInput[];
    cursor?: Prisma.ExamenLaboratorioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamenLaboratorioScalarFieldEnum | Prisma.ExamenLaboratorioScalarFieldEnum[];
};
export type AtencionMedicaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtencionMedicaSelect<ExtArgs> | null;
    omit?: Prisma.AtencionMedicaOmit<ExtArgs> | null;
    include?: Prisma.AtencionMedicaInclude<ExtArgs> | null;
};

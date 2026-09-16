import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExamenLaboratorioModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamenLaboratorioPayload>;
export type AggregateExamenLaboratorio = {
    _count: ExamenLaboratorioCountAggregateOutputType | null;
    _avg: ExamenLaboratorioAvgAggregateOutputType | null;
    _sum: ExamenLaboratorioSumAggregateOutputType | null;
    _min: ExamenLaboratorioMinAggregateOutputType | null;
    _max: ExamenLaboratorioMaxAggregateOutputType | null;
};
export type ExamenLaboratorioAvgAggregateOutputType = {
    id: number | null;
    atencionId: number | null;
    solicitadoPorId: number | null;
    LaboratoristaId: number | null;
};
export type ExamenLaboratorioSumAggregateOutputType = {
    id: number | null;
    atencionId: number | null;
    solicitadoPorId: number | null;
    LaboratoristaId: number | null;
};
export type ExamenLaboratorioMinAggregateOutputType = {
    id: number | null;
    atencionId: number | null;
    tipoExamen: $Enums.TipoExamen | null;
    solicitadoPorId: number | null;
    LaboratoristaId: number | null;
    resultados: string | null;
    observaciones: string | null;
    estado: $Enums.EstadoExamen | null;
    fechaResultado: Date | null;
};
export type ExamenLaboratorioMaxAggregateOutputType = {
    id: number | null;
    atencionId: number | null;
    tipoExamen: $Enums.TipoExamen | null;
    solicitadoPorId: number | null;
    LaboratoristaId: number | null;
    resultados: string | null;
    observaciones: string | null;
    estado: $Enums.EstadoExamen | null;
    fechaResultado: Date | null;
};
export type ExamenLaboratorioCountAggregateOutputType = {
    id: number;
    atencionId: number;
    tipoExamen: number;
    solicitadoPorId: number;
    LaboratoristaId: number;
    resultados: number;
    observaciones: number;
    estado: number;
    fechaResultado: number;
    _all: number;
};
export type ExamenLaboratorioAvgAggregateInputType = {
    id?: true;
    atencionId?: true;
    solicitadoPorId?: true;
    LaboratoristaId?: true;
};
export type ExamenLaboratorioSumAggregateInputType = {
    id?: true;
    atencionId?: true;
    solicitadoPorId?: true;
    LaboratoristaId?: true;
};
export type ExamenLaboratorioMinAggregateInputType = {
    id?: true;
    atencionId?: true;
    tipoExamen?: true;
    solicitadoPorId?: true;
    LaboratoristaId?: true;
    resultados?: true;
    observaciones?: true;
    estado?: true;
    fechaResultado?: true;
};
export type ExamenLaboratorioMaxAggregateInputType = {
    id?: true;
    atencionId?: true;
    tipoExamen?: true;
    solicitadoPorId?: true;
    LaboratoristaId?: true;
    resultados?: true;
    observaciones?: true;
    estado?: true;
    fechaResultado?: true;
};
export type ExamenLaboratorioCountAggregateInputType = {
    id?: true;
    atencionId?: true;
    tipoExamen?: true;
    solicitadoPorId?: true;
    LaboratoristaId?: true;
    resultados?: true;
    observaciones?: true;
    estado?: true;
    fechaResultado?: true;
    _all?: true;
};
export type ExamenLaboratorioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamenLaboratorioWhereInput;
    orderBy?: Prisma.ExamenLaboratorioOrderByWithRelationInput | Prisma.ExamenLaboratorioOrderByWithRelationInput[];
    cursor?: Prisma.ExamenLaboratorioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamenLaboratorioCountAggregateInputType;
    _avg?: ExamenLaboratorioAvgAggregateInputType;
    _sum?: ExamenLaboratorioSumAggregateInputType;
    _min?: ExamenLaboratorioMinAggregateInputType;
    _max?: ExamenLaboratorioMaxAggregateInputType;
};
export type GetExamenLaboratorioAggregateType<T extends ExamenLaboratorioAggregateArgs> = {
    [P in keyof T & keyof AggregateExamenLaboratorio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExamenLaboratorio[P]> : Prisma.GetScalarType<T[P], AggregateExamenLaboratorio[P]>;
};
export type ExamenLaboratorioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamenLaboratorioWhereInput;
    orderBy?: Prisma.ExamenLaboratorioOrderByWithAggregationInput | Prisma.ExamenLaboratorioOrderByWithAggregationInput[];
    by: Prisma.ExamenLaboratorioScalarFieldEnum[] | Prisma.ExamenLaboratorioScalarFieldEnum;
    having?: Prisma.ExamenLaboratorioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamenLaboratorioCountAggregateInputType | true;
    _avg?: ExamenLaboratorioAvgAggregateInputType;
    _sum?: ExamenLaboratorioSumAggregateInputType;
    _min?: ExamenLaboratorioMinAggregateInputType;
    _max?: ExamenLaboratorioMaxAggregateInputType;
};
export type ExamenLaboratorioGroupByOutputType = {
    id: number;
    atencionId: number;
    tipoExamen: $Enums.TipoExamen;
    solicitadoPorId: number;
    LaboratoristaId: number;
    resultados: string | null;
    observaciones: string | null;
    estado: $Enums.EstadoExamen;
    fechaResultado: Date;
    _count: ExamenLaboratorioCountAggregateOutputType | null;
    _avg: ExamenLaboratorioAvgAggregateOutputType | null;
    _sum: ExamenLaboratorioSumAggregateOutputType | null;
    _min: ExamenLaboratorioMinAggregateOutputType | null;
    _max: ExamenLaboratorioMaxAggregateOutputType | null;
};
export type GetExamenLaboratorioGroupByPayload<T extends ExamenLaboratorioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamenLaboratorioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamenLaboratorioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamenLaboratorioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamenLaboratorioGroupByOutputType[P]>;
}>>;
export type ExamenLaboratorioWhereInput = {
    AND?: Prisma.ExamenLaboratorioWhereInput | Prisma.ExamenLaboratorioWhereInput[];
    OR?: Prisma.ExamenLaboratorioWhereInput[];
    NOT?: Prisma.ExamenLaboratorioWhereInput | Prisma.ExamenLaboratorioWhereInput[];
    id?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    atencionId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    tipoExamen?: Prisma.EnumTipoExamenFilter<"ExamenLaboratorio"> | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    LaboratoristaId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    resultados?: Prisma.StringNullableFilter<"ExamenLaboratorio"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"ExamenLaboratorio"> | string | null;
    estado?: Prisma.EnumEstadoExamenFilter<"ExamenLaboratorio"> | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFilter<"ExamenLaboratorio"> | Date | string;
    atencion?: Prisma.XOR<Prisma.AtencionMedicaScalarRelationFilter, Prisma.AtencionMedicaWhereInput>;
    solicitadoPor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    laboratorista?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type ExamenLaboratorioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    atencionId?: Prisma.SortOrder;
    tipoExamen?: Prisma.SortOrder;
    solicitadoPorId?: Prisma.SortOrder;
    LaboratoristaId?: Prisma.SortOrder;
    resultados?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaResultado?: Prisma.SortOrder;
    atencion?: Prisma.AtencionMedicaOrderByWithRelationInput;
    solicitadoPor?: Prisma.UsuarioOrderByWithRelationInput;
    laboratorista?: Prisma.UsuarioOrderByWithRelationInput;
};
export type ExamenLaboratorioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ExamenLaboratorioWhereInput | Prisma.ExamenLaboratorioWhereInput[];
    OR?: Prisma.ExamenLaboratorioWhereInput[];
    NOT?: Prisma.ExamenLaboratorioWhereInput | Prisma.ExamenLaboratorioWhereInput[];
    atencionId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    tipoExamen?: Prisma.EnumTipoExamenFilter<"ExamenLaboratorio"> | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    LaboratoristaId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    resultados?: Prisma.StringNullableFilter<"ExamenLaboratorio"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"ExamenLaboratorio"> | string | null;
    estado?: Prisma.EnumEstadoExamenFilter<"ExamenLaboratorio"> | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFilter<"ExamenLaboratorio"> | Date | string;
    atencion?: Prisma.XOR<Prisma.AtencionMedicaScalarRelationFilter, Prisma.AtencionMedicaWhereInput>;
    solicitadoPor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    laboratorista?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id">;
export type ExamenLaboratorioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    atencionId?: Prisma.SortOrder;
    tipoExamen?: Prisma.SortOrder;
    solicitadoPorId?: Prisma.SortOrder;
    LaboratoristaId?: Prisma.SortOrder;
    resultados?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaResultado?: Prisma.SortOrder;
    _count?: Prisma.ExamenLaboratorioCountOrderByAggregateInput;
    _avg?: Prisma.ExamenLaboratorioAvgOrderByAggregateInput;
    _max?: Prisma.ExamenLaboratorioMaxOrderByAggregateInput;
    _min?: Prisma.ExamenLaboratorioMinOrderByAggregateInput;
    _sum?: Prisma.ExamenLaboratorioSumOrderByAggregateInput;
};
export type ExamenLaboratorioScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamenLaboratorioScalarWhereWithAggregatesInput | Prisma.ExamenLaboratorioScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamenLaboratorioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamenLaboratorioScalarWhereWithAggregatesInput | Prisma.ExamenLaboratorioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ExamenLaboratorio"> | number;
    atencionId?: Prisma.IntWithAggregatesFilter<"ExamenLaboratorio"> | number;
    tipoExamen?: Prisma.EnumTipoExamenWithAggregatesFilter<"ExamenLaboratorio"> | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntWithAggregatesFilter<"ExamenLaboratorio"> | number;
    LaboratoristaId?: Prisma.IntWithAggregatesFilter<"ExamenLaboratorio"> | number;
    resultados?: Prisma.StringNullableWithAggregatesFilter<"ExamenLaboratorio"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"ExamenLaboratorio"> | string | null;
    estado?: Prisma.EnumEstadoExamenWithAggregatesFilter<"ExamenLaboratorio"> | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeWithAggregatesFilter<"ExamenLaboratorio"> | Date | string;
};
export type ExamenLaboratorioCreateInput = {
    tipoExamen: $Enums.TipoExamen;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
    atencion: Prisma.AtencionMedicaCreateNestedOneWithoutExamenInput;
    solicitadoPor: Prisma.UsuarioCreateNestedOneWithoutExamenesSolicitadosInput;
    laboratorista: Prisma.UsuarioCreateNestedOneWithoutExamenesLaboratorioInput;
};
export type ExamenLaboratorioUncheckedCreateInput = {
    id?: number;
    atencionId: number;
    tipoExamen: $Enums.TipoExamen;
    solicitadoPorId: number;
    LaboratoristaId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioUpdateInput = {
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencion?: Prisma.AtencionMedicaUpdateOneRequiredWithoutExamenNestedInput;
    solicitadoPor?: Prisma.UsuarioUpdateOneRequiredWithoutExamenesSolicitadosNestedInput;
    laboratorista?: Prisma.UsuarioUpdateOneRequiredWithoutExamenesLaboratorioNestedInput;
};
export type ExamenLaboratorioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    atencionId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    LaboratoristaId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioCreateManyInput = {
    id?: number;
    atencionId: number;
    tipoExamen: $Enums.TipoExamen;
    solicitadoPorId: number;
    LaboratoristaId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioUpdateManyMutationInput = {
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    atencionId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    LaboratoristaId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioListRelationFilter = {
    every?: Prisma.ExamenLaboratorioWhereInput;
    some?: Prisma.ExamenLaboratorioWhereInput;
    none?: Prisma.ExamenLaboratorioWhereInput;
};
export type ExamenLaboratorioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExamenLaboratorioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    atencionId?: Prisma.SortOrder;
    tipoExamen?: Prisma.SortOrder;
    solicitadoPorId?: Prisma.SortOrder;
    LaboratoristaId?: Prisma.SortOrder;
    resultados?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaResultado?: Prisma.SortOrder;
};
export type ExamenLaboratorioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    atencionId?: Prisma.SortOrder;
    solicitadoPorId?: Prisma.SortOrder;
    LaboratoristaId?: Prisma.SortOrder;
};
export type ExamenLaboratorioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    atencionId?: Prisma.SortOrder;
    tipoExamen?: Prisma.SortOrder;
    solicitadoPorId?: Prisma.SortOrder;
    LaboratoristaId?: Prisma.SortOrder;
    resultados?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaResultado?: Prisma.SortOrder;
};
export type ExamenLaboratorioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    atencionId?: Prisma.SortOrder;
    tipoExamen?: Prisma.SortOrder;
    solicitadoPorId?: Prisma.SortOrder;
    LaboratoristaId?: Prisma.SortOrder;
    resultados?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaResultado?: Prisma.SortOrder;
};
export type ExamenLaboratorioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    atencionId?: Prisma.SortOrder;
    solicitadoPorId?: Prisma.SortOrder;
    LaboratoristaId?: Prisma.SortOrder;
};
export type ExamenLaboratorioCreateNestedManyWithoutSolicitadoPorInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput> | Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManySolicitadoPorInputEnvelope;
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
};
export type ExamenLaboratorioCreateNestedManyWithoutLaboratoristaInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput> | Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyLaboratoristaInputEnvelope;
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
};
export type ExamenLaboratorioUncheckedCreateNestedManyWithoutSolicitadoPorInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput> | Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManySolicitadoPorInputEnvelope;
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
};
export type ExamenLaboratorioUncheckedCreateNestedManyWithoutLaboratoristaInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput> | Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyLaboratoristaInputEnvelope;
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
};
export type ExamenLaboratorioUpdateManyWithoutSolicitadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput> | Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput[];
    upsert?: Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutSolicitadoPorInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManySolicitadoPorInputEnvelope;
    set?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    disconnect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    delete?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    update?: Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutSolicitadoPorInput[];
    updateMany?: Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutSolicitadoPorInput[];
    deleteMany?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
};
export type ExamenLaboratorioUpdateManyWithoutLaboratoristaNestedInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput> | Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput[];
    upsert?: Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutLaboratoristaInput | Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutLaboratoristaInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyLaboratoristaInputEnvelope;
    set?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    disconnect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    delete?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    update?: Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutLaboratoristaInput | Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutLaboratoristaInput[];
    updateMany?: Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutLaboratoristaInput | Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutLaboratoristaInput[];
    deleteMany?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
};
export type ExamenLaboratorioUncheckedUpdateManyWithoutSolicitadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput> | Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput[];
    upsert?: Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutSolicitadoPorInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManySolicitadoPorInputEnvelope;
    set?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    disconnect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    delete?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    update?: Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutSolicitadoPorInput[];
    updateMany?: Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutSolicitadoPorInput | Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutSolicitadoPorInput[];
    deleteMany?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
};
export type ExamenLaboratorioUncheckedUpdateManyWithoutLaboratoristaNestedInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput> | Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput[];
    upsert?: Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutLaboratoristaInput | Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutLaboratoristaInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyLaboratoristaInputEnvelope;
    set?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    disconnect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    delete?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    update?: Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutLaboratoristaInput | Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutLaboratoristaInput[];
    updateMany?: Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutLaboratoristaInput | Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutLaboratoristaInput[];
    deleteMany?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
};
export type ExamenLaboratorioCreateNestedManyWithoutAtencionInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput> | Prisma.ExamenLaboratorioCreateWithoutAtencionInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyAtencionInputEnvelope;
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
};
export type ExamenLaboratorioUncheckedCreateNestedManyWithoutAtencionInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput> | Prisma.ExamenLaboratorioCreateWithoutAtencionInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyAtencionInputEnvelope;
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
};
export type ExamenLaboratorioUpdateManyWithoutAtencionNestedInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput> | Prisma.ExamenLaboratorioCreateWithoutAtencionInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput[];
    upsert?: Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutAtencionInput | Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutAtencionInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyAtencionInputEnvelope;
    set?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    disconnect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    delete?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    update?: Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutAtencionInput | Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutAtencionInput[];
    updateMany?: Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutAtencionInput | Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutAtencionInput[];
    deleteMany?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
};
export type ExamenLaboratorioUncheckedUpdateManyWithoutAtencionNestedInput = {
    create?: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput> | Prisma.ExamenLaboratorioCreateWithoutAtencionInput[] | Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput[];
    connectOrCreate?: Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput | Prisma.ExamenLaboratorioCreateOrConnectWithoutAtencionInput[];
    upsert?: Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutAtencionInput | Prisma.ExamenLaboratorioUpsertWithWhereUniqueWithoutAtencionInput[];
    createMany?: Prisma.ExamenLaboratorioCreateManyAtencionInputEnvelope;
    set?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    disconnect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    delete?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    connect?: Prisma.ExamenLaboratorioWhereUniqueInput | Prisma.ExamenLaboratorioWhereUniqueInput[];
    update?: Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutAtencionInput | Prisma.ExamenLaboratorioUpdateWithWhereUniqueWithoutAtencionInput[];
    updateMany?: Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutAtencionInput | Prisma.ExamenLaboratorioUpdateManyWithWhereWithoutAtencionInput[];
    deleteMany?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
};
export type EnumTipoExamenFieldUpdateOperationsInput = {
    set?: $Enums.TipoExamen;
};
export type EnumEstadoExamenFieldUpdateOperationsInput = {
    set?: $Enums.EstadoExamen;
};
export type ExamenLaboratorioCreateWithoutSolicitadoPorInput = {
    tipoExamen: $Enums.TipoExamen;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
    atencion: Prisma.AtencionMedicaCreateNestedOneWithoutExamenInput;
    laboratorista: Prisma.UsuarioCreateNestedOneWithoutExamenesLaboratorioInput;
};
export type ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput = {
    id?: number;
    atencionId: number;
    tipoExamen: $Enums.TipoExamen;
    LaboratoristaId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioCreateOrConnectWithoutSolicitadoPorInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput>;
};
export type ExamenLaboratorioCreateManySolicitadoPorInputEnvelope = {
    data: Prisma.ExamenLaboratorioCreateManySolicitadoPorInput | Prisma.ExamenLaboratorioCreateManySolicitadoPorInput[];
    skipDuplicates?: boolean;
};
export type ExamenLaboratorioCreateWithoutLaboratoristaInput = {
    tipoExamen: $Enums.TipoExamen;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
    atencion: Prisma.AtencionMedicaCreateNestedOneWithoutExamenInput;
    solicitadoPor: Prisma.UsuarioCreateNestedOneWithoutExamenesSolicitadosInput;
};
export type ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput = {
    id?: number;
    atencionId: number;
    tipoExamen: $Enums.TipoExamen;
    solicitadoPorId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioCreateOrConnectWithoutLaboratoristaInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput>;
};
export type ExamenLaboratorioCreateManyLaboratoristaInputEnvelope = {
    data: Prisma.ExamenLaboratorioCreateManyLaboratoristaInput | Prisma.ExamenLaboratorioCreateManyLaboratoristaInput[];
    skipDuplicates?: boolean;
};
export type ExamenLaboratorioUpsertWithWhereUniqueWithoutSolicitadoPorInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamenLaboratorioUpdateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedUpdateWithoutSolicitadoPorInput>;
    create: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutSolicitadoPorInput>;
};
export type ExamenLaboratorioUpdateWithWhereUniqueWithoutSolicitadoPorInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateWithoutSolicitadoPorInput, Prisma.ExamenLaboratorioUncheckedUpdateWithoutSolicitadoPorInput>;
};
export type ExamenLaboratorioUpdateManyWithWhereWithoutSolicitadoPorInput = {
    where: Prisma.ExamenLaboratorioScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateManyMutationInput, Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutSolicitadoPorInput>;
};
export type ExamenLaboratorioScalarWhereInput = {
    AND?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
    OR?: Prisma.ExamenLaboratorioScalarWhereInput[];
    NOT?: Prisma.ExamenLaboratorioScalarWhereInput | Prisma.ExamenLaboratorioScalarWhereInput[];
    id?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    atencionId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    tipoExamen?: Prisma.EnumTipoExamenFilter<"ExamenLaboratorio"> | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    LaboratoristaId?: Prisma.IntFilter<"ExamenLaboratorio"> | number;
    resultados?: Prisma.StringNullableFilter<"ExamenLaboratorio"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"ExamenLaboratorio"> | string | null;
    estado?: Prisma.EnumEstadoExamenFilter<"ExamenLaboratorio"> | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFilter<"ExamenLaboratorio"> | Date | string;
};
export type ExamenLaboratorioUpsertWithWhereUniqueWithoutLaboratoristaInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamenLaboratorioUpdateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedUpdateWithoutLaboratoristaInput>;
    create: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutLaboratoristaInput>;
};
export type ExamenLaboratorioUpdateWithWhereUniqueWithoutLaboratoristaInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateWithoutLaboratoristaInput, Prisma.ExamenLaboratorioUncheckedUpdateWithoutLaboratoristaInput>;
};
export type ExamenLaboratorioUpdateManyWithWhereWithoutLaboratoristaInput = {
    where: Prisma.ExamenLaboratorioScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateManyMutationInput, Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutLaboratoristaInput>;
};
export type ExamenLaboratorioCreateWithoutAtencionInput = {
    tipoExamen: $Enums.TipoExamen;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
    solicitadoPor: Prisma.UsuarioCreateNestedOneWithoutExamenesSolicitadosInput;
    laboratorista: Prisma.UsuarioCreateNestedOneWithoutExamenesLaboratorioInput;
};
export type ExamenLaboratorioUncheckedCreateWithoutAtencionInput = {
    id?: number;
    tipoExamen: $Enums.TipoExamen;
    solicitadoPorId: number;
    LaboratoristaId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioCreateOrConnectWithoutAtencionInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput>;
};
export type ExamenLaboratorioCreateManyAtencionInputEnvelope = {
    data: Prisma.ExamenLaboratorioCreateManyAtencionInput | Prisma.ExamenLaboratorioCreateManyAtencionInput[];
    skipDuplicates?: boolean;
};
export type ExamenLaboratorioUpsertWithWhereUniqueWithoutAtencionInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamenLaboratorioUpdateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedUpdateWithoutAtencionInput>;
    create: Prisma.XOR<Prisma.ExamenLaboratorioCreateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedCreateWithoutAtencionInput>;
};
export type ExamenLaboratorioUpdateWithWhereUniqueWithoutAtencionInput = {
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateWithoutAtencionInput, Prisma.ExamenLaboratorioUncheckedUpdateWithoutAtencionInput>;
};
export type ExamenLaboratorioUpdateManyWithWhereWithoutAtencionInput = {
    where: Prisma.ExamenLaboratorioScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateManyMutationInput, Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutAtencionInput>;
};
export type ExamenLaboratorioCreateManySolicitadoPorInput = {
    id?: number;
    atencionId: number;
    tipoExamen: $Enums.TipoExamen;
    LaboratoristaId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioCreateManyLaboratoristaInput = {
    id?: number;
    atencionId: number;
    tipoExamen: $Enums.TipoExamen;
    solicitadoPorId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioUpdateWithoutSolicitadoPorInput = {
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencion?: Prisma.AtencionMedicaUpdateOneRequiredWithoutExamenNestedInput;
    laboratorista?: Prisma.UsuarioUpdateOneRequiredWithoutExamenesLaboratorioNestedInput;
};
export type ExamenLaboratorioUncheckedUpdateWithoutSolicitadoPorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    atencionId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    LaboratoristaId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioUncheckedUpdateManyWithoutSolicitadoPorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    atencionId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    LaboratoristaId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioUpdateWithoutLaboratoristaInput = {
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencion?: Prisma.AtencionMedicaUpdateOneRequiredWithoutExamenNestedInput;
    solicitadoPor?: Prisma.UsuarioUpdateOneRequiredWithoutExamenesSolicitadosNestedInput;
};
export type ExamenLaboratorioUncheckedUpdateWithoutLaboratoristaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    atencionId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioUncheckedUpdateManyWithoutLaboratoristaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    atencionId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioCreateManyAtencionInput = {
    id?: number;
    tipoExamen: $Enums.TipoExamen;
    solicitadoPorId: number;
    LaboratoristaId: number;
    resultados?: string | null;
    observaciones?: string | null;
    estado?: $Enums.EstadoExamen;
    fechaResultado?: Date | string;
};
export type ExamenLaboratorioUpdateWithoutAtencionInput = {
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitadoPor?: Prisma.UsuarioUpdateOneRequiredWithoutExamenesSolicitadosNestedInput;
    laboratorista?: Prisma.UsuarioUpdateOneRequiredWithoutExamenesLaboratorioNestedInput;
};
export type ExamenLaboratorioUncheckedUpdateWithoutAtencionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    LaboratoristaId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioUncheckedUpdateManyWithoutAtencionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipoExamen?: Prisma.EnumTipoExamenFieldUpdateOperationsInput | $Enums.TipoExamen;
    solicitadoPorId?: Prisma.IntFieldUpdateOperationsInput | number;
    LaboratoristaId?: Prisma.IntFieldUpdateOperationsInput | number;
    resultados?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.EnumEstadoExamenFieldUpdateOperationsInput | $Enums.EstadoExamen;
    fechaResultado?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamenLaboratorioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    atencionId?: boolean;
    tipoExamen?: boolean;
    solicitadoPorId?: boolean;
    LaboratoristaId?: boolean;
    resultados?: boolean;
    observaciones?: boolean;
    estado?: boolean;
    fechaResultado?: boolean;
    atencion?: boolean | Prisma.AtencionMedicaDefaultArgs<ExtArgs>;
    solicitadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    laboratorista?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examenLaboratorio"]>;
export type ExamenLaboratorioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    atencionId?: boolean;
    tipoExamen?: boolean;
    solicitadoPorId?: boolean;
    LaboratoristaId?: boolean;
    resultados?: boolean;
    observaciones?: boolean;
    estado?: boolean;
    fechaResultado?: boolean;
    atencion?: boolean | Prisma.AtencionMedicaDefaultArgs<ExtArgs>;
    solicitadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    laboratorista?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examenLaboratorio"]>;
export type ExamenLaboratorioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    atencionId?: boolean;
    tipoExamen?: boolean;
    solicitadoPorId?: boolean;
    LaboratoristaId?: boolean;
    resultados?: boolean;
    observaciones?: boolean;
    estado?: boolean;
    fechaResultado?: boolean;
    atencion?: boolean | Prisma.AtencionMedicaDefaultArgs<ExtArgs>;
    solicitadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    laboratorista?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examenLaboratorio"]>;
export type ExamenLaboratorioSelectScalar = {
    id?: boolean;
    atencionId?: boolean;
    tipoExamen?: boolean;
    solicitadoPorId?: boolean;
    LaboratoristaId?: boolean;
    resultados?: boolean;
    observaciones?: boolean;
    estado?: boolean;
    fechaResultado?: boolean;
};
export type ExamenLaboratorioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "atencionId" | "tipoExamen" | "solicitadoPorId" | "LaboratoristaId" | "resultados" | "observaciones" | "estado" | "fechaResultado", ExtArgs["result"]["examenLaboratorio"]>;
export type ExamenLaboratorioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    atencion?: boolean | Prisma.AtencionMedicaDefaultArgs<ExtArgs>;
    solicitadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    laboratorista?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type ExamenLaboratorioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    atencion?: boolean | Prisma.AtencionMedicaDefaultArgs<ExtArgs>;
    solicitadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    laboratorista?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type ExamenLaboratorioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    atencion?: boolean | Prisma.AtencionMedicaDefaultArgs<ExtArgs>;
    solicitadoPor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    laboratorista?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $ExamenLaboratorioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExamenLaboratorio";
    objects: {
        atencion: Prisma.$AtencionMedicaPayload<ExtArgs>;
        solicitadoPor: Prisma.$UsuarioPayload<ExtArgs>;
        laboratorista: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        atencionId: number;
        tipoExamen: $Enums.TipoExamen;
        solicitadoPorId: number;
        LaboratoristaId: number;
        resultados: string | null;
        observaciones: string | null;
        estado: $Enums.EstadoExamen;
        fechaResultado: Date;
    }, ExtArgs["result"]["examenLaboratorio"]>;
    composites: {};
};
export type ExamenLaboratorioGetPayload<S extends boolean | null | undefined | ExamenLaboratorioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload, S>;
export type ExamenLaboratorioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamenLaboratorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamenLaboratorioCountAggregateInputType | true;
};
export interface ExamenLaboratorioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExamenLaboratorio'];
        meta: {
            name: 'ExamenLaboratorio';
        };
    };
    findUnique<T extends ExamenLaboratorioFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamenLaboratorioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamenLaboratorioFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamenLaboratorioFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamenLaboratorioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamenLaboratorioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamenLaboratorioFindManyArgs>(args?: Prisma.SelectSubset<T, ExamenLaboratorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamenLaboratorioCreateArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioCreateArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamenLaboratorioCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamenLaboratorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamenLaboratorioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamenLaboratorioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamenLaboratorioDeleteArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamenLaboratorioUpdateArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamenLaboratorioDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamenLaboratorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamenLaboratorioUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamenLaboratorioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamenLaboratorioUpsertArgs>(args: Prisma.SelectSubset<T, ExamenLaboratorioUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamenLaboratorioClient<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamenLaboratorioCountArgs>(args?: Prisma.Subset<T, ExamenLaboratorioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamenLaboratorioCountAggregateOutputType> : number>;
    aggregate<T extends ExamenLaboratorioAggregateArgs>(args: Prisma.Subset<T, ExamenLaboratorioAggregateArgs>): Prisma.PrismaPromise<GetExamenLaboratorioAggregateType<T>>;
    groupBy<T extends ExamenLaboratorioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamenLaboratorioGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamenLaboratorioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamenLaboratorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamenLaboratorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamenLaboratorioFieldRefs;
}
export interface Prisma__ExamenLaboratorioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    atencion<T extends Prisma.AtencionMedicaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AtencionMedicaDefaultArgs<ExtArgs>>): Prisma.Prisma__AtencionMedicaClient<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    solicitadoPor<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    laboratorista<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamenLaboratorioFieldRefs {
    readonly id: Prisma.FieldRef<"ExamenLaboratorio", 'Int'>;
    readonly atencionId: Prisma.FieldRef<"ExamenLaboratorio", 'Int'>;
    readonly tipoExamen: Prisma.FieldRef<"ExamenLaboratorio", 'TipoExamen'>;
    readonly solicitadoPorId: Prisma.FieldRef<"ExamenLaboratorio", 'Int'>;
    readonly LaboratoristaId: Prisma.FieldRef<"ExamenLaboratorio", 'Int'>;
    readonly resultados: Prisma.FieldRef<"ExamenLaboratorio", 'String'>;
    readonly observaciones: Prisma.FieldRef<"ExamenLaboratorio", 'String'>;
    readonly estado: Prisma.FieldRef<"ExamenLaboratorio", 'EstadoExamen'>;
    readonly fechaResultado: Prisma.FieldRef<"ExamenLaboratorio", 'DateTime'>;
}
export type ExamenLaboratorioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
};
export type ExamenLaboratorioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
};
export type ExamenLaboratorioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamenLaboratorioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamenLaboratorioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamenLaboratorioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamenLaboratorioCreateInput, Prisma.ExamenLaboratorioUncheckedCreateInput>;
};
export type ExamenLaboratorioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamenLaboratorioCreateManyInput | Prisma.ExamenLaboratorioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamenLaboratorioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    data: Prisma.ExamenLaboratorioCreateManyInput | Prisma.ExamenLaboratorioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExamenLaboratorioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExamenLaboratorioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateInput, Prisma.ExamenLaboratorioUncheckedUpdateInput>;
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
};
export type ExamenLaboratorioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateManyMutationInput, Prisma.ExamenLaboratorioUncheckedUpdateManyInput>;
    where?: Prisma.ExamenLaboratorioWhereInput;
    limit?: number;
};
export type ExamenLaboratorioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamenLaboratorioUpdateManyMutationInput, Prisma.ExamenLaboratorioUncheckedUpdateManyInput>;
    where?: Prisma.ExamenLaboratorioWhereInput;
    limit?: number;
    include?: Prisma.ExamenLaboratorioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExamenLaboratorioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamenLaboratorioCreateInput, Prisma.ExamenLaboratorioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamenLaboratorioUpdateInput, Prisma.ExamenLaboratorioUncheckedUpdateInput>;
};
export type ExamenLaboratorioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
    where: Prisma.ExamenLaboratorioWhereUniqueInput;
};
export type ExamenLaboratorioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamenLaboratorioWhereInput;
    limit?: number;
};
export type ExamenLaboratorioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamenLaboratorioSelect<ExtArgs> | null;
    omit?: Prisma.ExamenLaboratorioOmit<ExtArgs> | null;
    include?: Prisma.ExamenLaboratorioInclude<ExtArgs> | null;
};

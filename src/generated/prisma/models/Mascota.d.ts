import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MascotaModel = runtime.Types.Result.DefaultSelection<Prisma.$MascotaPayload>;
export type AggregateMascota = {
    _count: MascotaCountAggregateOutputType | null;
    _avg: MascotaAvgAggregateOutputType | null;
    _sum: MascotaSumAggregateOutputType | null;
    _min: MascotaMinAggregateOutputType | null;
    _max: MascotaMaxAggregateOutputType | null;
};
export type MascotaAvgAggregateOutputType = {
    id: number | null;
    peso: runtime.Decimal | null;
    edadAproximada: number | null;
    dueñoId: number | null;
};
export type MascotaSumAggregateOutputType = {
    id: number | null;
    peso: runtime.Decimal | null;
    edadAproximada: number | null;
    dueñoId: number | null;
};
export type MascotaMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    especie: $Enums.Especie | null;
    raza: string | null;
    peso: runtime.Decimal | null;
    edadAproximada: number | null;
    dueñoId: number | null;
};
export type MascotaMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    especie: $Enums.Especie | null;
    raza: string | null;
    peso: runtime.Decimal | null;
    edadAproximada: number | null;
    dueñoId: number | null;
};
export type MascotaCountAggregateOutputType = {
    id: number;
    nombre: number;
    especie: number;
    raza: number;
    peso: number;
    edadAproximada: number;
    dueñoId: number;
    _all: number;
};
export type MascotaAvgAggregateInputType = {
    id?: true;
    peso?: true;
    edadAproximada?: true;
    dueñoId?: true;
};
export type MascotaSumAggregateInputType = {
    id?: true;
    peso?: true;
    edadAproximada?: true;
    dueñoId?: true;
};
export type MascotaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    especie?: true;
    raza?: true;
    peso?: true;
    edadAproximada?: true;
    dueñoId?: true;
};
export type MascotaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    especie?: true;
    raza?: true;
    peso?: true;
    edadAproximada?: true;
    dueñoId?: true;
};
export type MascotaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    especie?: true;
    raza?: true;
    peso?: true;
    edadAproximada?: true;
    dueñoId?: true;
    _all?: true;
};
export type MascotaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MascotaWhereInput;
    orderBy?: Prisma.MascotaOrderByWithRelationInput | Prisma.MascotaOrderByWithRelationInput[];
    cursor?: Prisma.MascotaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MascotaCountAggregateInputType;
    _avg?: MascotaAvgAggregateInputType;
    _sum?: MascotaSumAggregateInputType;
    _min?: MascotaMinAggregateInputType;
    _max?: MascotaMaxAggregateInputType;
};
export type GetMascotaAggregateType<T extends MascotaAggregateArgs> = {
    [P in keyof T & keyof AggregateMascota]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMascota[P]> : Prisma.GetScalarType<T[P], AggregateMascota[P]>;
};
export type MascotaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MascotaWhereInput;
    orderBy?: Prisma.MascotaOrderByWithAggregationInput | Prisma.MascotaOrderByWithAggregationInput[];
    by: Prisma.MascotaScalarFieldEnum[] | Prisma.MascotaScalarFieldEnum;
    having?: Prisma.MascotaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MascotaCountAggregateInputType | true;
    _avg?: MascotaAvgAggregateInputType;
    _sum?: MascotaSumAggregateInputType;
    _min?: MascotaMinAggregateInputType;
    _max?: MascotaMaxAggregateInputType;
};
export type MascotaGroupByOutputType = {
    id: number;
    nombre: string;
    especie: $Enums.Especie;
    raza: string | null;
    peso: runtime.Decimal;
    edadAproximada: number;
    dueñoId: number;
    _count: MascotaCountAggregateOutputType | null;
    _avg: MascotaAvgAggregateOutputType | null;
    _sum: MascotaSumAggregateOutputType | null;
    _min: MascotaMinAggregateOutputType | null;
    _max: MascotaMaxAggregateOutputType | null;
};
export type GetMascotaGroupByPayload<T extends MascotaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MascotaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MascotaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MascotaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MascotaGroupByOutputType[P]>;
}>>;
export type MascotaWhereInput = {
    AND?: Prisma.MascotaWhereInput | Prisma.MascotaWhereInput[];
    OR?: Prisma.MascotaWhereInput[];
    NOT?: Prisma.MascotaWhereInput | Prisma.MascotaWhereInput[];
    id?: Prisma.IntFilter<"Mascota"> | number;
    nombre?: Prisma.StringFilter<"Mascota"> | string;
    especie?: Prisma.EnumEspecieFilter<"Mascota"> | $Enums.Especie;
    raza?: Prisma.StringNullableFilter<"Mascota"> | string | null;
    peso?: Prisma.DecimalFilter<"Mascota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFilter<"Mascota"> | number;
    dueñoId?: Prisma.IntFilter<"Mascota"> | number;
    dueño?: Prisma.XOR<Prisma.DueñoScalarRelationFilter, Prisma.DueñoWhereInput>;
    atenciones?: Prisma.AtencionMedicaListRelationFilter;
};
export type MascotaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raza?: Prisma.SortOrderInput | Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    edadAproximada?: Prisma.SortOrder;
    dueñoId?: Prisma.SortOrder;
    dueño?: Prisma.DueñoOrderByWithRelationInput;
    atenciones?: Prisma.AtencionMedicaOrderByRelationAggregateInput;
};
export type MascotaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MascotaWhereInput | Prisma.MascotaWhereInput[];
    OR?: Prisma.MascotaWhereInput[];
    NOT?: Prisma.MascotaWhereInput | Prisma.MascotaWhereInput[];
    nombre?: Prisma.StringFilter<"Mascota"> | string;
    especie?: Prisma.EnumEspecieFilter<"Mascota"> | $Enums.Especie;
    raza?: Prisma.StringNullableFilter<"Mascota"> | string | null;
    peso?: Prisma.DecimalFilter<"Mascota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFilter<"Mascota"> | number;
    dueñoId?: Prisma.IntFilter<"Mascota"> | number;
    dueño?: Prisma.XOR<Prisma.DueñoScalarRelationFilter, Prisma.DueñoWhereInput>;
    atenciones?: Prisma.AtencionMedicaListRelationFilter;
}, "id">;
export type MascotaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raza?: Prisma.SortOrderInput | Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    edadAproximada?: Prisma.SortOrder;
    dueñoId?: Prisma.SortOrder;
    _count?: Prisma.MascotaCountOrderByAggregateInput;
    _avg?: Prisma.MascotaAvgOrderByAggregateInput;
    _max?: Prisma.MascotaMaxOrderByAggregateInput;
    _min?: Prisma.MascotaMinOrderByAggregateInput;
    _sum?: Prisma.MascotaSumOrderByAggregateInput;
};
export type MascotaScalarWhereWithAggregatesInput = {
    AND?: Prisma.MascotaScalarWhereWithAggregatesInput | Prisma.MascotaScalarWhereWithAggregatesInput[];
    OR?: Prisma.MascotaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MascotaScalarWhereWithAggregatesInput | Prisma.MascotaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Mascota"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Mascota"> | string;
    especie?: Prisma.EnumEspecieWithAggregatesFilter<"Mascota"> | $Enums.Especie;
    raza?: Prisma.StringNullableWithAggregatesFilter<"Mascota"> | string | null;
    peso?: Prisma.DecimalWithAggregatesFilter<"Mascota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntWithAggregatesFilter<"Mascota"> | number;
    dueñoId?: Prisma.IntWithAggregatesFilter<"Mascota"> | number;
};
export type MascotaCreateInput = {
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
    dueño: Prisma.DueñoCreateNestedOneWithoutMascotasInput;
    atenciones?: Prisma.AtencionMedicaCreateNestedManyWithoutMascotaInput;
};
export type MascotaUncheckedCreateInput = {
    id?: number;
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
    dueñoId: number;
    atenciones?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutMascotaInput;
};
export type MascotaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
    dueño?: Prisma.DueñoUpdateOneRequiredWithoutMascotasNestedInput;
    atenciones?: Prisma.AtencionMedicaUpdateManyWithoutMascotaNestedInput;
};
export type MascotaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
    dueñoId?: Prisma.IntFieldUpdateOperationsInput | number;
    atenciones?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutMascotaNestedInput;
};
export type MascotaCreateManyInput = {
    id?: number;
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
    dueñoId: number;
};
export type MascotaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MascotaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
    dueñoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MascotaListRelationFilter = {
    every?: Prisma.MascotaWhereInput;
    some?: Prisma.MascotaWhereInput;
    none?: Prisma.MascotaWhereInput;
};
export type MascotaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MascotaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raza?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    edadAproximada?: Prisma.SortOrder;
    dueñoId?: Prisma.SortOrder;
};
export type MascotaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    edadAproximada?: Prisma.SortOrder;
    dueñoId?: Prisma.SortOrder;
};
export type MascotaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raza?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    edadAproximada?: Prisma.SortOrder;
    dueñoId?: Prisma.SortOrder;
};
export type MascotaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    especie?: Prisma.SortOrder;
    raza?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    edadAproximada?: Prisma.SortOrder;
    dueñoId?: Prisma.SortOrder;
};
export type MascotaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    edadAproximada?: Prisma.SortOrder;
    dueñoId?: Prisma.SortOrder;
};
export type MascotaScalarRelationFilter = {
    is?: Prisma.MascotaWhereInput;
    isNot?: Prisma.MascotaWhereInput;
};
export type MascotaCreateNestedManyWithoutDueñoInput = {
    create?: Prisma.XOR<Prisma.MascotaCreateWithoutDueñoInput, Prisma.MascotaUncheckedCreateWithoutDueñoInput> | Prisma.MascotaCreateWithoutDueñoInput[] | Prisma.MascotaUncheckedCreateWithoutDueñoInput[];
    connectOrCreate?: Prisma.MascotaCreateOrConnectWithoutDueñoInput | Prisma.MascotaCreateOrConnectWithoutDueñoInput[];
    createMany?: Prisma.MascotaCreateManyDueñoInputEnvelope;
    connect?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
};
export type MascotaUncheckedCreateNestedManyWithoutDueñoInput = {
    create?: Prisma.XOR<Prisma.MascotaCreateWithoutDueñoInput, Prisma.MascotaUncheckedCreateWithoutDueñoInput> | Prisma.MascotaCreateWithoutDueñoInput[] | Prisma.MascotaUncheckedCreateWithoutDueñoInput[];
    connectOrCreate?: Prisma.MascotaCreateOrConnectWithoutDueñoInput | Prisma.MascotaCreateOrConnectWithoutDueñoInput[];
    createMany?: Prisma.MascotaCreateManyDueñoInputEnvelope;
    connect?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
};
export type MascotaUpdateManyWithoutDueñoNestedInput = {
    create?: Prisma.XOR<Prisma.MascotaCreateWithoutDueñoInput, Prisma.MascotaUncheckedCreateWithoutDueñoInput> | Prisma.MascotaCreateWithoutDueñoInput[] | Prisma.MascotaUncheckedCreateWithoutDueñoInput[];
    connectOrCreate?: Prisma.MascotaCreateOrConnectWithoutDueñoInput | Prisma.MascotaCreateOrConnectWithoutDueñoInput[];
    upsert?: Prisma.MascotaUpsertWithWhereUniqueWithoutDueñoInput | Prisma.MascotaUpsertWithWhereUniqueWithoutDueñoInput[];
    createMany?: Prisma.MascotaCreateManyDueñoInputEnvelope;
    set?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    disconnect?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    delete?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    connect?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    update?: Prisma.MascotaUpdateWithWhereUniqueWithoutDueñoInput | Prisma.MascotaUpdateWithWhereUniqueWithoutDueñoInput[];
    updateMany?: Prisma.MascotaUpdateManyWithWhereWithoutDueñoInput | Prisma.MascotaUpdateManyWithWhereWithoutDueñoInput[];
    deleteMany?: Prisma.MascotaScalarWhereInput | Prisma.MascotaScalarWhereInput[];
};
export type MascotaUncheckedUpdateManyWithoutDueñoNestedInput = {
    create?: Prisma.XOR<Prisma.MascotaCreateWithoutDueñoInput, Prisma.MascotaUncheckedCreateWithoutDueñoInput> | Prisma.MascotaCreateWithoutDueñoInput[] | Prisma.MascotaUncheckedCreateWithoutDueñoInput[];
    connectOrCreate?: Prisma.MascotaCreateOrConnectWithoutDueñoInput | Prisma.MascotaCreateOrConnectWithoutDueñoInput[];
    upsert?: Prisma.MascotaUpsertWithWhereUniqueWithoutDueñoInput | Prisma.MascotaUpsertWithWhereUniqueWithoutDueñoInput[];
    createMany?: Prisma.MascotaCreateManyDueñoInputEnvelope;
    set?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    disconnect?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    delete?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    connect?: Prisma.MascotaWhereUniqueInput | Prisma.MascotaWhereUniqueInput[];
    update?: Prisma.MascotaUpdateWithWhereUniqueWithoutDueñoInput | Prisma.MascotaUpdateWithWhereUniqueWithoutDueñoInput[];
    updateMany?: Prisma.MascotaUpdateManyWithWhereWithoutDueñoInput | Prisma.MascotaUpdateManyWithWhereWithoutDueñoInput[];
    deleteMany?: Prisma.MascotaScalarWhereInput | Prisma.MascotaScalarWhereInput[];
};
export type EnumEspecieFieldUpdateOperationsInput = {
    set?: $Enums.Especie;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MascotaCreateNestedOneWithoutAtencionesInput = {
    create?: Prisma.XOR<Prisma.MascotaCreateWithoutAtencionesInput, Prisma.MascotaUncheckedCreateWithoutAtencionesInput>;
    connectOrCreate?: Prisma.MascotaCreateOrConnectWithoutAtencionesInput;
    connect?: Prisma.MascotaWhereUniqueInput;
};
export type MascotaUpdateOneRequiredWithoutAtencionesNestedInput = {
    create?: Prisma.XOR<Prisma.MascotaCreateWithoutAtencionesInput, Prisma.MascotaUncheckedCreateWithoutAtencionesInput>;
    connectOrCreate?: Prisma.MascotaCreateOrConnectWithoutAtencionesInput;
    upsert?: Prisma.MascotaUpsertWithoutAtencionesInput;
    connect?: Prisma.MascotaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MascotaUpdateToOneWithWhereWithoutAtencionesInput, Prisma.MascotaUpdateWithoutAtencionesInput>, Prisma.MascotaUncheckedUpdateWithoutAtencionesInput>;
};
export type MascotaCreateWithoutDueñoInput = {
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
    atenciones?: Prisma.AtencionMedicaCreateNestedManyWithoutMascotaInput;
};
export type MascotaUncheckedCreateWithoutDueñoInput = {
    id?: number;
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
    atenciones?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutMascotaInput;
};
export type MascotaCreateOrConnectWithoutDueñoInput = {
    where: Prisma.MascotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MascotaCreateWithoutDueñoInput, Prisma.MascotaUncheckedCreateWithoutDueñoInput>;
};
export type MascotaCreateManyDueñoInputEnvelope = {
    data: Prisma.MascotaCreateManyDueñoInput | Prisma.MascotaCreateManyDueñoInput[];
    skipDuplicates?: boolean;
};
export type MascotaUpsertWithWhereUniqueWithoutDueñoInput = {
    where: Prisma.MascotaWhereUniqueInput;
    update: Prisma.XOR<Prisma.MascotaUpdateWithoutDueñoInput, Prisma.MascotaUncheckedUpdateWithoutDueñoInput>;
    create: Prisma.XOR<Prisma.MascotaCreateWithoutDueñoInput, Prisma.MascotaUncheckedCreateWithoutDueñoInput>;
};
export type MascotaUpdateWithWhereUniqueWithoutDueñoInput = {
    where: Prisma.MascotaWhereUniqueInput;
    data: Prisma.XOR<Prisma.MascotaUpdateWithoutDueñoInput, Prisma.MascotaUncheckedUpdateWithoutDueñoInput>;
};
export type MascotaUpdateManyWithWhereWithoutDueñoInput = {
    where: Prisma.MascotaScalarWhereInput;
    data: Prisma.XOR<Prisma.MascotaUpdateManyMutationInput, Prisma.MascotaUncheckedUpdateManyWithoutDueñoInput>;
};
export type MascotaScalarWhereInput = {
    AND?: Prisma.MascotaScalarWhereInput | Prisma.MascotaScalarWhereInput[];
    OR?: Prisma.MascotaScalarWhereInput[];
    NOT?: Prisma.MascotaScalarWhereInput | Prisma.MascotaScalarWhereInput[];
    id?: Prisma.IntFilter<"Mascota"> | number;
    nombre?: Prisma.StringFilter<"Mascota"> | string;
    especie?: Prisma.EnumEspecieFilter<"Mascota"> | $Enums.Especie;
    raza?: Prisma.StringNullableFilter<"Mascota"> | string | null;
    peso?: Prisma.DecimalFilter<"Mascota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFilter<"Mascota"> | number;
    dueñoId?: Prisma.IntFilter<"Mascota"> | number;
};
export type MascotaCreateWithoutAtencionesInput = {
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
    dueño: Prisma.DueñoCreateNestedOneWithoutMascotasInput;
};
export type MascotaUncheckedCreateWithoutAtencionesInput = {
    id?: number;
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
    dueñoId: number;
};
export type MascotaCreateOrConnectWithoutAtencionesInput = {
    where: Prisma.MascotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MascotaCreateWithoutAtencionesInput, Prisma.MascotaUncheckedCreateWithoutAtencionesInput>;
};
export type MascotaUpsertWithoutAtencionesInput = {
    update: Prisma.XOR<Prisma.MascotaUpdateWithoutAtencionesInput, Prisma.MascotaUncheckedUpdateWithoutAtencionesInput>;
    create: Prisma.XOR<Prisma.MascotaCreateWithoutAtencionesInput, Prisma.MascotaUncheckedCreateWithoutAtencionesInput>;
    where?: Prisma.MascotaWhereInput;
};
export type MascotaUpdateToOneWithWhereWithoutAtencionesInput = {
    where?: Prisma.MascotaWhereInput;
    data: Prisma.XOR<Prisma.MascotaUpdateWithoutAtencionesInput, Prisma.MascotaUncheckedUpdateWithoutAtencionesInput>;
};
export type MascotaUpdateWithoutAtencionesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
    dueño?: Prisma.DueñoUpdateOneRequiredWithoutMascotasNestedInput;
};
export type MascotaUncheckedUpdateWithoutAtencionesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
    dueñoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MascotaCreateManyDueñoInput = {
    id?: number;
    nombre: string;
    especie: $Enums.Especie;
    raza?: string | null;
    peso: runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada: number;
};
export type MascotaUpdateWithoutDueñoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
    atenciones?: Prisma.AtencionMedicaUpdateManyWithoutMascotaNestedInput;
};
export type MascotaUncheckedUpdateWithoutDueñoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
    atenciones?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutMascotaNestedInput;
};
export type MascotaUncheckedUpdateManyWithoutDueñoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    especie?: Prisma.EnumEspecieFieldUpdateOperationsInput | $Enums.Especie;
    raza?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    edadAproximada?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MascotaCountOutputType = {
    atenciones: number;
};
export type MascotaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    atenciones?: boolean | MascotaCountOutputTypeCountAtencionesArgs;
};
export type MascotaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaCountOutputTypeSelect<ExtArgs> | null;
};
export type MascotaCountOutputTypeCountAtencionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtencionMedicaWhereInput;
};
export type MascotaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    especie?: boolean;
    raza?: boolean;
    peso?: boolean;
    edadAproximada?: boolean;
    dueñoId?: boolean;
    dueño?: boolean | Prisma.DueñoDefaultArgs<ExtArgs>;
    atenciones?: boolean | Prisma.Mascota$atencionesArgs<ExtArgs>;
    _count?: boolean | Prisma.MascotaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mascota"]>;
export type MascotaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    especie?: boolean;
    raza?: boolean;
    peso?: boolean;
    edadAproximada?: boolean;
    dueñoId?: boolean;
    dueño?: boolean | Prisma.DueñoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mascota"]>;
export type MascotaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    especie?: boolean;
    raza?: boolean;
    peso?: boolean;
    edadAproximada?: boolean;
    dueñoId?: boolean;
    dueño?: boolean | Prisma.DueñoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mascota"]>;
export type MascotaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    especie?: boolean;
    raza?: boolean;
    peso?: boolean;
    edadAproximada?: boolean;
    dueñoId?: boolean;
};
export type MascotaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "especie" | "raza" | "peso" | "edadAproximada" | "dueñoId", ExtArgs["result"]["mascota"]>;
export type MascotaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dueño?: boolean | Prisma.DueñoDefaultArgs<ExtArgs>;
    atenciones?: boolean | Prisma.Mascota$atencionesArgs<ExtArgs>;
    _count?: boolean | Prisma.MascotaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MascotaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dueño?: boolean | Prisma.DueñoDefaultArgs<ExtArgs>;
};
export type MascotaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dueño?: boolean | Prisma.DueñoDefaultArgs<ExtArgs>;
};
export type $MascotaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mascota";
    objects: {
        dueño: Prisma.$DueñoPayload<ExtArgs>;
        atenciones: Prisma.$AtencionMedicaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        especie: $Enums.Especie;
        raza: string | null;
        peso: runtime.Decimal;
        edadAproximada: number;
        dueñoId: number;
    }, ExtArgs["result"]["mascota"]>;
    composites: {};
};
export type MascotaGetPayload<S extends boolean | null | undefined | MascotaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MascotaPayload, S>;
export type MascotaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MascotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MascotaCountAggregateInputType | true;
};
export interface MascotaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mascota'];
        meta: {
            name: 'Mascota';
        };
    };
    findUnique<T extends MascotaFindUniqueArgs>(args: Prisma.SelectSubset<T, MascotaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MascotaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MascotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MascotaFindFirstArgs>(args?: Prisma.SelectSubset<T, MascotaFindFirstArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MascotaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MascotaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MascotaFindManyArgs>(args?: Prisma.SelectSubset<T, MascotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MascotaCreateArgs>(args: Prisma.SelectSubset<T, MascotaCreateArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MascotaCreateManyArgs>(args?: Prisma.SelectSubset<T, MascotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MascotaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MascotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MascotaDeleteArgs>(args: Prisma.SelectSubset<T, MascotaDeleteArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MascotaUpdateArgs>(args: Prisma.SelectSubset<T, MascotaUpdateArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MascotaDeleteManyArgs>(args?: Prisma.SelectSubset<T, MascotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MascotaUpdateManyArgs>(args: Prisma.SelectSubset<T, MascotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MascotaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MascotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MascotaUpsertArgs>(args: Prisma.SelectSubset<T, MascotaUpsertArgs<ExtArgs>>): Prisma.Prisma__MascotaClient<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MascotaCountArgs>(args?: Prisma.Subset<T, MascotaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MascotaCountAggregateOutputType> : number>;
    aggregate<T extends MascotaAggregateArgs>(args: Prisma.Subset<T, MascotaAggregateArgs>): Prisma.PrismaPromise<GetMascotaAggregateType<T>>;
    groupBy<T extends MascotaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MascotaGroupByArgs['orderBy'];
    } : {
        orderBy?: MascotaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MascotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMascotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MascotaFieldRefs;
}
export interface Prisma__MascotaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    dueño<T extends Prisma.DueñoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DueñoDefaultArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    atenciones<T extends Prisma.Mascota$atencionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mascota$atencionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MascotaFieldRefs {
    readonly id: Prisma.FieldRef<"Mascota", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Mascota", 'String'>;
    readonly especie: Prisma.FieldRef<"Mascota", 'Especie'>;
    readonly raza: Prisma.FieldRef<"Mascota", 'String'>;
    readonly peso: Prisma.FieldRef<"Mascota", 'Decimal'>;
    readonly edadAproximada: Prisma.FieldRef<"Mascota", 'Int'>;
    readonly dueñoId: Prisma.FieldRef<"Mascota", 'Int'>;
}
export type MascotaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    where: Prisma.MascotaWhereUniqueInput;
};
export type MascotaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    where: Prisma.MascotaWhereUniqueInput;
};
export type MascotaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    where?: Prisma.MascotaWhereInput;
    orderBy?: Prisma.MascotaOrderByWithRelationInput | Prisma.MascotaOrderByWithRelationInput[];
    cursor?: Prisma.MascotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MascotaScalarFieldEnum | Prisma.MascotaScalarFieldEnum[];
};
export type MascotaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    where?: Prisma.MascotaWhereInput;
    orderBy?: Prisma.MascotaOrderByWithRelationInput | Prisma.MascotaOrderByWithRelationInput[];
    cursor?: Prisma.MascotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MascotaScalarFieldEnum | Prisma.MascotaScalarFieldEnum[];
};
export type MascotaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    where?: Prisma.MascotaWhereInput;
    orderBy?: Prisma.MascotaOrderByWithRelationInput | Prisma.MascotaOrderByWithRelationInput[];
    cursor?: Prisma.MascotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MascotaScalarFieldEnum | Prisma.MascotaScalarFieldEnum[];
};
export type MascotaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MascotaCreateInput, Prisma.MascotaUncheckedCreateInput>;
};
export type MascotaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MascotaCreateManyInput | Prisma.MascotaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MascotaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    data: Prisma.MascotaCreateManyInput | Prisma.MascotaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MascotaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MascotaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MascotaUpdateInput, Prisma.MascotaUncheckedUpdateInput>;
    where: Prisma.MascotaWhereUniqueInput;
};
export type MascotaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MascotaUpdateManyMutationInput, Prisma.MascotaUncheckedUpdateManyInput>;
    where?: Prisma.MascotaWhereInput;
    limit?: number;
};
export type MascotaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MascotaUpdateManyMutationInput, Prisma.MascotaUncheckedUpdateManyInput>;
    where?: Prisma.MascotaWhereInput;
    limit?: number;
    include?: Prisma.MascotaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MascotaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    where: Prisma.MascotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MascotaCreateInput, Prisma.MascotaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MascotaUpdateInput, Prisma.MascotaUncheckedUpdateInput>;
};
export type MascotaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
    where: Prisma.MascotaWhereUniqueInput;
};
export type MascotaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MascotaWhereInput;
    limit?: number;
};
export type Mascota$atencionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MascotaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MascotaSelect<ExtArgs> | null;
    omit?: Prisma.MascotaOmit<ExtArgs> | null;
    include?: Prisma.MascotaInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    email: string | null;
    password: string | null;
    rol: $Enums.Role | null;
    createdAt: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    email: string | null;
    password: string | null;
    rol: $Enums.Role | null;
    createdAt: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nombre: number;
    email: number;
    password: number;
    rol: number;
    createdAt: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    email?: true;
    password?: true;
    rol?: true;
    createdAt?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    email?: true;
    password?: true;
    rol?: true;
    createdAt?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    email?: true;
    password?: true;
    rol?: true;
    createdAt?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    email?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    rol?: Prisma.EnumRoleFilter<"Usuario"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaListRelationFilter;
    atencionesAbierta?: Prisma.AtencionMedicaListRelationFilter;
    examenesSolicitados?: Prisma.ExamenLaboratorioListRelationFilter;
    examenesLaboratorio?: Prisma.ExamenLaboratorioListRelationFilter;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    atencioneComoVeterinario?: Prisma.AtencionMedicaOrderByRelationAggregateInput;
    atencionesAbierta?: Prisma.AtencionMedicaOrderByRelationAggregateInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioOrderByRelationAggregateInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioOrderByRelationAggregateInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    rol?: Prisma.EnumRoleFilter<"Usuario"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaListRelationFilter;
    atencionesAbierta?: Prisma.AtencionMedicaListRelationFilter;
    examenesSolicitados?: Prisma.ExamenLaboratorioListRelationFilter;
    examenesLaboratorio?: Prisma.ExamenLaboratorioListRelationFilter;
}, "id" | "email">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _avg?: Prisma.UsuarioAvgOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
    _sum?: Prisma.UsuarioSumOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    rol?: Prisma.EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaCreateNestedManyWithoutVeterinarioInput;
    atencionesAbierta?: Prisma.AtencionMedicaCreateNestedManyWithoutAbiertaPorInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioCreateNestedManyWithoutSolicitadoPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutVeterinarioInput;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutAbiertaPorInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutSolicitadoPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUpdateManyWithoutVeterinarioNestedInput;
    atencionesAbierta?: Prisma.AtencionMedicaUpdateManyWithoutAbiertaPorNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUpdateManyWithoutSolicitadoPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutVeterinarioNestedInput;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutAbiertaPorNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutSolicitadoPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UsuarioCreateNestedOneWithoutAtencioneComoVeterinarioInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencioneComoVeterinarioInput, Prisma.UsuarioUncheckedCreateWithoutAtencioneComoVeterinarioInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAtencioneComoVeterinarioInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioCreateNestedOneWithoutAtencionesAbiertaInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencionesAbiertaInput, Prisma.UsuarioUncheckedCreateWithoutAtencionesAbiertaInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAtencionesAbiertaInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutAtencioneComoVeterinarioNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencioneComoVeterinarioInput, Prisma.UsuarioUncheckedCreateWithoutAtencioneComoVeterinarioInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAtencioneComoVeterinarioInput;
    upsert?: Prisma.UsuarioUpsertWithoutAtencioneComoVeterinarioInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutAtencioneComoVeterinarioInput, Prisma.UsuarioUpdateWithoutAtencioneComoVeterinarioInput>, Prisma.UsuarioUncheckedUpdateWithoutAtencioneComoVeterinarioInput>;
};
export type UsuarioUpdateOneRequiredWithoutAtencionesAbiertaNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencionesAbiertaInput, Prisma.UsuarioUncheckedCreateWithoutAtencionesAbiertaInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutAtencionesAbiertaInput;
    upsert?: Prisma.UsuarioUpsertWithoutAtencionesAbiertaInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutAtencionesAbiertaInput, Prisma.UsuarioUpdateWithoutAtencionesAbiertaInput>, Prisma.UsuarioUncheckedUpdateWithoutAtencionesAbiertaInput>;
};
export type UsuarioCreateNestedOneWithoutExamenesSolicitadosInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesSolicitadosInput, Prisma.UsuarioUncheckedCreateWithoutExamenesSolicitadosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutExamenesSolicitadosInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioCreateNestedOneWithoutExamenesLaboratorioInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesLaboratorioInput, Prisma.UsuarioUncheckedCreateWithoutExamenesLaboratorioInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutExamenesLaboratorioInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutExamenesSolicitadosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesSolicitadosInput, Prisma.UsuarioUncheckedCreateWithoutExamenesSolicitadosInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutExamenesSolicitadosInput;
    upsert?: Prisma.UsuarioUpsertWithoutExamenesSolicitadosInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutExamenesSolicitadosInput, Prisma.UsuarioUpdateWithoutExamenesSolicitadosInput>, Prisma.UsuarioUncheckedUpdateWithoutExamenesSolicitadosInput>;
};
export type UsuarioUpdateOneRequiredWithoutExamenesLaboratorioNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesLaboratorioInput, Prisma.UsuarioUncheckedCreateWithoutExamenesLaboratorioInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutExamenesLaboratorioInput;
    upsert?: Prisma.UsuarioUpsertWithoutExamenesLaboratorioInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutExamenesLaboratorioInput, Prisma.UsuarioUpdateWithoutExamenesLaboratorioInput>, Prisma.UsuarioUncheckedUpdateWithoutExamenesLaboratorioInput>;
};
export type UsuarioCreateWithoutAtencioneComoVeterinarioInput = {
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencionesAbierta?: Prisma.AtencionMedicaCreateNestedManyWithoutAbiertaPorInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioCreateNestedManyWithoutSolicitadoPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioUncheckedCreateWithoutAtencioneComoVeterinarioInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutAbiertaPorInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutSolicitadoPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioCreateOrConnectWithoutAtencioneComoVeterinarioInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencioneComoVeterinarioInput, Prisma.UsuarioUncheckedCreateWithoutAtencioneComoVeterinarioInput>;
};
export type UsuarioCreateWithoutAtencionesAbiertaInput = {
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaCreateNestedManyWithoutVeterinarioInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioCreateNestedManyWithoutSolicitadoPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioUncheckedCreateWithoutAtencionesAbiertaInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutVeterinarioInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutSolicitadoPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioCreateOrConnectWithoutAtencionesAbiertaInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencionesAbiertaInput, Prisma.UsuarioUncheckedCreateWithoutAtencionesAbiertaInput>;
};
export type UsuarioUpsertWithoutAtencioneComoVeterinarioInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutAtencioneComoVeterinarioInput, Prisma.UsuarioUncheckedUpdateWithoutAtencioneComoVeterinarioInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencioneComoVeterinarioInput, Prisma.UsuarioUncheckedCreateWithoutAtencioneComoVeterinarioInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutAtencioneComoVeterinarioInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutAtencioneComoVeterinarioInput, Prisma.UsuarioUncheckedUpdateWithoutAtencioneComoVeterinarioInput>;
};
export type UsuarioUpdateWithoutAtencioneComoVeterinarioInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencionesAbierta?: Prisma.AtencionMedicaUpdateManyWithoutAbiertaPorNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUpdateManyWithoutSolicitadoPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioUncheckedUpdateWithoutAtencioneComoVeterinarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutAbiertaPorNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutSolicitadoPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioUpsertWithoutAtencionesAbiertaInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutAtencionesAbiertaInput, Prisma.UsuarioUncheckedUpdateWithoutAtencionesAbiertaInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutAtencionesAbiertaInput, Prisma.UsuarioUncheckedCreateWithoutAtencionesAbiertaInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutAtencionesAbiertaInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutAtencionesAbiertaInput, Prisma.UsuarioUncheckedUpdateWithoutAtencionesAbiertaInput>;
};
export type UsuarioUpdateWithoutAtencionesAbiertaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUpdateManyWithoutVeterinarioNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUpdateManyWithoutSolicitadoPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioUncheckedUpdateWithoutAtencionesAbiertaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutVeterinarioNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutSolicitadoPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioCreateWithoutExamenesSolicitadosInput = {
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaCreateNestedManyWithoutVeterinarioInput;
    atencionesAbierta?: Prisma.AtencionMedicaCreateNestedManyWithoutAbiertaPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioUncheckedCreateWithoutExamenesSolicitadosInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutVeterinarioInput;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutAbiertaPorInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutLaboratoristaInput;
};
export type UsuarioCreateOrConnectWithoutExamenesSolicitadosInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesSolicitadosInput, Prisma.UsuarioUncheckedCreateWithoutExamenesSolicitadosInput>;
};
export type UsuarioCreateWithoutExamenesLaboratorioInput = {
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaCreateNestedManyWithoutVeterinarioInput;
    atencionesAbierta?: Prisma.AtencionMedicaCreateNestedManyWithoutAbiertaPorInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioCreateNestedManyWithoutSolicitadoPorInput;
};
export type UsuarioUncheckedCreateWithoutExamenesLaboratorioInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rol: $Enums.Role;
    createdAt?: Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutVeterinarioInput;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedCreateNestedManyWithoutAbiertaPorInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedCreateNestedManyWithoutSolicitadoPorInput;
};
export type UsuarioCreateOrConnectWithoutExamenesLaboratorioInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesLaboratorioInput, Prisma.UsuarioUncheckedCreateWithoutExamenesLaboratorioInput>;
};
export type UsuarioUpsertWithoutExamenesSolicitadosInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutExamenesSolicitadosInput, Prisma.UsuarioUncheckedUpdateWithoutExamenesSolicitadosInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesSolicitadosInput, Prisma.UsuarioUncheckedCreateWithoutExamenesSolicitadosInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutExamenesSolicitadosInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutExamenesSolicitadosInput, Prisma.UsuarioUncheckedUpdateWithoutExamenesSolicitadosInput>;
};
export type UsuarioUpdateWithoutExamenesSolicitadosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUpdateManyWithoutVeterinarioNestedInput;
    atencionesAbierta?: Prisma.AtencionMedicaUpdateManyWithoutAbiertaPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioUncheckedUpdateWithoutExamenesSolicitadosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutVeterinarioNestedInput;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutAbiertaPorNestedInput;
    examenesLaboratorio?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutLaboratoristaNestedInput;
};
export type UsuarioUpsertWithoutExamenesLaboratorioInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutExamenesLaboratorioInput, Prisma.UsuarioUncheckedUpdateWithoutExamenesLaboratorioInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutExamenesLaboratorioInput, Prisma.UsuarioUncheckedCreateWithoutExamenesLaboratorioInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutExamenesLaboratorioInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutExamenesLaboratorioInput, Prisma.UsuarioUncheckedUpdateWithoutExamenesLaboratorioInput>;
};
export type UsuarioUpdateWithoutExamenesLaboratorioInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUpdateManyWithoutVeterinarioNestedInput;
    atencionesAbierta?: Prisma.AtencionMedicaUpdateManyWithoutAbiertaPorNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUpdateManyWithoutSolicitadoPorNestedInput;
};
export type UsuarioUncheckedUpdateWithoutExamenesLaboratorioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atencioneComoVeterinario?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutVeterinarioNestedInput;
    atencionesAbierta?: Prisma.AtencionMedicaUncheckedUpdateManyWithoutAbiertaPorNestedInput;
    examenesSolicitados?: Prisma.ExamenLaboratorioUncheckedUpdateManyWithoutSolicitadoPorNestedInput;
};
export type UsuarioCountOutputType = {
    atencioneComoVeterinario: number;
    atencionesAbierta: number;
    examenesSolicitados: number;
    examenesLaboratorio: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    atencioneComoVeterinario?: boolean | UsuarioCountOutputTypeCountAtencioneComoVeterinarioArgs;
    atencionesAbierta?: boolean | UsuarioCountOutputTypeCountAtencionesAbiertaArgs;
    examenesSolicitados?: boolean | UsuarioCountOutputTypeCountExamenesSolicitadosArgs;
    examenesLaboratorio?: boolean | UsuarioCountOutputTypeCountExamenesLaboratorioArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountAtencioneComoVeterinarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtencionMedicaWhereInput;
};
export type UsuarioCountOutputTypeCountAtencionesAbiertaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtencionMedicaWhereInput;
};
export type UsuarioCountOutputTypeCountExamenesSolicitadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamenLaboratorioWhereInput;
};
export type UsuarioCountOutputTypeCountExamenesLaboratorioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamenLaboratorioWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    createdAt?: boolean;
    atencioneComoVeterinario?: boolean | Prisma.Usuario$atencioneComoVeterinarioArgs<ExtArgs>;
    atencionesAbierta?: boolean | Prisma.Usuario$atencionesAbiertaArgs<ExtArgs>;
    examenesSolicitados?: boolean | Prisma.Usuario$examenesSolicitadosArgs<ExtArgs>;
    examenesLaboratorio?: boolean | Prisma.Usuario$examenesLaboratorioArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rol?: boolean;
    createdAt?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "rol" | "createdAt", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    atencioneComoVeterinario?: boolean | Prisma.Usuario$atencioneComoVeterinarioArgs<ExtArgs>;
    atencionesAbierta?: boolean | Prisma.Usuario$atencionesAbiertaArgs<ExtArgs>;
    examenesSolicitados?: boolean | Prisma.Usuario$examenesSolicitadosArgs<ExtArgs>;
    examenesLaboratorio?: boolean | Prisma.Usuario$examenesLaboratorioArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        atencioneComoVeterinario: Prisma.$AtencionMedicaPayload<ExtArgs>[];
        atencionesAbierta: Prisma.$AtencionMedicaPayload<ExtArgs>[];
        examenesSolicitados: Prisma.$ExamenLaboratorioPayload<ExtArgs>[];
        examenesLaboratorio: Prisma.$ExamenLaboratorioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        email: string;
        password: string;
        rol: $Enums.Role;
        createdAt: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    atencioneComoVeterinario<T extends Prisma.Usuario$atencioneComoVeterinarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$atencioneComoVeterinarioArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    atencionesAbierta<T extends Prisma.Usuario$atencionesAbiertaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$atencionesAbiertaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtencionMedicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    examenesSolicitados<T extends Prisma.Usuario$examenesSolicitadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$examenesSolicitadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    examenesLaboratorio<T extends Prisma.Usuario$examenesLaboratorioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$examenesLaboratorioArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamenLaboratorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Usuario", 'String'>;
    readonly email: Prisma.FieldRef<"Usuario", 'String'>;
    readonly password: Prisma.FieldRef<"Usuario", 'String'>;
    readonly rol: Prisma.FieldRef<"Usuario", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$atencioneComoVeterinarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Usuario$atencionesAbiertaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Usuario$examenesSolicitadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Usuario$examenesLaboratorioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};

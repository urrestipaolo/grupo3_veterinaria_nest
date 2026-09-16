import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DueñoModel = runtime.Types.Result.DefaultSelection<Prisma.$DueñoPayload>;
export type AggregateDueño = {
    _count: DueñoCountAggregateOutputType | null;
    _avg: DueñoAvgAggregateOutputType | null;
    _sum: DueñoSumAggregateOutputType | null;
    _min: DueñoMinAggregateOutputType | null;
    _max: DueñoMaxAggregateOutputType | null;
};
export type DueñoAvgAggregateOutputType = {
    id: number | null;
};
export type DueñoSumAggregateOutputType = {
    id: number | null;
};
export type DueñoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
};
export type DueñoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
};
export type DueñoCountAggregateOutputType = {
    id: number;
    nombre: number;
    telefono: number;
    email: number;
    direccion: number;
    _all: number;
};
export type DueñoAvgAggregateInputType = {
    id?: true;
};
export type DueñoSumAggregateInputType = {
    id?: true;
};
export type DueñoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    direccion?: true;
};
export type DueñoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    direccion?: true;
};
export type DueñoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    direccion?: true;
    _all?: true;
};
export type DueñoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DueñoWhereInput;
    orderBy?: Prisma.DueñoOrderByWithRelationInput | Prisma.DueñoOrderByWithRelationInput[];
    cursor?: Prisma.DueñoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DueñoCountAggregateInputType;
    _avg?: DueñoAvgAggregateInputType;
    _sum?: DueñoSumAggregateInputType;
    _min?: DueñoMinAggregateInputType;
    _max?: DueñoMaxAggregateInputType;
};
export type GetDueñoAggregateType<T extends DueñoAggregateArgs> = {
    [P in keyof T & keyof AggregateDueño]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDueño[P]> : Prisma.GetScalarType<T[P], AggregateDueño[P]>;
};
export type DueñoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DueñoWhereInput;
    orderBy?: Prisma.DueñoOrderByWithAggregationInput | Prisma.DueñoOrderByWithAggregationInput[];
    by: Prisma.DueñoScalarFieldEnum[] | Prisma.DueñoScalarFieldEnum;
    having?: Prisma.DueñoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DueñoCountAggregateInputType | true;
    _avg?: DueñoAvgAggregateInputType;
    _sum?: DueñoSumAggregateInputType;
    _min?: DueñoMinAggregateInputType;
    _max?: DueñoMaxAggregateInputType;
};
export type DueñoGroupByOutputType = {
    id: number;
    nombre: string;
    telefono: string;
    email: string | null;
    direccion: string | null;
    _count: DueñoCountAggregateOutputType | null;
    _avg: DueñoAvgAggregateOutputType | null;
    _sum: DueñoSumAggregateOutputType | null;
    _min: DueñoMinAggregateOutputType | null;
    _max: DueñoMaxAggregateOutputType | null;
};
export type GetDueñoGroupByPayload<T extends DueñoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DueñoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DueñoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DueñoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DueñoGroupByOutputType[P]>;
}>>;
export type DueñoWhereInput = {
    AND?: Prisma.DueñoWhereInput | Prisma.DueñoWhereInput[];
    OR?: Prisma.DueñoWhereInput[];
    NOT?: Prisma.DueñoWhereInput | Prisma.DueñoWhereInput[];
    id?: Prisma.IntFilter<"Dueño"> | number;
    nombre?: Prisma.StringFilter<"Dueño"> | string;
    telefono?: Prisma.StringFilter<"Dueño"> | string;
    email?: Prisma.StringNullableFilter<"Dueño"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Dueño"> | string | null;
    mascotas?: Prisma.MascotaListRelationFilter;
};
export type DueñoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    mascotas?: Prisma.MascotaOrderByRelationAggregateInput;
};
export type DueñoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DueñoWhereInput | Prisma.DueñoWhereInput[];
    OR?: Prisma.DueñoWhereInput[];
    NOT?: Prisma.DueñoWhereInput | Prisma.DueñoWhereInput[];
    nombre?: Prisma.StringFilter<"Dueño"> | string;
    telefono?: Prisma.StringFilter<"Dueño"> | string;
    email?: Prisma.StringNullableFilter<"Dueño"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Dueño"> | string | null;
    mascotas?: Prisma.MascotaListRelationFilter;
}, "id">;
export type DueñoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DueñoCountOrderByAggregateInput;
    _avg?: Prisma.DueñoAvgOrderByAggregateInput;
    _max?: Prisma.DueñoMaxOrderByAggregateInput;
    _min?: Prisma.DueñoMinOrderByAggregateInput;
    _sum?: Prisma.DueñoSumOrderByAggregateInput;
};
export type DueñoScalarWhereWithAggregatesInput = {
    AND?: Prisma.DueñoScalarWhereWithAggregatesInput | Prisma.DueñoScalarWhereWithAggregatesInput[];
    OR?: Prisma.DueñoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DueñoScalarWhereWithAggregatesInput | Prisma.DueñoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Dueño"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Dueño"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"Dueño"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Dueño"> | string | null;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"Dueño"> | string | null;
};
export type DueñoCreateInput = {
    nombre: string;
    telefono: string;
    email?: string | null;
    direccion?: string | null;
    mascotas?: Prisma.MascotaCreateNestedManyWithoutDueñoInput;
};
export type DueñoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email?: string | null;
    direccion?: string | null;
    mascotas?: Prisma.MascotaUncheckedCreateNestedManyWithoutDueñoInput;
};
export type DueñoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mascotas?: Prisma.MascotaUpdateManyWithoutDueñoNestedInput;
};
export type DueñoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mascotas?: Prisma.MascotaUncheckedUpdateManyWithoutDueñoNestedInput;
};
export type DueñoCreateManyInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email?: string | null;
    direccion?: string | null;
};
export type DueñoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DueñoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DueñoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
};
export type DueñoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DueñoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
};
export type DueñoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
};
export type DueñoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DueñoScalarRelationFilter = {
    is?: Prisma.DueñoWhereInput;
    isNot?: Prisma.DueñoWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DueñoCreateNestedOneWithoutMascotasInput = {
    create?: Prisma.XOR<Prisma.DueñoCreateWithoutMascotasInput, Prisma.DueñoUncheckedCreateWithoutMascotasInput>;
    connectOrCreate?: Prisma.DueñoCreateOrConnectWithoutMascotasInput;
    connect?: Prisma.DueñoWhereUniqueInput;
};
export type DueñoUpdateOneRequiredWithoutMascotasNestedInput = {
    create?: Prisma.XOR<Prisma.DueñoCreateWithoutMascotasInput, Prisma.DueñoUncheckedCreateWithoutMascotasInput>;
    connectOrCreate?: Prisma.DueñoCreateOrConnectWithoutMascotasInput;
    upsert?: Prisma.DueñoUpsertWithoutMascotasInput;
    connect?: Prisma.DueñoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DueñoUpdateToOneWithWhereWithoutMascotasInput, Prisma.DueñoUpdateWithoutMascotasInput>, Prisma.DueñoUncheckedUpdateWithoutMascotasInput>;
};
export type DueñoCreateWithoutMascotasInput = {
    nombre: string;
    telefono: string;
    email?: string | null;
    direccion?: string | null;
};
export type DueñoUncheckedCreateWithoutMascotasInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email?: string | null;
    direccion?: string | null;
};
export type DueñoCreateOrConnectWithoutMascotasInput = {
    where: Prisma.DueñoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DueñoCreateWithoutMascotasInput, Prisma.DueñoUncheckedCreateWithoutMascotasInput>;
};
export type DueñoUpsertWithoutMascotasInput = {
    update: Prisma.XOR<Prisma.DueñoUpdateWithoutMascotasInput, Prisma.DueñoUncheckedUpdateWithoutMascotasInput>;
    create: Prisma.XOR<Prisma.DueñoCreateWithoutMascotasInput, Prisma.DueñoUncheckedCreateWithoutMascotasInput>;
    where?: Prisma.DueñoWhereInput;
};
export type DueñoUpdateToOneWithWhereWithoutMascotasInput = {
    where?: Prisma.DueñoWhereInput;
    data: Prisma.XOR<Prisma.DueñoUpdateWithoutMascotasInput, Prisma.DueñoUncheckedUpdateWithoutMascotasInput>;
};
export type DueñoUpdateWithoutMascotasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DueñoUncheckedUpdateWithoutMascotasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DueñoCountOutputType = {
    mascotas: number;
};
export type DueñoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mascotas?: boolean | DueñoCountOutputTypeCountMascotasArgs;
};
export type DueñoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoCountOutputTypeSelect<ExtArgs> | null;
};
export type DueñoCountOutputTypeCountMascotasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MascotaWhereInput;
};
export type DueñoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
    mascotas?: boolean | Prisma.Dueño$mascotasArgs<ExtArgs>;
    _count?: boolean | Prisma.DueñoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dueño"]>;
export type DueñoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
}, ExtArgs["result"]["dueño"]>;
export type DueñoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
}, ExtArgs["result"]["dueño"]>;
export type DueñoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
};
export type DueñoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "telefono" | "email" | "direccion", ExtArgs["result"]["dueño"]>;
export type DueñoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mascotas?: boolean | Prisma.Dueño$mascotasArgs<ExtArgs>;
    _count?: boolean | Prisma.DueñoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DueñoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DueñoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DueñoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Dueño";
    objects: {
        mascotas: Prisma.$MascotaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        telefono: string;
        email: string | null;
        direccion: string | null;
    }, ExtArgs["result"]["dueño"]>;
    composites: {};
};
export type DueñoGetPayload<S extends boolean | null | undefined | DueñoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DueñoPayload, S>;
export type DueñoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DueñoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DueñoCountAggregateInputType | true;
};
export interface DueñoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Dueño'];
        meta: {
            name: 'Dueño';
        };
    };
    findUnique<T extends DueñoFindUniqueArgs>(args: Prisma.SelectSubset<T, DueñoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DueñoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DueñoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DueñoFindFirstArgs>(args?: Prisma.SelectSubset<T, DueñoFindFirstArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DueñoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DueñoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DueñoFindManyArgs>(args?: Prisma.SelectSubset<T, DueñoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DueñoCreateArgs>(args: Prisma.SelectSubset<T, DueñoCreateArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DueñoCreateManyArgs>(args?: Prisma.SelectSubset<T, DueñoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DueñoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DueñoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DueñoDeleteArgs>(args: Prisma.SelectSubset<T, DueñoDeleteArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DueñoUpdateArgs>(args: Prisma.SelectSubset<T, DueñoUpdateArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DueñoDeleteManyArgs>(args?: Prisma.SelectSubset<T, DueñoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DueñoUpdateManyArgs>(args: Prisma.SelectSubset<T, DueñoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DueñoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DueñoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DueñoUpsertArgs>(args: Prisma.SelectSubset<T, DueñoUpsertArgs<ExtArgs>>): Prisma.Prisma__DueñoClient<runtime.Types.Result.GetResult<Prisma.$DueñoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DueñoCountArgs>(args?: Prisma.Subset<T, DueñoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DueñoCountAggregateOutputType> : number>;
    aggregate<T extends DueñoAggregateArgs>(args: Prisma.Subset<T, DueñoAggregateArgs>): Prisma.PrismaPromise<GetDueñoAggregateType<T>>;
    groupBy<T extends DueñoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DueñoGroupByArgs['orderBy'];
    } : {
        orderBy?: DueñoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DueñoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDueñoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DueñoFieldRefs;
}
export interface Prisma__DueñoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    mascotas<T extends Prisma.Dueño$mascotasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Dueño$mascotasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MascotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DueñoFieldRefs {
    readonly id: Prisma.FieldRef<"Dueño", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Dueño", 'String'>;
    readonly telefono: Prisma.FieldRef<"Dueño", 'String'>;
    readonly email: Prisma.FieldRef<"Dueño", 'String'>;
    readonly direccion: Prisma.FieldRef<"Dueño", 'String'>;
}
export type DueñoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    where: Prisma.DueñoWhereUniqueInput;
};
export type DueñoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    where: Prisma.DueñoWhereUniqueInput;
};
export type DueñoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    where?: Prisma.DueñoWhereInput;
    orderBy?: Prisma.DueñoOrderByWithRelationInput | Prisma.DueñoOrderByWithRelationInput[];
    cursor?: Prisma.DueñoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DueñoScalarFieldEnum | Prisma.DueñoScalarFieldEnum[];
};
export type DueñoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    where?: Prisma.DueñoWhereInput;
    orderBy?: Prisma.DueñoOrderByWithRelationInput | Prisma.DueñoOrderByWithRelationInput[];
    cursor?: Prisma.DueñoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DueñoScalarFieldEnum | Prisma.DueñoScalarFieldEnum[];
};
export type DueñoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    where?: Prisma.DueñoWhereInput;
    orderBy?: Prisma.DueñoOrderByWithRelationInput | Prisma.DueñoOrderByWithRelationInput[];
    cursor?: Prisma.DueñoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DueñoScalarFieldEnum | Prisma.DueñoScalarFieldEnum[];
};
export type DueñoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DueñoCreateInput, Prisma.DueñoUncheckedCreateInput>;
};
export type DueñoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DueñoCreateManyInput | Prisma.DueñoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DueñoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    data: Prisma.DueñoCreateManyInput | Prisma.DueñoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DueñoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DueñoUpdateInput, Prisma.DueñoUncheckedUpdateInput>;
    where: Prisma.DueñoWhereUniqueInput;
};
export type DueñoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DueñoUpdateManyMutationInput, Prisma.DueñoUncheckedUpdateManyInput>;
    where?: Prisma.DueñoWhereInput;
    limit?: number;
};
export type DueñoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DueñoUpdateManyMutationInput, Prisma.DueñoUncheckedUpdateManyInput>;
    where?: Prisma.DueñoWhereInput;
    limit?: number;
};
export type DueñoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    where: Prisma.DueñoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DueñoCreateInput, Prisma.DueñoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DueñoUpdateInput, Prisma.DueñoUncheckedUpdateInput>;
};
export type DueñoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
    where: Prisma.DueñoWhereUniqueInput;
};
export type DueñoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DueñoWhereInput;
    limit?: number;
};
export type Dueño$mascotasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DueñoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DueñoSelect<ExtArgs> | null;
    omit?: Prisma.DueñoOmit<ExtArgs> | null;
    include?: Prisma.DueñoInclude<ExtArgs> | null;
};

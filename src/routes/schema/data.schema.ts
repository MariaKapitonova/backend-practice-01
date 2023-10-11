import { Static, Type } from "@sinclair/typebox";

export const dataParamsSchema = Type.Object({
    id: Type.Number()
});

export type dataParamsType = Static<typeof dataParamsSchema>;

export const employeeParamsSchema = Type.Object({
    name: Type.Optional(Type.String()),
    title: Type.Optional(Type.String()),
    tribe: Type.Optional(Type.String())
});

export type employeeParamsType = Static<typeof employeeParamsSchema>;
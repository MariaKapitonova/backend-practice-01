import { dataParamsType } from "../routes/schema/data.schema";

export interface Tribe{
    name: string;
    department: string;
}
const tribes = [
    {
        name: "Billing",
        department: "Engineering"
    },
    {
        name: "Data",
        department: "Data"
    },
    {
        name: "InternStellar",
        department: "Engineering"
    },
];

export async function getAllTribes(): Promise<Tribe[]> {
    return tribes;
}

export async function getTribes(id: dataParamsType): Promise<Tribe> {
    return tribes[id.id];
}
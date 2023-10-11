import { dataParamsType, employeeParamsType } from "../routes/schema/data.schema";

export interface Employee{
    name: string;
    title: string;
    tribe: string;
}
const employees = [
    {
        name: "Peppa Pig",
        title: "Senior Developer",
        tribe: "Billing"
    },
    {
        name: "Willy Wonka",
        title: "Data Engineer",
        tribe: "Data"
    },
    {
        name: "Bugs Bunny",
        title: "Intern",
        tribe: "InternStellar"
    },
];

export async function getAllEmployees(employeeData?: employeeParamsType): Promise<Employee[]> {
    let filteredEmployees = employees;

    if (employeeData?.name) {
        filteredEmployees = filteredEmployees.filter(employee => employee.name === employeeData.name);
    }

    if (employeeData?.title) {
        filteredEmployees = filteredEmployees.filter(employee => employee.title === employeeData.title);
    }

    if (employeeData?.tribe) {
        filteredEmployees = filteredEmployees.filter(employee => employee.tribe === employeeData.tribe);
    }

    return filteredEmployees;
}

export async function getEmployee(id: dataParamsType): Promise<Employee> {
    return employees[id.id];
}

export async function deleteEmployee(id: dataParamsType): Promise<void> {
    employees.splice(id.id, 1);
}

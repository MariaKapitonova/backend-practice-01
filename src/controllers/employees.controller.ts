import * as employeeModel from '../modules/employees.model';
import { dataParamsType, employeeParamsType } from '../routes/schema/data.schema';

export async function getAllEmployees(employeeData?: employeeParamsType){
    try{
        return await employeeModel.getAllEmployees(employeeData);
    }catch(error){
        throw new Error('oh no');
    }
};

export async function getEmployee(id: dataParamsType){
    try{
        return await employeeModel.getEmployee(id);
    }catch(error){
        throw new Error('oh no');
    }
};

export async function deleteEmployee(id: dataParamsType){
    try{
        return await employeeModel.deleteEmployee(id);
    }catch(error){
        throw new Error('oh no');
    }
}

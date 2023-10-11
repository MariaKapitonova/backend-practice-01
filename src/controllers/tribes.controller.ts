import * as tribesModel from '../modules/tribes.model';
import { dataParamsType } from '../routes/schema/data.schema';

export async function getAllTribes(){
    try{
        return await tribesModel.getAllTribes();
    }catch(error){
        throw new Error('oh no');
    }
};

export async function getTribes(id: dataParamsType){
    try{
        return await tribesModel.getTribes(id);
    }catch(error){
        throw new Error('oh no');
    }
};
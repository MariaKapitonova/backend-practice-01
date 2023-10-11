import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesController from '../controllers/employees.controller';
import { dataParamsType } from "./schema/data.schema";

export default function getEmployee(fastify: FastifyInstance):RouteOptions{
    return{
        method: 'GET',
        url: '/api/employees/:id',
        handler: async (request, reply): Promise<void> => {
            const params = request.params as dataParamsType;
            const employees = await employeesController.getEmployee(params);

            if(!employees)
            {
                reply.code(404).send('Employee not found');
            }

            reply.code(200).send({employees});
        }
    }
}
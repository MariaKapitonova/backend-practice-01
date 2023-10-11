import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesController from '../controllers/employees.controller';
import { dataParamsType } from "./schema/data.schema";

export default function deleteEmployee(fastify: FastifyInstance):RouteOptions{
    return{
        method: 'DELETE',
        url: '/api/employees/:id',
        handler: async (request, reply): Promise<void> => {
            const params = request.params as dataParamsType;
            await employeesController.deleteEmployee(params);

            reply.code(200).send({success: true});
        }
    }
}
import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesController from '../controllers/employees.controller';
import { employeeParamsSchema } from "./schema/data.schema";

export default function getAllEmployees(fastify: FastifyInstance):RouteOptions{
    return{
        method: 'GET',
        url: '/api/employees',
        schema: {
            params: employeeParamsSchema,
        },
        handler: async (request, reply): Promise<void> => {

            // const params = request.params as employeeParamsType
            // const employees = await employeesController.getEmployee(params);

            const employees = await employeesController.getAllEmployees();
            reply.code(200).send({employees});
        }
    }
}
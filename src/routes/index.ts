import { FastifyInstance } from "fastify";
import deleteEmployee from "./delete-employee";
import getAllEmployees from "./get-all-employees";
import getAllTribes from "./get-all-tribes";
import getEmployee from "./get-employee";
import getTribe from "./get-tribe";

export default async function(fastify: FastifyInstance): Promise<void>{
    fastify.route(getAllEmployees(fastify));
    fastify.route(getEmployee(fastify));
    fastify.route(deleteEmployee(fastify));
    fastify.route(getAllTribes(fastify));
    fastify.route(getTribe(fastify));
}
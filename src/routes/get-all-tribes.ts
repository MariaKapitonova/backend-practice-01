import { FastifyInstance, RouteOptions } from "fastify";
import * as tribesController from '../controllers/tribes.controller';

export default function getAllTribes(fastify: FastifyInstance):RouteOptions{
    return{
        method: 'GET',
        url: '/api/tribes',
        handler: async (request, reply): Promise<void> => {
            const tribes = await tribesController.getAllTribes();

            reply.code(200).send({tribes});
        }
    }
}
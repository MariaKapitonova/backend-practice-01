import { FastifyInstance, RouteOptions } from "fastify";
import * as tribesController from '../controllers/tribes.controller';
import { dataParamsType } from "./schema/data.schema";

export default function getTribe(fastify: FastifyInstance):RouteOptions{
    return{
        method: 'GET',
        url: '/api/tribes/:id',
        handler: async (request, reply): Promise<void> => {
            const params = request.params as dataParamsType;
            const tribes = await tribesController.getTribes(params);

            if(!tribes)
            {
                reply.code(404).send('Tribe not found');
            }
            
            reply.code(200).send({tribes});
        }
    }
}
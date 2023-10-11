import Fastify, { FastifyInstance } from 'fastify';
//import routes from './routes';

const fastify: FastifyInstance = Fastify();

//fastify.register(routes);

fastify.listen({ host: '127.0.0.1', port: 3000 }).then((address)=> {
    console.log(`Server is running on ${address}`);
}).catch((error) => {
    console.log(`Server is experiensing L`);
    console.log(`Reason: ${error}`);
    process.exit(1);
});
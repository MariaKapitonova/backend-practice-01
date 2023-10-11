"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const fastify = (0, fastify_1.default)();
fastify.register(routes_1.default);
fastify.listen({ host: '127.0.0.1', port: 3000 }).then((address) => {
    console.log(`Server is running on ${address}`);
}).catch((error) => {
    console.log(`Server is experiensing L`);
    console.log(`Reason: ${error}`);
    process.exit(1);
});
//# sourceMappingURL=index.js.map
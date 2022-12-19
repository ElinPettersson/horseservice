import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { AuthRoutes } from "./auth.routes";

async function AuthService(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  await server.register(AuthRoutes);
}

export default AuthService;

import { fastifyJwt } from "@fastify/jwt";
import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import fastifyPlugin from "fastify-plugin";
import environment from "./environment";

async function Auth(
  server: FastifyInstance,
  options: FastifyPluginOptions
): Promise<void> {
  await server.register(fastifyJwt, {
    secret: environment.JWT_SECRET,
    sign: {
      expiresIn: environment.JWT_VALIDITY,
    },
  });

  server.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (error) {
        reply.code(401).send(error);
      }
    }
  );
}

export default fastifyPlugin(Auth);

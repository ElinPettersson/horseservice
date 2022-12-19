import { FastifyInstance, FastifyPluginOptions } from "fastify";
import * as controllers from "./auth.controllers";
import * as schemas from "./auth.schemas";

export async function AuthRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  server.route({
    method: "POST",
    url: "/login",
    schema: schemas.LoginSchema,
    handler: controllers.LoginController,
  });
  server.route({
    method: "POST",
    url: "/register",
    schema: schemas.RegisterSchema,
    handler: controllers.RegisterController,
  });
}

import { FastifyInstance, FastifyPluginOptions } from "fastify";
import * as schemas from "./content.schemas";
import * as controllers from "./content.controllers";

async function ContentRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  server.route({
    method: "POST",
    url: "/horse",
    preHandler: server.authenticate,
    schema: schemas.CreateHorseSchema,
    handler: controllers.CreateHorseController,
  });

  server.route({
    method: "GET",
    url: "/horse",
    preHandler: server.authenticate,
    handler: controllers.FindHorsesController,
  });

  server.route({
    method: "PUT",
    url: "/horse",
    preHandler: server.authenticate,
    handler: controllers.UpdateHorseController,
  });

  server.route({
    method: "DELETE",
    url: "/horse",
    preHandler: server.authenticate,
    handler: controllers.DeleteHorseController,
  });

  server.route({
    method: "GET",
    url: "/user/:email",
    preHandler: server.authenticate,
    handler: controllers.FindUserController,
  });
}

export default ContentRoutes;

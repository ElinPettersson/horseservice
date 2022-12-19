import { FastifyInstance, FastifyPluginOptions } from "fastify";
import ContentRoutes from "./content.routes";

async function ContentService(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  await server.register(ContentRoutes);
}

export default ContentService;

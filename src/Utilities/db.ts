import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import mongoose, { Model } from "mongoose";
import fp from "fastify-plugin";
import { IUser } from "../AuthService/auth.interfaces";
import { UserModel } from "../Models/UserModel";
import { HorseModel } from "../Models/HorseModel";
import { IHorse } from "../ContentService/content.interfaces";
import environment from "./environment";

export interface Models {
  UserModel: Model<IUser>;
  HorseModel: Model<IHorse>;
}

export interface Db {
  models: Models;
}

async function database(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  mongoose.connection.on("connected", () => {
    server.log.info("MongoDB Connected");
  });

  mongoose.connection.on("disconnected", () => {
    server.log.info("MongoDB Disconnected");
  });

  mongoose.set("strictQuery", false);

  await mongoose.connect(environment.DB_URL);

  const models: Models = { UserModel, HorseModel };

  server.addHook(
    "onRequest",
    async (req: FastifyRequest, rep: FastifyReply) => {
      req.db = { models };
    }
  );
}

export default fp(database);

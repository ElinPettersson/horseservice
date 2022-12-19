import { FastifyReply, FastifyRequest } from "fastify";
import {
  IAuthResponse,
  ILoginRequest,
  IRegisterRequest,
  IToken,
  IUser,
} from "./auth.interfaces";
import validateEmail from "../Utilities/validateEmail";

export async function RegisterController(
  request: FastifyRequest<{ Body: IRegisterRequest }>,
  reply: FastifyReply
) {
  try {
    const response: IAuthResponse = {
      success: true,
      message: "Successfully received request!",
      token: null,
    };

    if (!validateEmail(request.body.email)) {
      response.success = false;
      response.message = "Enter a valid email address!";
      return await reply.status(400).send(response);
    }

    const { UserModel } = request.db.models;

    const existUser = await UserModel.findOne({ email: request.body.email });

    if (existUser) {
      response.success = false;
      response.message = "User already exists!";
      return await reply.status(400).send(response);
    }

    const newUser: IUser = {
      _id: null,
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      horseIds: [],
    };

    const createdUser = await UserModel.create(newUser);

    const token: IToken = {
      name: createdUser.name,
      email: createdUser.email,
      userId: createdUser._id,
    };

    const jwtToken = await reply.jwtSign(token);

    response.success = true;
    response.message = "User successfully created!";
    response.token = jwtToken;

    await reply.status(201).send(response);
  } catch (error) {
    await reply.status(500).send("An error occurred");
  }
}

export async function LoginController(
  request: FastifyRequest<{ Body: ILoginRequest }>,
  reply: FastifyReply
) {
  const { UserModel } = request.db.models;

  const response: IAuthResponse = {
    success: false,
    message: "",
    token: null,
  };

  const user = await UserModel.findOne({
    email: request.body.email,
    password: request.body.password,
  });

  if (!user) {
    response.success = false;
    response.message = "User does not exist or wrong password!";
    response.token = null;
    return await reply.status(403).send(response);
  }

  const token: IToken = {
    name: user.name,
    email: user.email,
    userId: user._id,
  };

  const jwtToken = await reply.jwtSign(token);

  response.success = true;
  response.message = "Successfully logged in!";
  response.token = jwtToken;

  console.log("Returning::", response);

  return await reply.status(200).send(response);
}

import { FastifyRequest, FastifyReply } from "fastify";
import { IGetUserByEmail, IHorse } from "./content.interfaces";

export async function CreateHorseController(
  req: FastifyRequest<{ Body: IHorse }>,
  rep: FastifyReply
) {
  const userEmail = req.user.email;
  const { HorseModel, UserModel } = req.db.models;

  const theUser = await UserModel.find({ email: userEmail });
  console.log(req.user.userId);
  console.log(theUser);

  if (theUser === null) {
    return await rep.status(400).send("No user exists for this token!");
  }

  const newHorse = {
    name: req.body.name,
    born: req.body.born,
    gender: req.body.gender,
    breed: req.body.breed,
    caliber: req.body.caliber,
    type: req.body.type,
    color: req.body.color,
    strength: 0,
    speed: 0,
    endurance: 0,
    maintenance: 0,
    description: req.body.description,
    picture: req.body.picture,
    owner: req.body.owner,
  };

  if (!newHorse.owner.includes(userEmail)) {
    newHorse.owner = userEmail;
  }

  const addHorse = await HorseModel.create(newHorse);

  await UserModel.findOneAndUpdate(
    { email: userEmail },
    {
      $push: { horseIds: addHorse._id },
    }
  ).exec();

  return await rep.status(201).send(addHorse);
}

export async function UpdateHorseController(
  req: FastifyRequest<{ Body: IHorse }>,
  rep: FastifyReply
) {
  const { HorseModel } = req.db.models;
  const { email } = req.user;

  const horseExists = await HorseModel.findById(req.body._id);

  if (horseExists === null) {
    return await rep
      .status(404)
      .send(`No horse was found with id ${req.body._id}!`);
  }

  if (!horseExists.owner.includes(email)) {
    return await rep.status(403).send(`You do not have acces to this horse!`);
  }

  const updatedHorses = await HorseModel.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true }
  );

  return await rep.status(200).send(updatedHorses);
}

export async function GetUserByEmailController(
  req: FastifyRequest<{ Params: IGetUserByEmail }>,
  rep: FastifyReply
) {
  const { UserModel } = req.db.models;

  const foundUser = await UserModel.findOne({ email: req.params.email });

  if (foundUser === null) {
    return await rep.status(404).send("User not found!");
  }

  return await rep.status(200).send({
    email: foundUser.email,
    userId: foundUser._id,
  });
}

export async function DeleteHorseController(
  req: FastifyRequest<{ Body: IHorse }>,
  rep: FastifyReply
) {
  const { HorseModel } = req.db.models;
  const { email } = req.user;

  const horseExists = await HorseModel.findById(req.body._id);

  if (horseExists === null) {
    return await rep
      .status(404)
      .send(`No horse was found with id ${req.body._id}!`);
  }

  if (!horseExists.owner.includes(email)) {
    return await rep.status(403).send(`You do not have acces to this horse!`);
  }

  const deletedHorse = await HorseModel.findByIdAndDelete(req.body._id);

  return await rep.status(200).send(deletedHorse);
}

import { Schema, model } from "mongoose";
import { IHorse } from "../ContentService/content.interfaces";

const HorseSchema = new Schema<IHorse>({
  name: { type: String, required: true },
  born: { type: Number, required: true },
  gender: { type: String, required: true },
  breed: { type: String, required: true },
  caliber: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  strength: { type: Number, required: false },
  speed: { type: Number, required: false },
  endurance: { type: Number, required: false },
  maintenance: { type: Number, required: false },
  description: { type: String, required: true },
  image: { type: String, required: false },
  owner: { type: String, required: true },
});

export const HorseModel = model<IHorse>("Horse", HorseSchema);

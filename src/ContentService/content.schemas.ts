const HorseProperties = {
  name: { description: "Name of the horse", type: "string" },
  born: { description: "Year the horse was born", type: "number" },
  gender: { description: "The gender of the horse", type: "string" },
  breed: { description: "The breed of the horse", type: "string" },
  caliber: { description: "The caliber of the horse", type: "string" },
  type: { description: "Type of horse", type: "string" },
  color: { description: "The color of the horse", type: "string" },
  strength: { description: "The strength of the horse", type: "number" },
  speed: { description: "The speed of the horse", type: "number" },
  endurance: { description: "The endurance of the horse", type: "number" },
  maintenance: {
    description: "The maintenance of the horse",
    type: "number",
  },
  description: {
    description: "The description of the horse",
    type: "string",
  },
  image: { description: "A image URL of the horse", type: "string" },
  owner: {
    description: "The owner of the horse",
    type: "string",
  },
};

export const CreateHorseSchema = {
  body: {
    type: "object",
    description: "The horse to create",
    required: [
      "name",
      "born",
      "gender",
      "breed",
      "caliber",
      "type",
      "color",
      "description",
      "owner",
    ],
    properties: HorseProperties,
  },
  response: {
    200: {
      type: "object",
      description: "The created horse",
      properties: {
        name: { description: "Name of the horse", type: "string" },
        born: { description: "Year the horse was born", type: "number" },
        gender: { description: "The gender of the horse", type: "string" },
        breed: { description: "The breed of the horse", type: "string" },
        caliber: { description: "The caliber of the horse", type: "string" },
        type: { description: "Type of horse", type: "string" },
        color: { description: "The color of the horse", type: "string" },
        strength: { description: "The strength of the horse", type: "number" },
        speed: { description: "The speed of the horse", type: "number" },
        endurance: {
          description: "The endurance of the horse",
          type: "number",
        },
        maintenance: {
          description: "The maintenance of the horse",
          type: "number",
        },
        description: {
          description: "The description of the horse",
          type: "string",
        },
        image: { description: "A image URL of the horse", type: "string" },
      },
      owner: { description: "The owner of the horse", type: "string" },
    },
  },
};

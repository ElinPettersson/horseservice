export interface IHorse {
  _id: string;
  name: string;
  born: number;
  gender: string;
  breed: string;
  caliber: string;
  type: string;
  color: string;
  strength: number;
  speed: number;
  endurance: number;
  maintenance: number;
  description: string;
  image: string;
  owner: string;
}

export interface IFindUser {
  _id: string;
  email: string;
  horseIds: Array<string>;
}

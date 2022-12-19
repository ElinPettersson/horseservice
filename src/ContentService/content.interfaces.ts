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
  picture: string;
  owner: string;
}

export interface IGetUserByEmail {
  email: string;
}

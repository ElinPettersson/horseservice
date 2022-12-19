export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  success: boolean;
  message: string;
  token: string | null;
}

export interface IToken {
  name: string;
  email: string;
  userId: string | null;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  _id: string | null;
  name: string;
  email: string;
  password: string;
  horseIds: Array<string>;
}

// export interface IHorse {
//   _id: Array<string> | null;
//   name: string;
//   born: number;
//   gender: string;
//   breed: string;
//   caliber: string;
//   type: string;
//   color: string;
//   strength: number;
//   speed: number;
//   endurance: number;
//   maintenance: number;
//   description: string;
//   picture: string;
// }

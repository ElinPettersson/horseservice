import { IHorse } from "../ContentService/content.interfaces";

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
  horseIds: Array<IHorse>;
}
